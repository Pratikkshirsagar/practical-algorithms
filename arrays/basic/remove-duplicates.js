// Write a function called `removeDuplicates` that takes in an array and returns a new array with duplicates removed.

function removeDuplicates(arr) {
  const newArr = [];

  for (let el of arr) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }

  return newArr;
}

const result = removeDuplicates([1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(result);
