// Write a function called `arrayIntersection` that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).
// Examples
// arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]);
// should return [1, 3, 5]

function arrayIntersection(arr1, arr2) {
  const intersection = [];

  for (let el of arr1) {
    if (arr2.includes(el) && !intersection.includes(el)) {
      intersection.push(el);
    }
  }

  return intersection;
}

const result = arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
console.log(result);
