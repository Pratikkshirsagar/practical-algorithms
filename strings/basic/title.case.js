// Write a function called `titleCase` that takes in a string and returns the string with the first letter of each word capitalized.

function titleCase(str) {
  const lowerCaseStr = str.toLowerCase().split(' ');
  const titleCaseString = [];
  for (let char of lowerCaseStr) {
    const firstLatter = char[0].toUpperCase();
    const restLatters = char.slice(1);
    titleCaseString.push(`${firstLatter}${restLatters}`);
  }

  return titleCaseString.join(' ');
}

const result = titleCase("I'm a little tea pot");
console.log(result);
