angular.module('app', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "recipes.html",
      controller : "newRecipeCtrl",
      controllerAs : "recipeNew"
    })
    .when("/recipeInfo", {
      templateUrl : "recipeInfo.html"
    })
    .when("/recipeEdit", {
      templateUrl : "recipeEdit.html",
      controller : "addrecipeCtrl",
      controllerAs : "addRecipe"
    })
    .when("/history", {
      templateUrl : "history.html"
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);
