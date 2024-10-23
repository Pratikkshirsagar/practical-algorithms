// You are given an array Arr consisting of N integers. You need to find the equilibrium index of the array.
// An index is considered as an equilibrium index if the sum of elements of the array to the left of that index is equal to the sum of elements to the right of it.
// Example
// [1, 2, 6, 4, 0, -1] => 2

function equilibriumIndex(arr) {
  const sumArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    sumArr.push(sumArr[i - 1] + arr[i]);
  }

  for (let j = 0; j < arr.length; j++) {
    const lhs = sumArr[j] - arr[j];
    const rhs = sumArr[sumArr.length - 1] - sumArr[j];

    if (lhs === rhs) {
      return j;
    }
  }

  return -1;
}

const result = equilibriumIndex([1, 2, 6, 4, 0, -1]);
console.log(result);
