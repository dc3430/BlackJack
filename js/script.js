/*----- constants -----*/ 
var suits = ['spades', 'clubs', 'diamonds', 'hearts' ];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'k', 'A'];

var masterDeck; 

/*----- app's state (variables) -----*/ 
var score, winner, bust;
var shuffledDeck, players, currentPlayer; 

const reset = () => {
  score = '',
  winner = '',
  init()
}

/*----- cached element references -----*/ 

var shuffledContainer = document.getElementById('shuffled-deck-container');
var p1El = document.querySelector('#player1')
var p2El = document.querySelector('#player2')
var messeage = document.querySelectorAll('msg')
/*----- event listeners -----*/ 
 
document.getElementById("hit").addEventListener('click', hit);
document.getElementById("stay").addEventListener('click', stay);
document.getElementById('start').addEventListener('click', start);
document.getElementById('reset').addEventListener('click', () => {
  window.location.reload();
});

/*----- functions -----*/

init();

function init() {
  players = {
    'player1': [],
    'player2': []
  };
  masterDeck = buildMasterDeck()
  shuffledDeck = []
  handleShuffleDeck();
  winner = null
  bust = false;
}

function handleShuffleDeck() { 
  var tempDeck = masterDeck.slice();
  while (tempDeck.length) {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  } 
  return shuffledDeck;
}
  
function buildMasterDeck() {
  var deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({ 
        face: `${suit}-r${rank}`, 
        value: Number(rank) || (rank === 'A' ? 11 : 10) 
      });
    });
  }); 
  return deck;
}

function dealCard(numCards) {
  if(winner || bust) return;
  for (i = 0; i < numCards; i++) {
    players[currentPlayer].push(shuffledDeck.pop());
  }
  checkBust(cardCount(players[currentPlayer]))
  checkWinner();
  displayHand();
};
 
function displayHand() {
  document.getElementById(currentPlayer).innerHTML = "" 

  var hand = players[currentPlayer]
  for (var i = 0; i < hand.length; i++ ) {
    let folder = hand[i].face.split("-")[0]
    let file = hand[i].face
    var cardImg = document.createElement("img");
    cardImg.src = `./images/${folder}/${file}.svg`
    document.getElementById(currentPlayer).append(cardImg)
  }
  document.getElementById(currentPlayer + "-score").innerHTML = ""; 
  document.getElementById(currentPlayer + "-score").append(cardCount(players[currentPlayer]));
}

function hit() {
  if(winner || bust) return;
  checkWinner();
  dealCard(1)
} 

function stay() {
  if (currentPlayer != "player1") { 
    msg.textContent = `${currentPlayer} Game Over`;
  } else {
    currentPlayer = "player2"
    msg.textContent = `${currentPlayer} turn`
  };
}

function start() {
  currentPlayer = "player2"
  dealCard(2)
  currentPlayer = "player1"
  dealCard(2)
  document.getElementById("start").hidden = true
}

function cardCount(hand) {
  let entireCount = 0
  for (i = 0; i < hand.length; i++) {
    entireCount += hand[i]["value"]
  }
  return entireCount;
}

function checkBust(value) {
  if (value > 21) {
    bust = true;
    msg.textContent = `${currentPlayer} BUSTED, SORRY YOU LOST THE GAME.`

  }
}

let playerOneVal, playerTwoVal;

function checkWinner() {
  playerOneVal = players["player1"].reduce((acc, val) => {return acc + val.value}, 0);
  playerTwoVal = players["player2"].reduce((acc, val) => {return acc + val.value}, 0);
  if(playerOneVal === 21) {
    winner = "p1"
    msg.textContent = "Player One Wins"
  } else if (playerTwoVal === 21 ){
    winner = "p2"
    msg.textContent = "Player Two Wins"
  } else {
    return null
  }
}