/* experimenting with a deck and shuffle will build out today.
function card(value, name, suit){
    this.value = value;
    this.name = name;
    this.suit = suit;
}
function deck(){
    this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    let cards = [];

    for( let s = 0; s < this.suits.length; s++ ) {
        for( let n = 0; n < this.names.length; n++ ) {
            cards.push( new card ( n+1, this.names[n], this.suits[s]));
        }
    }

    return cards;
}

let myDeck = new deck();
console.log(myDeck);

window.onload = function() {
    for(let i=0; i < myDeck.length; i++){
        div = document.createElement('div');
        div.className = 'card';

        if(myDeck[i].suit == 'Diamonds'){
            let ascii_char = '♦';
        } else {
            let ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
        }
console.log(ascii_char);

        div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
        document.body.appendChild(div);
    }
}

Array.sort(function (a,b){return 0.5 - Math.random()}
*/