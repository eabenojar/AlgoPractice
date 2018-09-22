// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   var emptystr = "";
//   var count = 1;
//   for(var i = 0; i < str.length; i++){
//     emptystr = emptystr + str.slice(str.length-count,str.length-i);
//     count++
//   }
//   console.log(emptystr)
//   return emptystr
// }

// function reverse(str){
//   return str.split('').reverse().join('');
// }

// function reverse(str){
//   let reversed = '';

//   for(let character of str){
//     reversed = character + reversed;
//   }

//   return reversed;
// }

function reverse(str) {
  str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

module.exports = reverse;
