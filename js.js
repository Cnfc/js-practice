// "use strict";
// ALL COSTS
//
// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
//
// //... ваш код выведет 650
// var sum = 0;
// for(var prop in salaries) {
//   sum = sum + salaries[prop];
// }
// console.log(sum);

// "use strict";
//
// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
//
// // ... ваш код выведет "Петя"
// var max = 0;
// var maxName = "";
// for (var prop in salaries) {
//   if(max< salaries[prop]){
//     max = salaries[prop];
//     maxName = prop;
//   }
// }
// alert( maxName || "нет сотрудников" );

// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
//  };
//
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }
//
// function multiplyNumeric(obj){
//   for(var prop in obj) {
//     if(isNumeric(obj[prop])) {
//       obj[prop] *=2;
//     }
//   }
// }
// multiplyNumeric(menu);
// alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
//



// SCOPE
// function foo(a) {
//   console.log(a + b);
//  }
// var b =2;
// foo(2);
//
// function foo(a) {
//   let b = 2 * a;
//   function bar(c){
//     console.log(a,b,c);
//   }
//   bar(b* 3);
//  }
//  foo(2);




//
// const SPENDING_THRESHOLD = 200;
// const TAX_RATE = 0.08;
// const PHONE_PRICE = 99.99;
// const ACCESSORY_PRICE = 9.99;
//
// var bank_balance = 303.91;
// var amount = 0;
//
// function calculateTax(amount) {
//     return amount * TAX_RATE;
// }
//
// function formatAmount(amount) {
//     return "$" + amount.toFixed( 2 );
// }
//
// // keep buying phones while you still have money
// while (amount < bank_balance) {
//     // buy a new phone!
//     amount = amount + PHONE_PRICE;
//
//     // can we afford the accessory?
//     if (amount < SPENDING_THRESHOLD) {
//         amount = amount + ACCESSORY_PRICE;
//     }
// }
//
// // don't forget to pay the government, too
// amount = amount + calculateTax( amount );
//
// console.log(
//     "Your purchase: " + formatAmount( amount )
// );
// // Your purchase: $334.76
//
// // can you actually afford this purchase?
// if (amount > bank_balance) {
//     console.log(
//         "You can't afford this purchase. :("
//     );
// }
// You can't afford this purchase. :(






// function getValue(value) {
//   return value + 5;
// }
//
// function add(first, second = getValue(first)) {
//   return first + second;
// }
// console.log(add(1,1));
// console.log(add(1));
//

// function pick(obj) {
//   let result = Object.create(null);
//   for(let i=0, len=arguments.length; i<len; i++) {
//     result[arguments[i]] = obj[arguments[i]];
//   }
//   return result;
// }
//
// let book = {
//   title: "Understanding ECMAScript 6",
//   author: "Nicolas",
//   year: 2016
// };
//
// let bookData = pick(book, 'author', 'year');
//
// console.log(bookData.author);
// console.log(bookData.year);

// let value1 = 25;
// let value2 = 26;
// console.log(Math.max(value1, value2));

var values = [25, 50, 75, 100, 38];
// console.log(Math.max.apply(Math, values));
console.log(Math.max(...values, 0));

























































//
