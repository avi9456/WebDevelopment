import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "avinash";
const yourPassword = "gupta";
const yourAPIKey = "f3f15df9-a173-49f8-ae21-10d5a15f17d5";
const yourBearerToken = "f469229e-44c1-493f-803c-b3005ecde9f0";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  let response = await axios.get(`${API_URL}random`);
  //The data you get back should be sent to the ejs file as "content"
  res.render("index.ejs",{content:JSON.stringify(response.data)});
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  let response = await axios.get(`${API_URL}all?page=2`,{
    auth:{
      username:yourUsername,
      password:yourPassword
    }
  });
  res.render("index.ejs",{content:JSON.stringify(response.data)});
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  let response = await axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`);
  res.render("index.ejs",{content:JSON.stringify(response.data)});
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  try{
  let response = await axios.get(`${API_URL}secrets/42`,{
    headers: {
      Authorization: `Bearer ${yourBearerToken}`
    },
  });

  res.render("index.ejs",{content:JSON.stringify(response.data)});
}catch(err){
  console.log(err.message);
  res.redirect("/");
}
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
