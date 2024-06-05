/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import * as fs from "fs";
var link ="";


await inquirer.prompt([
    {
        name:"link",
        type:"input",
        message:"enter link: ",
    },
]).then((answer)=> {
    link = answer.link;
});

qr.image(link,{type:"png"}).pipe(fs.createWriteStream(link+".png"));
fs.writeFile("./URL.txt",link+"\n",{flag:"a"},(err)=>{
    if(err) throw err;
});


