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

module.exports = capitalize;
