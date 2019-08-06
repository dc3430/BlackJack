/*----- constants -----*/ 
// let deck = new Array();
var suits = ['s', 'c', 'd', 'h' ];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'k', 'A'];

var masterDeck = buildMasterDeck();
// renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));
/*----- app's state (variables) -----*/ 
var score, result, winner;
var shuffledDeck;

/*----- cached element references -----*/ 
// const scoreEls = {
//   p1: document.getElementById(p1-score),
//   dr: document.getElementById(dr-score),
//   p2: document.getElementById(p2-score),
// };

// const resultEls = {
//   player1: 
//    {
//     gameEls: document.getElementById(p1-result),
//     imgEl: document.querySelector('#p1-result img')
//   },
//   player2:
//    {
//     gameEls: document.getElementById(p2-result),
//     imgEl: document.querySelector('#p2-result img')
//     }
// };

var shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/ 
// button , click, 
document.getElementById("hit").addEventListener('click', hit);
document.getElementById("stay").addEventListener('click', stay);
document.getElementById('start').addEventListener('click', renderShuffledDeck);
/*----- functions -----*/
// render, shuffle, new deck, players
// init();


function shuffledDeck() {
  // create a copy of the masterDeck (leave masterDeck untouched!)
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
        // the 'face' property maps to the CSS classes for cards
        face: `${suit}${rank}`,
        // the 'value' property is set for blackjack, not war
        value: Number(rank) || (rank === 'A' ? 11 : 10)
      });
    });
  });
  return deck;
}
  
function dealCard () {
  for (i = 0; i < 2; i++){
    for (var x = 0; x < players.length; x++ ) {
      masterDeck.pop();
      player1.hand.push(card);
    }
  }

  let playerHand = [];
  playerHand.push(shuffledDeck.pop())
};
// renderCard(card, x);

