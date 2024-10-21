// ## Instructions
// Write a function called `areAllCharactersUnique` that takes in a string and returns `true` or `false` depending on whether all characters in the string are unique (i.e., no character is repeated).
// ### Examples
// areAllCharactersUnique('abcdefg'); // true

function areAllCharactersUnique(str) {
  const charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      return false;
    }

    charSet.add(char);
  }

  return true;
}

const result = areAllCharactersUnique('abcdefg');

console.log(result);
