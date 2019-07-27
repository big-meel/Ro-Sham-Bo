function computerPlay(){
    let x = Math.floor(Math.random() * 3)
    return (x == 2 ? 'rock' : (x == 1) ? 'paper' : (x == 0) ? 'scissors' : 'Somethihing is Wrong!')
}

function playRound(playerSelection, computerSelection){
    
    let comp = computerSelection
    let user = playerSelection.toLowerCase()

    if(user == 'rock' && comp == 'paper'){
        return 'You Lose! Paper beats Rock'  
    } else if (user == 'paper' && comp == 'rock') {
        return 'You Win! Paper beats Rock'
    } else if (user == 'rock' && comp == 'scissors'){
        return 'You Win! Rock beats Scissors'
    } else if (user == 'paper' && comp == 'scissors'){
        return 'You Lose! Scissors beats Paper'
    } else if (user == 'scissors' && comp == 'paper'){
        return 'You Win! Scissors beats Paper'
    } else if (user == 'scissors' && comp == 'rock'){
        return 'You Lose! Rock beats Scissors'
    } else return 'Draw! Choose again'

}

function askChoice(){
       let option
       return option = prompt('Rock, Paper, Scissors?');
}

function winner(x, y){
    if (x > y){
        return ('Player: ' + x + ' | Computer: ' + y + '\n \n You WIN!! :D');
    } else {return ('Player: ' + x + ' | Computer: ' + y + '\n \n You LOSE! :')}
}

const container = document.querySelector('#container');

const buttons = Array.from(document.querySelectorAll('button')); 
buttons.forEach(button => button.addEventListener('click', function(e){
    e = e.target.classList[0];
    let outcome = playRound(e,computerPlay());
    const choices = document.createElement('div');

    choices.textContent = outcome;

    container.appendChild(choices);
}));

const interface = document.createElement('div');
interface.classList.add('score');

