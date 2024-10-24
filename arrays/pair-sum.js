// You are given an array/list ‘ARR’ consisting of ‘N’ distinct integers arranged in ascending order. You are also given an integer ‘TARGET’. Your task is to count all the distinct pairs in ‘ARR’ such that their sum is equal to ‘TARGET’.
// Example:
// Let ‘ARR’ = [1 2 3] and ‘TARGET’ = 4. Then, there exists only one pair in ‘ARR’ with a sum of 4 which is (1, 3). (1, 3) and (3, 1) are counted as only one pair.

function pair(arr, target) {
  const pair = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(i, 'i');

    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (target === sum) {
        pair.push([arr[i], arr[j]]);
      }
    }
  }

  return pair;
}

const result = pair([1, 2, 3], 4);
console.log(result);
