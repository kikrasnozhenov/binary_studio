var app = angular.module('app');
app.controller('addrecipeCtrl', addrecipeCtrl);

addrecipeCtrl.$inject = ['recipesService'];
function addrecipeCtrl(recipesService) {
  var vm = this;
  vm.recipeName = "";
  vm.recipeInfo = "";
  vm.callToAddToRecipesList = function(currObj){
        recipesService.addrecipe(currObj);
    };

  // vm.add = function() {
  //   var recipe = {
  //       name: vm.recipeName,
  //       info: vm.recipeInfo
  //   };
  // }; 
};