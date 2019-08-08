/*----- constants -----*/ 
var suits = ['spades', 'clubs', 'diamonds', 'hearts' ];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'k', 'A'];

var masterDeck; 

/*----- app's state (variables) -----*/ 
var score, result, winner;
var shuffledDeck, players, currentPlayer; 


/*----- cached element references -----*/ 

var shuffledContainer = document.getElementById('shuffled-deck-container');

var messeage = document.querySelectorAll('msg')
/*----- event listeners -----*/ 
 
document.getElementById("hit").addEventListener('click', hit);
document.getElementById("stay").addEventListener('click', stay);
document.getElementById('start').addEventListener('click', start);
//document.getElementById('reset').addEventListener('click', reset);
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
  displayHand();
  checkBust(cardCount(players[currentPlayer]))//check per hand if you bust
  //checkVal(cardCount(players[currentPlayer]))//check per hand for winner
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
  document.getElementById(currentPlayer + "-score").innerHTML = ""; //clearing hand
  document.getElementById(currentPlayer + "-score").append(cardCount(players[currentPlayer]));
 
}


// function hit() { //add 1 card from the shuffled deck to the player hand
//   let onClick = 
function hit() {
  dealCard(1)
} 

function stay() {
  if (currentPlayer != "player1") { // add final score
    msg.textContent = `${currentPlayer} Game Over`;
    console.log()
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
    msg.textContent = `${currentPlayer} BUSTED, Sorry you lost the game.`
  }
}



// function checkVal(value) {
//   if (currentplayer.value > 21) {
//     return "Busted, Sorry you lose"
//   } else if (currentPlayer === 21) {
//   return "Winner"
//   }
//   console.log(checkBust)
// }