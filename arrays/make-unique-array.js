function makeUniqueArray(arr) {
  const newSet = new Set(arr);

  return arr.length - newSet.size;
}

const result = makeUniqueArray([1, 1, 2, 3]);
console.log(result);
