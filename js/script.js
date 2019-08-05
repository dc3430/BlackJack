/*----- constants -----*/ 
let deck = new Array();
let suits = ['s', 'c', 'd', 'h' ];
let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'k', 'A'];

//let masterDeck, not sure if i will need this yet? 
let 

/*----- app's state (variables) -----*/ 
let score, result, winner
let shuffleDeck

/*----- cached element references -----*/ 
let score



let result


/*----- event listeners -----*/ 
// button , click, 
document.getElementById("btn").addEventListener('click', function(startblackjack));

/*----- functions -----*/
// render, shuffle, new deck, players
init();

function getDeck() { //creating a deck for 52 card
    let deck = new Array(); { 
      for (let i = 0; i < suit.length; i++); { //pulling suit
        for (let x = 0; x < values.length; x++); //pulling card value
          let card = {Values: values[x], Suite: suits[i]}; 
      } // need to add weight to cards?
    }
    return deck;
}
  
function shuffle() { //if I have 52 card will this be enought of a shuffle?
    for (let i = 0; i < 100; i++); { //next need to shuffle the deck, 100 times
      let loc1 = Math.floor(Math.random() * deck.length); //pull a random card from location 1
      let loc2 = Math.floor(Math.random() * deck.length); ////pull a random card from location 2 will i need more?
      let con = deck[loc1]; //con=container which = deck arr
      deck[loc1] = deck[loc2]; //pull rand location 1 and put it in location 2
      deck[loc2] = con; // take location 2 and put it back in the container
    }
}
  
let count = 0; //counting cards
function countCards(cards) {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count --;
            Break:;
    }
    let holdBet = 'Hold'
        if(count > 0) {
            holdbet = 'Bet'
        }
}

function createPlayer1() 

function crearePlayer2()

function startblackjack()

function dealHands()

function stay()

function hit()

function winner()

function renderDeck() 