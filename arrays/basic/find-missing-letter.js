// ## Instructions
// Write a function called `findMissingLetter` that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.
// ## Examples
// findMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"

function findMissingLetter(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const startingIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startingIndex + i]) {
      return alphabet[startingIndex + i];
    }
  }

  return '';
}

const result = findMissingLetter(['a', 'b', 'c', 'd', 'f']);
console.log(result);
