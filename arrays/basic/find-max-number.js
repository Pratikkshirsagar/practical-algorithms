// Write a function called `findMaxNumber` that takes in an array of numbers and returns the largest number in the array.

function findMaxNumber(arr) {
  let maxNumber = 0;

  for (let el of arr) {
    if (el > maxNumber) {
      maxNumber = el;
    }
  }

  return maxNumber;
}

const result = findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(result);
