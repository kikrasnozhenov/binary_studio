var app = angular.module('app');
app.service('recipeService', ['$http', '$rootScope', function($http, $rootScope) {

  var recipes = [];
  this.saveRecipe = function(recipe){
      // return a Promise object so that the caller can handle success/failure
      return $http({ method: 'POST', url: '/api/recipe/add', data: recipe});
  }

  var service= {};
  service.getAll = function() {
    return recipes;
  }
  service.get = function(id) {
    var recipe = null;
    angular.forEach(recipes, function(value) {
      if (parseInt(value.id) === parseInt(id)) {
        recipe = value;
        return false;
      }
    });
    return recipe;
  }
  return service;
}]);

// function getRecipes() {
//     $http({method: 'GET', url: '/'})
//     .success(function(data, status, headers, config) {
//       recipes = data;
//       $rootScope.$broadcast('recipes:updated');
//     })
//     .error(function(data, status, headers, config) {
//       console.log(data);
//     });
//   }
//   getRecipes(); //is for getRecipes fc
//   service.add = function(recipe) {
//     $http({method: 'POST', url: '/', data: recipe})
//       .success(function(data, status, headers, config) {
//         recipes.push(data);
//         $rootScope.$broadcast('recipe:added', data);
//     });
//   }