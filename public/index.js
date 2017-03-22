angular.module('RecipesApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "recipes.html",
      controller : "recipesCtrl",
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
