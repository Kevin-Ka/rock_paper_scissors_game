// Computer selection//
function computerPlay() {
    num = Math.floor(Math.random()*3+1);
    let comPlay = "";
    if(num === 1) {
        comPlay = "rock";
    } else if( num===2 ) {
        comPlay = "paper";
    } else if(num === 3) {
        comPlay = "scissors";
    }
    return comPlay
}


function game() {
    let userScore = 0;
    let comScore = 0;
    for (let i = 0;i < 5; i++){
        let comChoice = computerPlay();
        let userChoice = window.prompt("Up for a round of Rock, Paper, Scissors? \nMake your Choice!").toLowerCase();
        console.log("You chose " + userChoice)
        console.log("Computer chose " + comChoice)
        if (userChoice = "rock"){
            switch (comChoice){
                case "paper":
                    comScore++;
                    break;
                case "scissors":
                    userScore++;
                    break;
                default:
                    break;
            }
        } else if (userChoice = "paper"){
            switch (comChoice){
                case "scissors":
                    comScore++;
                    break;
                case "rock":
                    userScore++;
                    break;
                default:
                    break;
            }
        } else if (userChoice = "scissors"){
            switch (comChoice){
                case "rock":
                    comScore++;
                    break;
                case "paper":
                    userScore++;
                    break;
                default:
                    break;
            }
            }
        }
        if (userScore > comScore) {
            return "You have scored " + userScore +" times, while the computer scored " + comScore + " times \nYou won!" 
        } else if (userScore < comScore) {
            return "You have scored " + userScore +" times, while the computer scored " + comScore + " times \nYou lost!" 
        } else if(userScore == comScore) {
            return "It's a tie. Play again!"
        }
}

console.log(game())
