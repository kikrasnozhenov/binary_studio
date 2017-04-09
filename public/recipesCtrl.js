var app = angular.module('app');
app.controller('newRecipeCtrl', newRecipeCtrl);

newRecipeCtrl.$inject = ['recipesService'];
function newRecipeCtrl(recipesService) {
  var vm = this;
  vm.recipes = recipesService.getRecipes();
  // vm.newRecipe = [
  //   {
  //     recipes: 'recipeName'
  //   }
  // ]
};