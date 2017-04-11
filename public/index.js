angular.module('app', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "recipes.html",
      controller : "recipesCtrl",
      controllerAs : "vm"
    })
    .when("/recipeInfo", {
      templateUrl : "recipeInfo.html"
    })
    .when("/recipeEdit", {
      templateUrl : "recipeEdit.html",
      controller : "editCtrl",
      controllerAs : "vm"
    })
    .when("/history", {
      templateUrl : "history.html"
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);
