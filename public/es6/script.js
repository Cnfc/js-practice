// Function construction

// let john = {
//   name: "John",
//   yaerOfBirth: 1990,
//   job: "teacher"
// };
//
// let Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };
//
// console.log(john);

//
// var personProto = {
//   calculateAge: function() {
//     console.log(2016-this.yearOfBirth);
//   }
// };
//
// var john = Object.create(personProto);
//
// console.log(john);
// john.name = "john";
//
// let years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, fn) {
//   let arrRes = [];
//   for(let i=0; i<arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(el) {
//   return 2017 - el;
// }
//
// function isFullAge(el) {
//   return el >= 18;
// }
//
// let ages = arrayCalc(years, calculateAge);
//
// let fullAges = arrayCalc(ages, isFullAge);
//
// console.log(ages);
// console.log(full Ages);
//
// (function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();
//

var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if(style === "formal") {
      console.log("Good" + timeOfDay + ", Ladies and gentlement! I`m " + this.name + ", I`m a" + this.job + "and i`m " + this.age + " years old." );
    } else if (style === "friendly") {
      console.log("Hey Whats Up?");
    }
  }
};

john.presentation("formal", "morning");

// ECMAScript 2015





























































































//
