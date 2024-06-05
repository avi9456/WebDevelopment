import express from "express";

const app = express();

//listing on port 65000;
const port = 65000;

app.listen(port,()=>{
  console.log(`Server started  on port: ${port}`);
});

app.get("/",(req,res)=>{
  res.send(`<h1 style="color:red">Home</h1>`);
  
});

app.get("/about",(req,res)=>{
  res.send(`<h1 style="color:blue">about</h1>`);

});

app.get("/contact",(req,res)=>{
  res.send(`<h1 style="color:green">Contact</h1>`);
  
});












// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
