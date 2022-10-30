let userScoreDisplay = 0;
let computerScoreDisplay = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

const ComputerMove_p = document.querySelector(".Computer-Move > p");
const UserMove_p = document.querySelector(".User-Move > p");



function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const random_val = Math.floor(Math.random() * 3);
    return choices[random_val];
}

function convertToWord(letter){
    console.log("here")
    if(letter === "r"){
        return "Rock";
    } else if(letter === "p"){
        return "Paper";
    } else{
        return "Scissors";
    }

}


function win(userChoice, computerChoice){
    console.log("here in win")
    userScoreDisplay++;
    userScore_span.innerHTML = userScoreDisplay;
    result_p.innerHTML= convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". Congratulations! You win!"

}


function lose(userChoice, computerChoice){
    console.log("here in lose")
    computerScoreDisplay++;
    computerScore_span.innerHTML = computerScoreDisplay;
    result_p.innerHTML= convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". Boo! You lose!"
    
}


function draw(userChoice, computerChoice){
    result_p.innerHTML= "Draw!"
    
}


function Game(userChoice){
    const compChoice = getCompChoice();

    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
        //user Wins

        ComputerMove_p.innerHTML = "Computer: " + convertToWord(compChoice);
        UserMove_p.innerHTML = "User: " + convertToWord(userChoice);
       win(userChoice, compChoice)

        break;

        case "rp":
        case "ps":
        case "sr":
        //user loses
        ComputerMove_p.innerHTML = "Computer: " + convertToWord(compChoice);
        UserMove_p.innerHTML = "User: " + convertToWord(userChoice);
        lose(userChoice, compChoice)
        break;

        case "rr":
        case "pp":
        case "ss":
        //draw
        ComputerMove_p.innerHTML = "Computer: " + convertToWord(compChoice);
        UserMove_p.innerHTML = "User: " + convertToWord(userChoice);
        draw(userChoice, compChoice)
        break;
    
    }

}


main();

function main(){
    console.log("here in main. about to start ")

rock_div.addEventListener('click', function() {
   Game("r")
})

paper_div.addEventListener('click', function() {
    Game("p")
 })

scissor_div.addEventListener('click', function() {
    Game("s")
 })

}













