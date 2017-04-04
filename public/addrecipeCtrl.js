var app = angular.module('app');
app.controller('addrecipeCtrl', addrecipeCtrl);

addrecipeCtrl.$inject = ['recipesService'];
function addrecipeCtrl(recipesService) {
  var vm = this;
  var addRecipe = this;
  addRecipe = function() {
      console.log('addRecipe')
  };
  addRecipe();

  vm.recipeName = "";
  vm.recipeInfo = "";
  vm.add = function() {
    var recipe = {
        name: vm.recipeName,
        info: vm.recipeInfo
    };
  };
};