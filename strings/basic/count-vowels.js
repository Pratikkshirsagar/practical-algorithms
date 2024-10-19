// Write a function called `countVowels` that takes in a string and returns the number of vowels in the string.

function countVowels(str) {
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
      count++;
    }
  }

  return count;
}

const result = countVowels('hello');
console.log(result);
