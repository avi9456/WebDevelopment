import express from "express";

const app = express();

// listing on port 3000
const port = 3000;

app.listen(port,()=>{
  console.log(`Server running on port ${port}.`);
});





// import express from "express";
// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}.`);
// });
