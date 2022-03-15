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
