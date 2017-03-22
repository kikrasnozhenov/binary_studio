var app = angular.module('app', ['ngRoute']);
app.controller('addrecipeCtrl', addrecipeCtrl);

addrecipeCtrl.$inject = ['Recipes'];
function addrecipeCtrl(Recipes) {
  var vm = this;
  this.addRecipe = function() {
  console.log('addRecipe');
  };
  addRecipe();

  vm.recipeName = "";
  vm.recipeInfo = "";
  vm.add = function() {
    var recipe = {
        name: vm.recipeName,
        recipe: vm.recipeInfo
    };
  };
  // Call the async method and then do stuff with what is returned inside our own then function
  Recipes.async().then(function(d) {
    vm.data = d;
  });
};
