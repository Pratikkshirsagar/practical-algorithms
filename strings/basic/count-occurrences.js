// Write a function called `countOccurrences()` that takes in a string and a character and returns the number of occurrences of that character in the string.
function countOccurrences(str, char) {
  let count = 0;
  for (let x of str) {
    if (x === char) {
      count++;
    }
  }

  return count;
}

const result = countOccurrences('hello', 'l');

console.log(result);
