// Full card deck, 2 players
// Deal 26 Cards to two Players from a Deck, split equally
// Iterate through the turns where each Player plays a Card
// The Player who played the higher card is awarded a point
// Ties result in zero points for either Player
// After all cards have been played, display the score

// create the class Card with the properties of name, suit, and rank(for later comparing)
class Card {
    constructor(name, suit, rank) {
        this.name = name;
        this.suit = suit;        
        this.rank = rank;
    }

revealCard() {
    return `Name: ${this.name}, Suit: ${this.suit}`;
    }
}

//create the class Player
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        this.playerScore = 0;
    }
}

let playerOne = new Player("Sherlock");
let playerTwo = new Player("Watson");

//create the class Deck with 52 cards from 2 to Ace of 4 suits.
class Deck {
    constructor() {
        this.names = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
        this.suits = ["clubs", "spades", "hearts", "diamonds"];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.cards = [];
        this.player = [];
    }
  //create a deck by looping through the arrays to push 13 cards of each suit to the new array (a full deck)
createDeck() {
    for (let i = 0; i < this.suits.length; i++) {
        for (let j = 0; j < this.names.length; j++) {
            this.cards.push(new Card(this.names[j], this.suits[i], this.ranks[j]));
            }
        }
    }

//shuffle the deck
shuffle(cards) {
    for (let i = this.cards.length - 1; i > 0; i--) {
// random index from 0 to i
      let j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    // divide the deck between two players based on the even or odd index
    for (let i in this.cards) {
        if (i % 2 == 0) {
            this.player[0].playerCards.push(this.cards[i])
        } else {
            this.player[1].playerCards.push(this.cards[i])
        }
    }
    }  

  // start the game by pulling out a card from each deck
start(playerOne, playerTwo) {
    console.log("Starting the game");
    this.player.push(playerOne);
    this.player.push(playerTwo);
    this.createDeck();
    this.shuffle();

    console.log (`The players are ${this.player[0].playerName} and ${this.player[1].playerName}`);

    //loop through each index, randomly drawing a card from each deck, revealing the cards,
    //comparing the cards drawn, adding a point for the player whose card has a higher rank
    
    let arrlength = this.player[0].playerCards.length;

    for (let i = 0; i < arrlength; i++) {
        const player1_card = Math.floor(Math.random() * this.player[0].playerCards.length);
        const player2_card = Math.floor(Math.random() * this.player[1].playerCards.length);
        console.log(`Player 1 card ${this.player[0].playerCards[player1_card].revealCard()} | 
        Player 2 card ${this.player[1].playerCards[player2_card].revealCard()}`);

        if (
        this.player[0].playerCards[player1_card].rank > this.player[1].playerCards[player2_card].rank) {
        console.log(`In this round ${this.player[0].playerName} received one point.`);
        this.player[0].playerScore++;
        } else if (
        this.player[0].playerCards[player1_card].rank < this.player[1].playerCards[player2_card].rank
        ) {
        console.log(`In this round ${this.player[1].playerName} received one point.`);
        this.player[1].playerScore++;
        } else {
        console.log(`It is a tie! In this round zero points were awarded.`);
        }
        const removedCard1 = this.player[0].playerCards.splice(player1_card, 1);
        const removedCard2 = this.player[1].playerCards.splice(player2_card, 1);
        console.log(this.player[0].playerCards, this.player[1].playerCards);
        console.log(
        `${this.player[0].playerName}'s score = ${this.player[0].playerScore} | 
        ${this.player[1].playerName}'s score = ${this.player[1].playerScore}`);
    }

    console.log(`\n Game Over!`);
    if (this.player[0].playerScore > this.player[1].playerScore) {
        console.log(`\n ${this.player[0].playerName} is the winner!`);
    } else if (this.player[0].playerScore < this.player[1].playerScore) {
        console.log(`\n ${this.player[1].playerName} is the winner!`);
    } else {
        console.log("\n The game is a tie! ");
    }
    }
}

let deck = new Deck();
deck.start(playerOne, playerTwo);
