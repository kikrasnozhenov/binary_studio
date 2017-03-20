angular.module('RecipesApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "recipes.html"
    })
    .when("/recipeInfo", {
      templateUrl : "recipeInfo.html"
    })
    .when("/recipeEdit", {
      templateUrl : "recipeEdit.html"
    })
    .when("/history", {
      templateUrl : "history.html"
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);
