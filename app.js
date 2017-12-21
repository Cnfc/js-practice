//  ========== BUDGET CONTROLLER ============
var budgetController = (function() {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };


  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      // CReate new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on "inc or exp" type
      if(type === "exp") {
        newItem =  new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem =  new Income(ID, des, val);

      }

      // push it into out datastructure
      data.allItems[type].push(newItem);
      // return new element
      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };

})();




// =========== UI CONTROLLER ==========================
var UIController = (function() {
  //SOme code

  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
  };

  return {
    getInput: function() {
      return  {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    addListItem: function(obj, type) {
      var html, newHtml, element;
      // Create html string
      if(type === "inc") {
        element = DOMstrings.incomeContainer;
        html =  '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {

        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description% rent</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // Replace placeholder
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%",obj.description);
      newHtml = newHtml.replace("%value%",obj.value);

      // Insert HTML into DOM
      document.querySelector(element).insertAjacentHTML("beforeend", newhtml);


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
    var input, newItem;
    //1 get field input
    input = UICtrl.getInput();

    //2 add item budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    //3 add item to ui
    UICtrl.addListItem(newItem, input.type);


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
