angular.module('RecipesApp', ['ngRoute'])
.service('Recipes', ['$http', '$rootScope', function($http, $rootScope) {

  var recipes = [];
  function getRecipes() {
    $http({method: 'GET', url: '/recipes'})
        .success(function(data, status, headers, config) {
            recipes = data;
            $rootScope.$broadcast('recipes:updated');
        })
        .error(function(data, status, headers, config) {
            console.log(data);
        });
}
getRecipes();
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
  service.add = function(recipe) {
  $http({method: 'POST', url: '/', data: recipe})
    .success(function(data, status, headers, config) {
        recipes.push(data);
        $rootScope.$broadcast('recipe:added', data);
        });
  }
}]);