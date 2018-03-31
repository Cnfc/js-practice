
// storage

// item
const ItemCtrl = (function(){
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure
  const data = {
    items: [
      {id: 0, name:'Steak Dinner', calories: 1200},
      {id: 1, name:'Cookie', calories: 400},
      {id: 2, name:'Egs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  return {
    logData: function(){
      return data;
    }
  }
})();

// UI
const UICtrl = (function(){

  return {
    
  }

})();
// APP

const App = (function(){

  return {
    init: function(){
      console.log('Initializing App...');
    }
  }

})(ItemCtrl, UICtrl);

// Initialize APP
App.init();








































//
