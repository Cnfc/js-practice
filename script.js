// function func1() {
//     var chbox;
//     chbox = document.getElementById('one');

//     if (chbox.checked) {
//       alert('Init');
//     } else {
//       alert('Not init');
//     }
// }

// function fun1 () {
//   var radi = document.getElementsByName('r1');
//   for (var i = 0; i< radi.length; i++) {
//     if(radi[i].checked) {
//       alert( "Init " + i + " element");
//     }
//   }
// }
/*
function func1() {
  var sel = document.getElementById('mySelect').selectedIndex;
  var options = document.getElementById('MySelect').options;
  alert("Init option " +options[sel].text);
}
*/

////////////////////////////////////////////////////////////////////////////

// var john = {
//     name: 'John',
//     lastname: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false,
//     family: ['Jane', 'Mark', 'Bob'],
//     calculateAge: function () {
//         return (2016 - this.yearOfBirth);
//     }
// };

// console.log(john.calculateAge());
// var age = john.calculateAge();
// john.age = age;

// console.log(john);


// var john = {
//      name: 'John',
//      lastname: 'Smith',
//      yearOfBirth: 1990,
//      job: 'teacher',
//      isMarried: false,
//      family: ['Jane', 'Mark', 'Bob'],
//      calculateAge: function () {
//          //return (2016 - this.yearOfBirth);
//          this.age = 2016 - this.yearOfBirth;
//      }
// };

// john.calculateAge();
// console.log(john)


// /////////////////////////////////////////////////////////////////////////////

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for (var i=0; i<names.length; i++) {
//   console.log(names[i]);
// }

// for (var i = names.length - 1; i>=0; i--) {
//   console.log(names[i])
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////
// var i = 0;
// while( i <names.length) {
//     console.log(names[i]);
//     i++;
// }









// var years = [2001, 1995, 2014, 1973];
// var ages = [];

// for (var i = 0 ; i<years.length; i++) {
//   ages[i] = 2016 - years[i];

// }

// for (i=0; i < ages.length; i++) {
//   if(ages[i] >= 18) {
//     console.log('Person ' + i + ' is ' + ages[i] + ' years old');
//   } else {
//     console.log('Person ' + i + ' is ' + ages[i] + ' Not of years old');
//   }
// }


var years = [2001, 1995, 2014, 1973];
function printAges(years) {

var ages = [];
var fullAges = [];

for (var i = 0; i<years.length; i++) {
  ages[i] =  2016 - years[i];
  console.log(ages[i]);

}

for (var i = 0; i<ages.length; i++) {
  if (ages[i] < 18) {
    console.log('littyy');
    fullAges.push(false);

  } else {
    console.log('Huge');
    fullAges.push(true);
  }
console.log(fullAges[i]);
}
return fullAges;
}
var full_1 = printAges(years);



