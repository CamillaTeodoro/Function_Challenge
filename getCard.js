// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const randomNum = Math.floor(Math.random() * values.length);
  const value = values[randomNum];

  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const randomSuits = Math.floor(Math.random() * suits.length);
  const suit = suits[randomSuits];

  console.log(suit, value)
}
