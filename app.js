//  ========== BUDGET CONTROLLER ============
var budgetController = (function() {


})();

// budgetController.publicTest(5);

// =========== UI CONTROLLER ==========================
var UIController = (function() {
  //SOme code

  var DOMstrings = {
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
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function() {
      if(event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };



  var ctrlAddItem = function() {
    //1 get field input
    var input = UICtrl.getInput();
    console.log(input);
    //2 add item budget controller

    //3 add item to ui

    //4 calc budget

    //5 displ budget ui


  };

  return {
    init: function() {
      console.log("Application has started");
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();


























































































// event
