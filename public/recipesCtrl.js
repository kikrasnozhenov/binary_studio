var app = angular.module('app');
app.controller('recipesCtrl', recipesCtrl);

recipesCtrl.$inject = ['recipesService'];
function recipesCtrl(recipesService) {
  this.addRecipe = [
    {
      recipeName: 'recipeName'
    }
  ];
  vm.add = function() {
    var recipe = {
        name: vm.recipeName,
        info: vm.recipeInfo
    };
  };
}