const fk = require("fs");

fk.readFile("./message.txt", "utf8", function(err,data){
    if(err) throw err;
    console.log(data);
});