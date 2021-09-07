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

let userScore = 0;

let comScore = 0;

function checkScore() {
    if(userScore == 5 || comScore == 5){
        if(userScore > comScore){
            alert('YOU WIN!');
            resetFunc();
        }else{
            alert('YOU LOSE!');
            resetFunc();
        }
    }
};

function scoreFunc(){
    if(document.contains(document.getElementById("scoreData"))){
        document.getElementById("scoreData").remove();
    } 
    const score = document.querySelector('#score');
    const scoreData = document.createElement('div');
    scoreData.classList.add('scoreData');
    scoreData.textContent = "User= " + userScore + "  Computer= "+ comScore;

    score.appendChild(scoreData);
    scoreData.setAttribute("id", "scoreData")

    checkScore();

}

let rock = document.getElementById("rock");
rock.addEventListener("click",playerRock);

function playerRock() {
    let comChoice = computerPlay();
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
    scoreFunc();
}

let paper = document.getElementById("paper");
paper.addEventListener("click",playerPaper);

function playerPaper() {
    let comChoice = computerPlay();
    switch (comChoice){
        case "rock":
            userScore++;
            break;
        case "scissors":
            comScore++;
            break;
        default:
            break;
    }
    scoreFunc();
}

let scissors = document.getElementById("scissors");
scissors.addEventListener("click",playerScissors);

function playerScissors() {
    let comChoice = computerPlay();
    switch (comChoice){
        case "paper":
            userScore++;
            break;
        case "rock":
            comScore++;
            break;
        default:
            break;
    }
    scoreFunc();
}

function resetFunc() {
    userScore=0;
    comScore=0
    document.getElementById("scoreData").remove();
}
