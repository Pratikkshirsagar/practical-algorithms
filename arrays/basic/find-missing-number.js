// ## Instructions
// Write a function called `findMissingNumber` that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

// ### Examples
// findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]); // 5

function findMissingNumber(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let missingNum;

  for (let i = 0; i < sortedArr.length; i++) {
    let secondEl = sortedArr[i + 1];
    const expectedNumber = sortedArr[i] + 1;

    if (secondEl !== expectedNumber) {
      missingNum = expectedNumber;
      break;
    }
  }

  return missingNum;
}

const result = findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]);
console.log(result);
