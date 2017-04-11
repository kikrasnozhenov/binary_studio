var app = angular.module('app');
app.controller('recipesCtrl', recipesCtrl);

recipesCtrl.$inject = ['recipeService'];
function recipesCtrl(recipeService) {
  var vm = this;
  vm.recipes = recipeService.getRecipes();
  // vm.newRecipe = [
  //   {
  //     recipes: 'recipeName'
  //   }
  // ]
};