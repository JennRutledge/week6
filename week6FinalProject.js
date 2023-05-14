//console.log('Hey Girl!');//verified that the js and html are connected

//The final project is to create an automated version of the classice card game WAR.
//Create classes for card, deck, and player.
//decide what fields and methods each class will have.

//What do all cards contain
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

// The deck needs to hold 52 objects(cards) that are in 4 different suits
//with 13 ranks per suit and each rank has a value attached


class Deck {
    constructor() {
        this.cards = [];
    }
        //how we get to the cards
    get cards() {
       return this.cards;
    }

    createDeck() {
        const suit = ['♣', '♦', '♥', '♠']; //ASCII code alt then number for that symbol
        const rank = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                this.cards.push(new Card(suit[i], rank[j], value[j]));   
                    return this.cards;
            }
        }
    }
// create deck is expected to create 13 strings of 4 different suits with 13 values.
//each card(object)in the array [{suit: '♥', rank: 'A', value: '1'}, {suit: '♦', rank: 'A', value: '1'}]
    
    shuffleDeck() {
        if (this.cards.length > 0) {
            const shuffleDeck = this.cards.sort(() => Math.randon() -.5)
            this.cards = [...shuffleDeck]; //array of sorted cards
        }
    }
}
//shuffleDeck will randomize the deck.
//https://flaviocopes.com/how-to-shuffle-array-javascript/

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerDeck = [];
        this.playerScore = 0;
    }
    get name() {
        return this.playerName;
    }
    get deck() {
        return this.playerDeck;
    }
    get score () {
        return this.playerScore;
    }
    result = Array.isArray(this.playerDeck.newDeck); 
       
    //The player should have a name, cards to play for each turn and a score after each turn is played.
    
         
    
// Score should be zero at the start of the game.

    set score(newScore) {
        if (!isNaN(newScore)) {
            this.playerScore = newScore;
        }
    }

}
class Dealer {
    constructor() {
        this.players = [];
        this.deck = [];
        // The dealer will give each player half the deck of cards, 26.
    }
    start() { //\t\t\t\t creates 4 tabs from the maragin(horizontal tabs)
        console.log('\t\t\t\t**** Game Menu ****')
        let input = prompt ('0 - exit; 1 - play');
            while (input != '0') {
                switch (input) {  //spelling counts switch vs swith will not give the same results.
                    case '0':
                        exit;
                    case '1':
                        this.createGame();
                            break;
                }
                input = prompt('0 - exit; 1 - play');
            }
    }    
    createGame() {
        this.players[0] = newPLayer ('Player 1');
        this.players[1] = newPLayer ('Player 2');
        const cards = new Deck().createDeck();
        this.players[0].deck = [...cards.slice(1, 26)];
        this.players[1].deck = [...cards.slice(26, 52)];
        console.log('\t\t\t\t**** Dealing Hands *****')
        for (let i = 0; i < this.players[0].deck.lenght; i++) {
            if (this.players[0].deck[i].value > this.players[1].deck[i].value){
                this.players[0].score +=1;
                let winningHand = `${this.players[0].deck[i].rank} of ${this.players[0].deck[i].suit}`;
                console.log(`Player 1 won with a ${winningHand}`)
                } else {
                    this.players[1].score +=1;
                    let winningHand = `{this.players[1].deck[i].rank} of ${this.players[0].deck[i].suit}`;
                    console.log(`Player 2 won with a ${winningHand}`);
                }
            }
        
       console.log('\t\t\t\t**** Hand Done ****')
       if (this.players[0]. score > this.players[1].score) {
        console.log(`${this.players[0].name.toUpperCase()} WON WAR with a sore of ${this.players[0].score}`);
         } else if (this.players[0].score < this.players[1].score) {
        console.log(`${this.players[1].name.toUpperCase()} WON WAR with a sore of ${this.players[1].score}`);    
         }
        }

    }  
//    let Piper = new Player
//    let firstDeck = new Deck
//    firstDeck.createDeck()
//    firstDeck.shuffleDeck()
//    firstDeck.createGame()









//The completed project will have a deck of cards that are dealt between two players.
//During each turn a point will be awarded to the player that has the 
//highest card value. IF there is a tie no points are given.
//Once all cards have been played the final sore will display,
//and a winner is declared.


//Write a unit test using Mocha and Chai for at least on of the functions used.