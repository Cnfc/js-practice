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

function func1() {
  var sel = document.getElementById('mySelect').selectedIndex;
  var options = document.getElementById('MySelect').options;
  alert("Init option " +options[sel].text);
}
