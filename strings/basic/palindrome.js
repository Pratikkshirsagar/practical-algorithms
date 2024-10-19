// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. An example of a palindrome is "madam".

function isPalindrome(str) {
  const reverseString = str.split('').reverse().join('');
  return str === reverseString;
}

const result = isPalindrome('madam');
console.log(result);
