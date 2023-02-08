// Given a string you need to find out the duplicate characters in the string

const inputString = "adsjfdsfsfjsdjfhacabcsbajda";

const characterCountMap = new Map();

for (const character of inputString) {
  if (characterCountMap.has(character)) {
    characterCountMap.set(character, characterCountMap.get(character) + 1);
  } else {
    characterCountMap.set(character, 1);
  }
}

console.log(characterCountMap);
