//
//
// function mul(arr, key, value) {
//   arr.forEach(function(val) {
//     val[key] = value;
//   });
//   return arr;

// }

// function voweCount(str){
//   let splitArr = str.split('');
//   let obj = [];
//   let vowels = 'aeiou';
//
//   splitArr.forEach(function(letter) {
//     if(vowels.indexOf(letter.toLowerCase()) !== -1){
//       if(letter in obj){
//         obj[letter]++
//       } else {
//         obj[letter] = 1;
//       }
//     }
//   });
//   return obj;
// }
//


// console.log(voweCount("STRING"));

//
// let arr = [1,2,4,5,9];
//
// console.log(arr.map(function(value, index, array) {
//   return value * 2;
// }));
//
// console.log(arr);
//
//

function hasEvenNumber(arr) {
  return arr.some(function(value){
    return valie % 2 === 0;
  });
}

hasEvenNumber([1,2,3,4]);































































// function hasEvenNumber(arr) {
//   return arr.some(function(value){
//     return value % 2 === 0;
//   });
// }
//
// console.info(hasEvenNumber([1,2,3,4]));
//
//


let arr = [1,2,3,4,5];

arr.reduce(function(accumulation, nextValue) {
  return
})

var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (current) {
      sum += current.value;
    });
    data.totals[type] = sum;
  };

    // hold all income, expenses, and totals in an object
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

    // make some public methods
  return {
    addItem: function (type, desc, val) {
      var newItem, ID;

      // create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // create new item based on inc/exp
      if (type === 'exp') {
        newItem = new Expense(ID, desc, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, desc, val);
      }

      // push into data structure
      data.allItems[type].push(newItem);

      // return the new element
      return newItem;
    },

    deleteItem: function(type, id) {
      var ids, index;

      ids = data.allItems[type].map(function(current) {
        return current.id;
      });

      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function() {

      // calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');

      // calculate the budget: income - expenses
      data.budget = (data.totals.inc - data.totals.exp);

      // calculate the percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }

    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },

    testing: function() {
      console.log(data);  }
  };

})();








































































































//
