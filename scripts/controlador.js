var app = angular.module('Moviles', []);
app.controller('movilesController', function($scope, $http){
$http.post("php/read_data.php").then(function (response) {$scope.id4832974_comparador = response.data.records;});
});)