var app = angular.module('app');
app.controller('editCtrl', editCtrl);

editCtrl.$inject = ['recipeService'];
function editCtrl(recipeService) {
  var vm = this;
  vm.recipe = "";
  this.saveRecipe = function(recipe) {
    // call the service, handle success/failure from within your controller
    recipeService.saveRecipe(recipe).success(function() { 
        alert('already saved!!!!'); 
    });
  }
};