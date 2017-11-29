"use strict";
// left side
const sentences = [
  { subject: "JavaScript", verb: "is", object: "great"},
  { subject: "Elephants", verb: "are", object: "large"}
];

//es6
function say({subject, verb, object}) {
  console.log("${subject} ${verb} ${object}");
}

//for... of
for(let s of sentences) {
  say(s);
}
