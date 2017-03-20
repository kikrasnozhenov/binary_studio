// app.factory('Recipes', ['$http', '$rootScope', function($http, $rootScope) {
//     var service = {};
//     return service;
// }]);

var app = angular.module('MyApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("recipes.html")
    .then(function(response) {
        $scope.newRecipe = response.data;
    });
});