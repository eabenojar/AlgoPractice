// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  var hash = "";
  var space = " ";
  var result = "";
  space = space.repeat(n - 1);
  //     console.log(space)
  for (var i = n; i > 0; i--) {
    hash = hash + "#";
    result = hash + space;
    space = space.substring(0, space.length - 1);
    console.log(result);
  }
  return result;
}

module.exports = steps;
