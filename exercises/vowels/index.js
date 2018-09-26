// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }
  console.log(count);
  return count;
}

// function vowels(str) {
//   var vowelArr = ["a", "e", "i", "o", "u"];
//   var charMap = {};
//   var vowelCount = 0;
//   var test = str.replace(/[^\w]/g, "").toLowerCase();
//   for (var char of test) {
//     if (vowelArr.indexOf(char) !== -1 && !charMap[char]) {
//       charMap[char] = 1;
//       vowelCount++;
//     } else if (charMap[char]) {
//       charMap[char]++;
//       vowelCount++;
//     }
//   }
//   console.log(charMap, vowelCount);
//   return vowelCount;
// }

module.exports = vowels;
