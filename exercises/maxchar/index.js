// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var obj = {};
  var count = 0;
  var winnerChar = "";
  var arr = str.split("");
  arr.forEach(item => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
  });
  for (var key in obj) {
    if (obj[key] > count) {
      count = obj[key];
      winnerChar = key;
    }
  }
  return winnerChar;
}

module.exports = maxChar;
