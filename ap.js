//
//
// function mul(arr, key, value) {
//   arr.forEach(function(val) {
//     val[key] = value;
//   });
//   return arr;

// }

// function voweCount(str){
//   let splitArr = str.split('');
//   let obj = [];
//   let vowels = 'aeiou';
//
//   splitArr.forEach(function(letter) {
//     if(vowels.indexOf(letter.toLowerCase()) !== -1){
//       if(letter in obj){
//         obj[letter]++
//       } else {
//         obj[letter] = 1;
//       }
//     }
//   });
//   return obj;
// }
//


// console.log(voweCount("STRING"));

//
// let arr = [1,2,4,5,9];
//
// console.log(arr.map(function(value, index, array) {
//   return value * 2;
// }));
//
// console.log(arr);
//
//

function hasEvenNumber(arr) {
  return arr.some(function(value){
    return valie % 2 === 0;
  });
}

hasEvenNumber([1,2,3,4]);































































function hasEvenNumber(arr) {
  return arr.some(function(value){
    return value % 2 === 0;
  });
}

console.info(hasEvenNumber([1,2,3,4]));











































































































//
