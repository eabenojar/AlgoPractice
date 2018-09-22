// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   var arr1 = [];
//   var mainArr = [];
//   for (var i = 0; i < array.length; i++) {
//     if (arr1.length <= size) {
//       arr1.push(array[i]);
//       if (arr1.length === size) {
//         mainArr.push(arr1);
//         arr1 = [];
//       } else if (array.length - 1 === i) {
//         mainArr.push(arr1);
//       }
//     }
//   }
//   console.log(mainArr);
//   return mainArr;
// }

function chunk(array, size) {
  var index = 0;
  var chunk = [];
  var newSize = size;
  while (index < array.length) {
    chunk.push(array.slice(index, newSize));
    index += size;
    newSize += size;
  }
  console.log(chunk);
  return chunk;
}

module.exports = chunk;
