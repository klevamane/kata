/*

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

*/

function anagrams(word, words) {
  const desiredAmount = stringValue(word);
  desiredAmount;
  const response = words.filter((word) => stringValue(word) === desiredAmount);
  return response ? response : [];
}

function stringValue(str) {
  return (total = str
    .split("")
    .reduce(
      (accumulator, currChar) => accumulator + currChar.charCodeAt(0) - 96,
      0
    ));
}

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));

const arr = [2,1,2];

const response = arr.every((current, index) => {
  return index === 0 || current <= arr[index - 1];
});

console.log(response);
