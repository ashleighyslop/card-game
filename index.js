/**creating a deck */

var values = ['ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];
let deck = [];

const createDeck = (values) => {
values.forEach(function(element){
   var suit = ['heart','clubs','diamonds','spades'];
   suit.forEach(function(x){
     deck.push(`${x} + ${element}`)
   })
})
    console.log('deck created', deck);
 return deck;
}
//createDeck(values);
/**shuffle the deck */
const shuffle = (deck) => {
   for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
   }
   console.log('deck shuffled', deck);
    return deck;
}
//shuffle(deck);

/**deal cards */
let hand = []
let player1Hand = []
const deal = (deck) => {
 // console.log('in deck function', deck);
  hand.push(deck.pop())
  return ('hand', hand )
}

//deal(deck)