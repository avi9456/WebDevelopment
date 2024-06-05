
function numberSelect(){
    return Math.floor(Math.random() * 6) + 1;
}

var player1 = numberSelect();
var player2 = numberSelect();
if(player1 > player2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}else if(player1 < player2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else{
    document.querySelector("h1").textContent = "Draw!";
}

document.querySelector(".img1").setAttribute("src","./images/dice" + player1 + ".png");
document.querySelector(".img2").setAttribute("src","./images/dice" + player2 + ".png");

// using array of image 
// var imageArray = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
// var player1 = numberSelect();
// var player2 = numberSelect();

// if(player1 > player2){
//     document.querySelector("h1").textContent = "🚩Player 1 Wins!";
// }else if(player1 < player2){
//     document.querySelector("h1").textContent = "Player 2 Wins!🚩";
// } else{
//     document.querySelector("h1").textContent = "Draw!";
// }

// document.querySelector(".img1").setAttribute("src",imageArray[player1]);
// document.querySelector(".img2").setAttribute("src",imageArray[player2]);



