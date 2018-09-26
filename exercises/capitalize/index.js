// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var arr = str.split(" ");
  var newArr = arr.map(item => {
    item = item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
    return item;
  });
  return newArr.join(" ");
}

// Reverse Words in a string 'I love coding'
function reverseWords(str) {
  var newStr = "";
  var index = 0;
  var newArr = [];
  var result = "";
  for (var i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      console.log(str[i + 1]);
      newStr = str.substring(index, i);
      newArr.push(newStr);
      index = i + 1;
    }

    newStr = "";
  }
  newArr.forEach((item, i) => {
    for (var char of item) {
      newStr = char + newStr;
    }
    newArr[i] = newStr;
  });
  newArr.forEach(item => {
    result = result + " " + item;
  });
  return result;
}

module.exports = capitalize;
