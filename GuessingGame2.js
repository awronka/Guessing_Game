var random = Math.floor(Math.random() * 100) +1; 
var i = 5; 
var answerArr = []; 
var img = $('#image');


//img.hide();
$("#over").hide();
$("#submit").on("click", function() {
    event.preventDefault();
    userInput = document.getElementById("user-input").value;
    duplicate = (jQuery.inArray(userInput, answerArr)!==-1)
     
    if (duplicate) { 
        alert("You have already guessed this number. Pick a different number.")
        i++; 
    };

    if (userInput >= 0 && userInput <= 100 && userInput.length > 0) { 
        i--;
        answerArr.push(userInput); 
    } else if (userInput.length == 0) { 
        alert("Please enter a number from 1-100.");
    } else {
        alert("Please enter a number from 1-100."); 
    };

    $("#remaining-guesses").children("span").text(i); 
	$("#guessed").children("span").text(answerArr); 

    if (i <= 0) { 
        $("#remaining-guesses").hide();
        $("#over").show();
        answerArr = [];

    }

    if (i>=1){
    $("#over").hide();
    $("#theAnswer").children("span").text(random).hide();
  
    }

    if (userInput === random){ 
    	    $("#over").hide();
            img.show();
            $("#remaining-guesses").hide();

    }

    $('#user-input').val(''); 

    guesserfunc = function() { 
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
        $("#guess-result").text(guesserfunc()); 
    } else {
        $("#guess-result").text(''); 
    }


});

$("#reset").on("click",function() {
    i = 5; 
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
    i = 5; 
    $("#guess-result").text('');
    $("#remaining-guesses").children("span").text(i)
    $("#over").show();
    img.show();
    $("#theAnswer").children("span").text(random).show();
    answerArr = [];
    random = Math.floor(Math.random() * 100);
});
