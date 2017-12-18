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


var personProto = {
  calculateAge: function() {
    console.log(2016-this.yearOfBirth);
  }
};

var john = Object.create(personProto);

console.log(john);
