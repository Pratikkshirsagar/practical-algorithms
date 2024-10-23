// Given an array 'arr' with 'n' elements, the task is to rotate the array to the left by 'k' steps, where 'k' is non-negative.
// Example:
// 'arr '= [1,2,3,4,5]
// 'k' = 1  rotated array = [2,3,4,5,1]

function rotateArr(arr, n) {
  const startElements = arr.slice(n);
  const endElements = arr.slice(0, n);
  return [...startElements, ...endElements];
}

const result = rotateArr([1, 2, 3, 4, 5], 2);

console.log(result);
