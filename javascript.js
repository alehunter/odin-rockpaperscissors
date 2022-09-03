const choices = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}


function getPlayerChoice(){
    let input = prompt('Select a move: Rock, Paper or Scissors\n');
    input = input.toLowerCase();
    return input;

}


function playRound(){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    winner = ''
    
    if(computerSelection == choices[0] && playerSelection == choices[0]){
        console.log('Draw! Nobody wins');
    }
    else if(computerSelection == choices[0] && playerSelection == choices[1]){
        console.log('Player wins!');
        winner = 'player';
    }
    else if(computerSelection == choices[0] && playerSelection == choices[2]){
        console.log('Computer wins!');
        winner = 'computer';
    }
    else if(computerSelection == choices[1] && playerSelection == choices[0]){
        console.log('Player wins!');
        winner = 'player';
    }
    else if(computerSelection == choices[1] && playerSelection == choices[1]){
        console.log('Draw! Nobody wins');
    }
    else if(computerSelection == choices[1] && playerSelection == choices[2]){
        console.log('Player wins!');
        winner = 'player';
    }
    else if(computerSelection == choices[2] && playerSelection == choices[0]){
        console.log('Player wins!');
        winner = 'player';
    }
    else if(computerSelection == choices[2] && playerSelection == choices[1]){
        console.log('Computer wins!');
        winner = 'computer';
    }
    else if(computerSelection == choices[2] && playrerSelection == choices[2]){
        console.log('Draw! Nobody wins');
    }
    return winner;
}

function playGame(){
    computer_points = 0;
    player_points = 0;
    for (let i = 1; i <= 5; i++) {
        console.log('Round: ' + i + '');
        result = playRound();
        if(winner === 'player'){
            player_points++;
        }else if(winner === 'computer'){
            computer_points++;
        }
        
    }
    if(computer_points > player_points){
        console.log('Computer wins!');
    }else if(computer_points < player_points){
        console.log('Player wins!');
    }else{
        console.log('Draw! Nobody wins');
    }
}


playGame();
