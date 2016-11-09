// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
    var rps=["rock", "paper", "scissors"];
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.
    var random = Math.floor(Math.random() * 3);
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
      rps[random];
    // Task 1, Step 4: return this new value
    return rps[random];
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    
    var winner;
    
     if(userChoice == "rock" && computerChoice == "paper"){
     winner =  "computer wins!";
     }
     else if(userChoice == "rock" && computerChoice == "scissors"){
         console.log("user wins!");
     }
     else if(userChoice == "rock" && computerChoice == "rock"){
        winner =  "it's a draw!";
          //$("#winner").prepend('<img src="http://pa1.narvii.com/5821/9694fcc968a297913502d04cab8052a71144ffaa_hq.gif"/>');
     }
     else if(userChoice == "paper" && computerChoice == "scissors"){
         winner =  "computer wins!";
     }
      else if(userChoice == "paper" && computerChoice == "rock"){
         winner =  "user wins!";
     }
      else if(userChoice == "paper" && computerChoice == "paper"){
         winner =  "it's a draw!";
     }
     else if(userChoice == "scissors" && computerChoice == "paper"){
         winner =  "user wins!";
     }
     else if(userChoice == "scissors" && computerChoice == "rock"){
         winner =  "computer wins!";
     }
     else if(userChoice == "scissors" && computerChoice == "scissors"){
         winner =  "it's a draw!";
     } 
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"
   console.log(winner);
    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    $("#computer-choice").html(computerChoice);
    // Task 5: Show the winner in HTML after the word "Winner:"
 
    $("#winner").html(winner);
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = generateComputerChoice();

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = "rock";
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.
 // userChoice =null;
 // $(".choice").click(function(){
  //  console.log( $(".choice").val());
//  });
    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    pickWinner(userChoice, computerChoice);

});