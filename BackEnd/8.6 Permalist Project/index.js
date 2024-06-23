import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

//database connection
const db = new pg.Client({
  user: "avinashkumargupta",
  password: "",
  database: "permalist",
  host: "localhost",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// let items = [
//   { id: 1, title: "Buy milk" },
//   { id: 2, title: "Finish homework" },
// ];
async function getItem(){
  const result = await db.query("select * from item order by id ASC");
  return result.rows;
}
app.get("/", async (req, res) => {
  try{
    const items = await getItem();
    if(typeof(items) ==='undefine'){
      res.render("index.ejs",{
        listTitle: "Today",
      });
    }
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  }catch(err){
    console.log(err);
  }
});

app.post("/add",async (req, res) => {
  const item = req.body.newItem;
  // items.push({ title: item });
  try{
    await db.query("insert into item(title) values ($1)",[item]);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }
});

app.post("/edit", async (req, res) => {
  const id  = req.body.updatedItemId;
  const title = req.body.updatedItemTitle;
  try{
    const result = await db.query("update item set title = $1 where id = $2 returning *",[title,id]);
    console.log(result.rows);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const id  = req.body.deleteItemId;
  try{
    const result = await db.query("delete from item where id = $1 returning *",[id]);
    console.log(result.rows);
    res.redirect("/");
  }catch(err){
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
