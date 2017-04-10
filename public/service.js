var app = angular.module('app');
app.service('recipesService', ['$http', '$rootScope', function($http, $rootScope) {  //тут ясен красень печаль:) мои депенденси не используются

  var recipesList = [];


  var addrecipe = function(newObj) {
        productList.push(newObj);
      };

  var getRecipes = function(){
        return recipesList;
      };

  return {
      addrecipe: addrecipe,
      getRecipes: getRecipes
  };

  var service= {};
  service.getAll = function() {
    return recipes;
    }
}]);

//   function getRecipes() {
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
//   var service= {};
//   service.getAll = function() {
//     return recipes;
//   }
//   service.get = function(id) {
//     var recipe = null;
//     angular.forEach(recipes, function(value) {
//       if (parseInt(value.id) === parseInt(id)) {
//         recipe = value;
//         return false;
//       }
//     });
//     return recipe;
//   }
//   service.add = function(recipe) {
//     $http({method: 'POST', url: '/', data: recipe})
//       .success(function(data, status, headers, config) {
//         recipes.push(data);
//         $rootScope.$broadcast('recipe:added', data);
//     });
//   }
//   return service;
// }]);