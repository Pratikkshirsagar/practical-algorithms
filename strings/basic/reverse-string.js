// Write a function called `reverseString` that takes in a string and returns the reverse of that string.

// ### Solution 1
function reverseString(str) {
  return str.split('').reverse().join('');
}

const result = reverseString('hello');
console.log(result);

// ### Solution 2
function reverseString2(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

const result2 = reverseString2('hello');
console.log(result2);
