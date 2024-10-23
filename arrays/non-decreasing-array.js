function posibility(arr) {
  // value modify veriable
  let changed = false;
  // louper throw each pair loop length should be arra.length - 1
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
    }

    if (changed) {
      return false;
    }

    if (i == 0 || arr[i + 1] >= arr[i - 1]) {
      arr[i] = arr[i + 1];
    } else {
      arr[i + 1] = arr[i];
    }
    changed = true;
  }

  return true;
}

const result = posibility([4, 2, 3]);
console.log(result);
