angular.module('RecipesApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "recipes.html",
      controller : "recipesCtrl"
    })
    .when("/recipeInfo", {
      templateUrl : "recipeInfo.html"
    })
    .when("/recipeEdit", {
      templateUrl : "recipeEdit.html",
      controller : "addrecipeCtrl"
    })
    .when("/history", {
      templateUrl : "history.html"
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);
