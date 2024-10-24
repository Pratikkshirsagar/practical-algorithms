function maximumSubArraySum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;

    for (let j = 0; j < arr.length; j++) {
      currentSum += arr[j];

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}

const result = maximumSubArraySum([5, 4, 1, 7, 8]);

console.log(result);
