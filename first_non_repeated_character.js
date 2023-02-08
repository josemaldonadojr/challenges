// Find the first non-repeated character in a string

const inputString = "cbcbdde";

// const characterArray = Array.from(inputString);

// const firstNonRepeatedCharacter = characterArray.find(
//   (char) => characterArray.indexOf(char) === characterArray.lastIndexOf(char)
// );

// console.log(firstNonRepeatedCharacter);

const uniqueCharacterSet = new Set();

for (const character of inputString) {
  if (uniqueCharacterSet.has(character)) {
    uniqueCharacterSet.delete(character);
  } else {
    uniqueCharacterSet.add(character);
  }
}

const uniqueCharacterSetIterator = uniqueCharacterSet.values();
const firstNonRepeatedCharacter = uniqueCharacterSetIterator.next().value;

console.log(firstNonRepeatedCharacter);
