// You have been given an array/list 'ARR' of integers. Your task is to find the second largest element present in the 'ARR'.

function secondLargestElement(arr) {
  const set = new Set(arr);
  const newArr = Array.from(set).sort((a, b) => b - a);
  return newArr[1];
}

const result = secondLargestElement([7, 8, 8, 1, 4, 3]);
console.log(result);
