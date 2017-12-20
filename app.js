//  ========== BUDGET CONTROLLER ============
let budgetController = (function() {


})();

// budgetController.publicTest(5);

// =========== UI CONTROLLER ==========================
let UIController = (function() {
  //SOme code

  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };

  return {
    getInput: function() {
      return  {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }

  };
})();





// =======GLOBAL APP CONTROLLER =======================
let controller = (function(budgetCtrl, UICtrl) {

  let DOM = UICtrl.getDOMstrings();

  let ctrlAddItem = function() {
    //1 get field input
    var input = UICtrl.getInput();
    console.log(input);
    //2 add item budget controller

    //3 add item to ui

    //4 calc budget

    //5 displ budget ui


  };


  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function() {
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });


})(budgetController, UIController);




























































































// event
