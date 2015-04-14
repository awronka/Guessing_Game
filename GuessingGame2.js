var random = Math.floor(Math.random() * 100) +1; // generate random number from 1 - 100
var i = 5; // initial number of guesses
var answerArr = []; //creates empty array to track player guesses for duplicates
var img = $('#image');


//img.hide();
$("#over").hide();
$("#submit").on("click", function() {
    event.preventDefault();
    userInput = document.getElementById("user-input").value;
    duplicate = (jQuery.inArray(userInput, answerArr)!==-1)
     
    if (duplicate) { //Checks for duplicate inputs with array created above
        alert("You have already guessed this number. Pick a different number.")
        i++; //adds guess back for duplicate input
    };

    if (userInput >= 0 && userInput <= 100 && userInput.length > 0) { //Guess count only reduces with valid guess
        i--;
        answerArr.push(userInput); //adds user input to the array to track guesses
    } else if (userInput.length == 0) { //Alert if empty field is submitted as guess
        alert("Please enter a number from 1-100.");
    } else {
        alert("Please enter a number from 1-100."); //Alert if input is not number from 0-100
    };

    $("#remaining-guesses").children("span").text(i); //Adds text to show number of guesses left
	$("#guessed").children("span").text(answerArr); //Shows the array of guesses the player already guessed

    if (i <= 0) { //notifies player if there are no more guesses left
        $("#remaining-guesses").hide();
        $("#over").show();
        answerArr = [];

    }

    if (i>=1){
    $("#over").hide();
    $("#theAnswer").children("span").text(random).hide();
    //hides the game over and answer while i is greater than 1
    }

    if (userInput === random){ //shows the winning image (doesnt work)
    	    $("#over").hide();
            img.show();
            $("#remaining-guesses").hide();

    }

    $('#user-input').val(''); //empties the input field after each guess

    guesserfunc = function() { //function to determine correct response to a player's guess
        diff = userInput - random;

        if (diff > 15) {
            return  "You are super cold! Guess lower."
        } else if (diff <= 15 && diff > 5) {
            return "You are warm. Lower!"
        } else if (diff <= 5 && diff > 2) {
            return "You are hot! Guess lower!"
        } else if (diff < -15) {
            return "You are super cold! Guess higher."
        } else if (diff >= -15 && diff < -5) {
            return "You are warm. Higher!"
        } else if (diff >= -5 && diff < -2) {
            return "You are hot! Guess higher."
        } else if (diff >= -2 && diff < 0) {
            return "You are red hot! Guess higher."
        } else if (diff >= 2 && diff < 0) {
            return "You are red hot! Guess higher."
        } else {
            return "Congratulations! You guessed right!";

        };
    };

    if (userInput >= 0 && userInput <= 100 && userInput.length > 0 && !duplicate) {
        $("#guess-result").text(guesserfunc()); // shows whether user's guess was hot or cold given a valid guess
    } else {
        $("#guess-result").text(''); //clears prior guess result after an invalid guess
    }


});

$("#reset").on("click",function() {
    i = 5; //resets the game
    $("#guess-result").text('');
    $("#remaining-guesses").children("span").text(i);
    $("#remaining-guesses").show();
    $("#over").hide();
    img.hide();
    answerArr = [];
     $("#theAnswer").children("span").text(random).hide();
    $("#guessed").children("span").text(answerArr); 
    random = Math.floor(Math.random() * 100);
});

$("#answer").on("click", function() {
    i = 5; //resets the game and shows the answer and states game over
    $("#guess-result").text('');
    $("#remaining-guesses").children("span").text(i)
    $("#over").show();
    img.show();
    $("#theAnswer").children("span").text(random).show();
    answerArr = [];
    random = Math.floor(Math.random() * 100);
});
