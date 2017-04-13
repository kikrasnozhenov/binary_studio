var app = angular.module('app');
app.controller('editCtrl', editCtrl);

editCtrl.$inject = ['recipeService'];
function editCtrl(recipeService) {
  var vm = this;
  vm.recipe = "";
  this.saveRecipe = function(recipe) {
    recipeService.saveRecipe(recipe).success(function() { 
      alert('already saved!!!!'); 
    }).error(function(){
        alert('pe4al!!!');
    });
  }
};