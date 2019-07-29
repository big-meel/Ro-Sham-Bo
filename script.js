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


function winner(x, y){
    if (x > y){
        return ('Player: ' + x + ' | Computer: ' + y + '\n \n You WIN!! :D');
    } else {return ('Player: ' + x + ' | Computer: ' + y + '\n \n You LOSE! :')}
}

const container = document.querySelector('#container');
const buttons = Array.from(document.querySelectorAll('button'));
const choices = document.createElement('div');
const results = document.createElement('p');

let gamesWon = 0;
let gamesLost = 0;


container.appendChild(choices);
choices.setAttribute('style', 'color: white; font-size: 25px; position: absolute; bottom: 20%; left: 35.8%');

buttons.forEach(button => button.addEventListener('click', function(e){
        e = e.target.classList[0];
        let outcome = playRound(e,computerPlay()); 
        choices.textContent = outcome;

        function newMessage(){
            results.textContent = 'Win: ' + gamesWon + 'Lose: ' + gamesLost;
            choices.appendChild(results); 
            container.replaceChild(choices);
        }
        
        if (gamesWon === 5 || gamesLost === 5){
            results.textContent = winner(gamesWon, gamesLost);
            choices.appendChild(results);
            container.replaceChild(choices);
        }else if (outcome.indexOf('Win') >= 0){
            gamesWon++;
            return newMessage();
        } else if(outcome.indexOf('Lose') >= 0){
            gamesLost++;
            return newMessage();
        } else if (outcome.indexOf('Draw') >= 0){
            return newMessage();
        }         
}));