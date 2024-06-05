import express from "express";

const app = express();
//set port
const port = 3000;
app.get("/",(req,res)=>{
    //get today date
    var today = new Date();
    //get the day in between 0-6;
    var day  = today.getDay();
    //default message 
    var type = "It's the weekday";
    var adv = "it's time to work hard!"
    if(day === 0 || day === 6){
        // update message if day is sunday(0) or saturday(6);
        type = "It's a weekend";
        adv = "it's time to have fun!";
    }
    //render the page index.ejs with data in json 
    res.render("index.ejs",{
        dateType: type,
        advice:adv,
    });
});

//start listening on port 3000
app.listen(port,()=>{
    console.log(`Server is Listening on port: ${port}`);
});