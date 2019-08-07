/*----- constants -----*/ 
var suits = ['spades', 'clubs', 'diamonds', 'hearts' ];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'k', 'A'];

var masterDeck; 

/*----- app's state (variables) -----*/ 
var score, result, winner;
var shuffledDeck, players, currentPlayer; 


/*----- cached element references -----*/ 
var shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/ 
 
document.getElementById("hit").addEventListener('click', hit);
document.getElementById("stay").addEventListener('click', stay);
document.getElementById('start').addEventListener('click', start);
/*----- functions -----*/

init();

function init() {
  players = {
    'player1': [],
    'player2': []
  };
  // currentPlayer = 'player1'
  masterDeck = buildMasterDeck()
  shuffledDeck = shuffledDeck()
  // dealCard()
  // renderHand(playerHand)
}

function shuffledDeck() { // create a copy of the masterDeck (leave masterDeck untouched!)
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  } 
  // console.log(shuffledDeck)
  return shuffledDeck;

}
  
function buildMasterDeck() {
  var deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({ 
        face: `${suit}-r${rank}`, // the 'face' property maps to the CSS classes for cards
        value: Number(rank) || (rank === 'A' ? 11 : 10) // the 'value' property is set for blackjack, not war
      });
    });
  });
  return deck;
}

function dealCard(numCards) {
  for (i = 0; i < numCards; i++) {
    players[currentPlayer].push(shuffledDeck.pop());
  }
  displayHand()
  checkBust(countCards(players[currentPlayer]))
};
 
function displayHand() {
  document.getElementById(currentPlayer).innerHTML = "" //clearing hand

  var hand = players[currentPlayer]
  for (var i = 0; i < hand.length; i++ ) {
    let folder = hand[i].face.split("-")[0]
    let file = hand[i].face
    var cardImg = document.createElement("img");
    cardImg.src = `./images/${folder}/${file}.svg`
    document.getElementById(currentPlayer).append(cardImg)
    // playerHandhtml.append(cardImg);
  }
  // document.getElementById(currentPlayer + "-score").innerHTML = "" // need this for when i show score
  // document.getElementById(currentPlayer + "-score").append(countCards(players[currentPlayer]))
}
