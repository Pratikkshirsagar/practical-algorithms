// Given an unsorted array of integers, you have to move the array elements in a way such that all the zeroes are transferred to the end, and all the non-zero elements are moved to the front. The non-zero elements must be ordered in their order of appearance.
// For example, if the input array is: [0, 1, -2, 3, 4, 0, 5, -27, 9, 0], then the output array must be:
// [1, -2, 3, 4, 5, -27, 9, 0, 0, 0].

function moveZeroToEnd(arr) {
  const arrayWithoutZeros = arr.filter((el) => el !== 0);
  console.log(arrayWithoutZeros);

  const resultArr = [...arrayWithoutZeros];
  for (let i = arrayWithoutZeros.length; i < arr.length; i++) {
    resultArr.push(0);
  }

  return resultArr;
}

const result = moveZeroToEnd([0, 1, -2, 3, 4, 0, 5, -27, 9, 0]);
console.log(result);
