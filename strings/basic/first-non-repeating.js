// ## Instructions

// Write a function called `findFirstNonRepeatingCharacter` that takes in a string and returns the first non-repeating character in the string.
// If there are no non-repeating characters, the function should return `null`.
// ### Examples
// findFirstNonRepeatingCharacter('aabccdeff'); // should return 'b'

function findFirstNonRepeatingCharacter(str) {
  const charMap = {};

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char in charMap) {
    if (charMap[char] === 1) {
      return char;
    }
  }

  return null;
}

const result = findFirstNonRepeatingCharacter('abcdef');
console.log(result);
