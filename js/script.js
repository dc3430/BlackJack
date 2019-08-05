/*----- constants -----*/ 
let deck = new Array();
let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "k"];

//let masterDeck, not sure if i will need this yet? 

/*----- app's state (variables) -----*/ 
let scores, result, winner
let shuffleDeck

/*----- cached element references -----*/ 
let score



let result


/*----- event listeners -----*/ 
// button , click, render shuffle deck


/*----- functions -----*/
// render shuffle, render deck, build master deck
function getDeck() { //creating a deck for 52 card
    let deck = new Array(); { 
      for (let i = 0; i < suit.length; i++); { //pulling suit
        for (let x = 0; x < values.length; x++); //pulling card value
          let card = {Values: values[x], Suite: suits[i]}; 
      } 
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