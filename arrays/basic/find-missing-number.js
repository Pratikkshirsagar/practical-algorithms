// ## Instructions
// Write a function called `findMissingNumber` that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

// ### Examples
// findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]); // 5

function findMissingNumber(arr) {
  const srotedArr = arr.sort((a, b) => a - b);

  let missingNumber;

  for (let i = 0; i < srotedArr.length; i++) {
    const nextNumber = srotedArr[i + 1];
    const expectedNumber = srotedArr[i] + 1;

    if (nextNumber !== expectedNumber) {
      missingNumber = expectedNumber;
      break;
    }
  }

  return missingNumber;
}

const result = findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]);
console.log(result);
