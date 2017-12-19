let budgetController = (function() {
  let x = 23;

  let add = function(a){
    return a + x;
  }

  return {
    publicTest: function(b) {
      console.log(add(b));
    }
  }
})();

// budgetController.publicTest(5);

let UIController = (function() {
  //SOme code
})();
