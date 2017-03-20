var app = angular.module('app', ['ngRoute']);

app.controller('recipesCtrl', recipesCtrl);

recipesCtrl.$inject = ['Recipes'];
function recipesCtrl(Recipes) {
  this.addRecipe = [
    {
      recipeName: 'recipeName'
    }
]
  Recipes.async().then(function(d) {
    vm.data = d;
  });
};