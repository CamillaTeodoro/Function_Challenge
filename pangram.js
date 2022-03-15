// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence) {
  let lowerSentence = sentence.toLowerCase();

  for (let char of "abcdefghijklmnopqrstuvx") {
    if (lowerSentence.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The five box wizards jumps quickly."));
console.log(isPangram("The five boxing wizards jumps quickly."));

function isPangram2(sentence) {
  let lowerSentence = sentence.toLowerCase();

  for (let char of "abcdefghijklmnopqrstuvx") {
    if (!lowerSentence.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(isPangram2("The five box wizards jumps quickly."));
console.log(isPangram2("The five boxing wizards jumps quickly."));
