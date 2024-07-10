import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "avinashkumargupta",
  host: "localhost",
  database: "world",
  password: "",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId;
let users = [];
// let users = [
//   { id: 1, name: "Angela", color: "teal" },
//   { id: 2, name: "Jack", color: "powderblue" },
// ];
async function getCurrentUser(){
  const result  = await db.query("select * from users");
  users = result.rows
  if(typeof(currentUserId)==='undefined'){
    currentUserId = users[0].id;
  }
  return users.find((user)=>user.id == currentUserId);
}

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries join users on users.id = user_id where user_id = $1",[currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}


app.get("/", async (req, res) => {
  
  
  const currentUser = await getCurrentUser();
  const countries = await checkVisisted();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentUser.color,
  });
});


app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      console.log(currentUserId);
      await db.query(
        "INSERT INTO visited_countries (country_code,user_id) VALUES ($1,$2)",
        [countryCode,currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
      const countries = await checkVisisted();
      const currentUser = await getCurrentUser();
      
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        users: users,
        color: currentUser.color,
        error: "Country has already been added, try again.",
  });
    }
  } catch (err) {
    console.log(err);
    const countries = await checkVisisted();
    const currentUser = await getCurrentUser();
    
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      users: users,
      color: currentUser.color,
      error: "Country name does not exist, try again.",
  });
  }
});


app.post("/user", async (req, res) => {
  
  if(req.body.add){
    res.render("new.ejs");
  }else{
    currentUserId=req.body.user;
    console.log()
    res.redirect("/");
  }
  
});

app.post("/new", async (req, res) => {
  const username = req.body.name;
  const color = req.body.color;
  const result = await db.query("insert into users(name,color) values($1,$2) RETURNING *",[username,color]);
  currentUserId = result.rows[0].id;
  res.redirect("/");
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
