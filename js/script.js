/*----- constants -----*/ 
let deck = new Array();
let suits = ['s', 'c', 'd', 'h' ];
let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'k', 'A'];

var masterDeck = buildMasterDeck();
renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));
/*----- app's state (variables) -----*/ 
let score, result, winner;
let shuffledDeck;

/*----- cached element references -----*/ 
const scoreEls = {
  p1: document.getElementById(p1-score),
  dr: document.getElementById(dr-score),
  p2: document.getElementById(p2-score),
};

const resultEls = {
  player1: 
   {
    gameEls: document.getElementById(p1-result),
    imgEl: document.querySelector('#p1-result img')
  },
  player2:
   {
    gameEls: document.getElementById(p2-result),
    imgEl: document.querySelector('#p2-result img')
    }
};

var shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/ 
// button , click, 
document.querySelector("button").addEventListener('click', function(startblackjack));
document.querySelector("button").addEventListener('click', function(hit));
document.gquerySelector("button").addEventListener('click', function(stay));
document.querySelector('button').addEventListener('click', renderShuffledDeck);
/*----- functions -----*/
// render, shuffle, new deck, players
init();

function pullCards() { //pull two cards from the shuffled 

}

function renderShuffledDeck() {
  // create a copy of the masterDeck (leave masterDeck untouched!)
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  renderDeckInContainer(shuffledDeck, shuffledContainer);
}
  
function renderDeckInContainer(deck, container) {
  container.innerHTML = '';
  // Let's build the cards as a string of HTML
  var cardsHtml = deck.reduce(function(html, card) {
    return html + `<div class="card ${card.face}"></div>`;
  }, '');
  container.innerHTML = cardsHtml;
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
  
renderShuffledDeck();
  

function createPlayer1() {

}

function crearePlayer2() {

}

function startblackjack(){
// need to call a math.random from shuffled deck
}

function dealHands() {

}

function stay() {

}

function hit() {

}

function winner() {
    if (21 === 21 && 21 === 20 && 21 === 19) {
      return "Winner"
    } else if (21 === 18) {
      return "Loser"
    } else if (21  === 17) {
      return "Loser"
    }
}

function renderDeck() {

}