console.log("Up and running!");

var cards = [
   {
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png",
   },
   {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png",
   },

   {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
   },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
   },
];

var cardsInPlay = [];

 function checkForMatch() {
  //if (cardsInPlay.length == 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");

      } else {
          //alert("Sorry, try again");
        };

  };

function flipCard() {
    //var cardId
    var cardId = this.getAttribute('data-id');
    //console.log("User flipped" + cards[cardId].rank);
       cardsInPlay.push(cards[cardId].rank);
  //console.log("User flipped" + cards[cardId].cardImage);
  //console.log("User flipped" + cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2){
        checkForMatch();
   }  //else {
       //alert("Sorry, try again")
   //};
};

console.log(cardsInPlay);

function createBoard() {
    const cardTable = document.getElementById('game-board');
    for (var i = 0; i < cards.length; i++) {
        //logic here
    var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      cardTable.appendChild(cardElement);
  
    }
  };
  
  createBoard();