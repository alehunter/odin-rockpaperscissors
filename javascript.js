
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const result = document.getElementById('result');
const compresult = document.getElementById('computerchoice')


result.textContent = 'Start Game!'


const choices = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function getwinner(computerSelection, playerSelection){
    let winner = ''
    if(computerSelection == choices[0] && playerSelection == choices[0]){
        winner = 'nobody wins'
    }
    else if(computerSelection == choices[0] && playerSelection == choices[1]){
        winner = 'player wins';
    }
    else if(computerSelection == choices[0] && playerSelection == choices[2]){
        winner = 'computer wins';
    }
    else if(computerSelection == choices[1] && playerSelection == choices[0]){
        winner = 'player wins';
    }
    else if(computerSelection == choices[1] && playerSelection == choices[1]){
        winner = 'nobody wins'
    }
    else if(computerSelection == choices[1] && playerSelection == choices[2]){
        winner = 'player wins';
    }
    else if(computerSelection == choices[2] && playerSelection == choices[0]){
        winner = 'player wins';
    }
    else if(computerSelection == choices[2] && playerSelection == choices[1]){
        winner = 'computer wins';
    }
    else if(computerSelection == choices[2] && playrerSelection == choices[2]){
        winner = 'nobody wins'
    }
    return winner;
}


rock.addEventListener('click', () => {

    let compselection = getComputerChoice();
    result.textContent = getwinner(compselection, 'rock');
    compresult.textContent = "Computer chose: " + compselection;

   
});

paper.addEventListener('click', () => {

    let compselection = getComputerChoice();
    result.textContent = getwinner(compselection, 'paper');
    compresult.textContent = "Computer chose: " + compselection;

});

scissors.addEventListener('click', () => {

    let compselection = getComputerChoice();
    result.textContent = getwinner(compselection, 'scissors'); 
    compresult.textContent = "Computer chose: " + compselection;

});