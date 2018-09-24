// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  var hash = "#";
  var result = "";
  var space = " ";
  space = space.repeat(2 * n - 2);
  for (var i = n; i > 0; i--) {
    result = space.substring(0, i - 1) + hash + space.substring(0, i - 1);
    hash = hash + "##";
    console.log(result);
  }
}

module.exports = pyramid;
