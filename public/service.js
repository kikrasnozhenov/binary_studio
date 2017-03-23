var app = angular.module('app');
app.service('Recipes', ['$http', '$rootScope', function($http, $rootScope) {

  var recipes = [];
  function getRecipes() {
    $http({method: 'GET', url: '/'})
        .success(function(data, status, headers, config) {
            recipes = data;
            $rootScope.$broadcast('recipes:updated');
        })
        .error(function(data, status, headers, config) {
            console.log(data);
        });
}
getRecipes();
  recipes.getAll = function() {
  return recipes;
  }
  recipes.get = function(id) {
    var recipe = null;
    angular.forEach(recipes, function(value) {
        if (parseInt(value.id) === parseInt(id)) {
            recipe = value;
            return false;
        }
    });
    return recipe;
  }
  recipes.add = function(recipe) {
  $http({method: 'POST', url: '/', data: recipe})
    .success(function(data, status, headers, config) {
        recipes.push(data);
        $rootScope.$broadcast('recipe:added', data);
        });
  }
}]);