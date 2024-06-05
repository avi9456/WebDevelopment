$(document).ready(function(){

    var buttonColours = new Array("red", "blue", "green", "yellow");
    var gamePattern = new Array(); 
    var userClickedPattern = new Array();
    var level = 0;
    var started = false;


    $(".btn").click(function () {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        if(level === userClickedPattern.length){
            checkAnswer(userClickedPattern.length -1)
        }
    });

    $(document).keydown(function(event){
        if(!started){
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
        }


    });
    
    function nextSequence(){
        level++;
        $("#level-title").text("Level " + level);

        var randomNumber =  Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        $("#" + randomChosenColour).fadeIn(100).fadeOut(200).fadeIn(100);
        playSound(randomChosenColour);
    }

    function playSound(name){
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    }

    function animatePress(currentColour) {
        $("#" + currentColour).toggleClass("pressed");
        setTimeout(function (){
            $("#" + currentColour).toggleClass("pressed");
        },100);
    }

    function checkAnswer(currentLevel){
        if(gamePattern[currentLevel] !== userClickedPattern[currentLevel]){
            $("#level-title").text("Game Over, Press Any Key to Restart");
            
            $("body").toggleClass("game-over");
            playSound("wrong");
            setTimeout(function (){
                $("body").toggleClass("game-over");
            },200);
            
            startOver();
        }else{
            setTimeout(function (){
                nextSequence();
            },1000);
            userClickedPattern.length = 0;
        }
        
    }

    function startOver(){
        level=0;
        gamePattern.length=0;
        started=false;
    }
});


//first attempt
// function nextSequence(){
        
//     return Math.floor(Math.random() * 4);
// }
// var buttonColours = new Array("red", "blue", "green", "yellow");
// var gamePattern = new Array();
// var userClickedPattern = new Array();
// var randomNumber = nextSequence();
// var randomChosenColour = randomNumber;
// gamePattern.push(randomChosenColour);
// $(".btn").click(function(){
//     var userChosenColour = $(this)[0].id;
//     userClickedPattern.push(userChosenColour);
//     var toggle = "#" + userChosenColour;
//     var audio = new Audio("./sounds/" + userChosenColour + ".mp3");
//     $(toggle).toggleClass("pressed");
//     audio.play();
//     setTimeout(function(){
//         $(toggle).toggleClass("pressed");
//     },120);
// });


// Answer














// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }


