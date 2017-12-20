//  ========== BUDGET CONTROLLER ============
let budgetController = (function() {


})();

// budgetController.publicTest(5);

// =========== UI CONTROLLER ==========================
let UIController = (function() {
  //SOme code
})();


// =======GLOBAL APP CONTROLLER =======================
let controller = (function(budgetCtrl, UICtrl) {

  let ctrlAddItem = function() {
    //1 get field input

    //2 add item budget controller

    //3 add item to ui

    //4 calc budget

    //5 displ budget ui

    console.log("it`s works");
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function() {
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });


})(budgetController, UIController);




























































































// event
