// Find the first non-repeated character in a string

const inputString = "cbcbdde";

const characterArray = Array.from(inputString);

const firstNonRepeatedCharacter = characterArray.find(
  (char) => characterArray.indexOf(char) === characterArray.lastIndexOf(char)
);

console.log(firstNonRepeatedCharacter);
