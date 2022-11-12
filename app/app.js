var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope' , '$http', function($scope, $http) {

  $scope.all = [];
  $scope.vectori = [];

  $http.get('data/televizor.json').then(function(response){
    $scope.all[0] = response.data;
  });

  $http.get('data/frigider.json').then(function(response){
    $scope.all[1] = response.data;
  });

  $http.get('data/gaming.json').then(function(response){
    $scope.all[2] = response.data;
  });

  $http.get('data/fashion.json').then(function(response){
    $scope.all[3] = response.data;
  });

  $http.get('data/auto.json').then(function(response){
    $scope.all[4] = response.data;

    //Adaugarea elementelor din all in vectori
    for (var i = 0; i < $scope.all.length; i++) {
      for (var j = 0; j < $scope.all[i].length; j++) {
        $scope.vectori.push($scope.all[i][j]);
      }
    }

  });


  $scope.allProducts = function() {
    $scope.vectori = [];
    for (var i = 0; i < $scope.all.length; i++) {
      for (var j = 0; j < $scope.all[i].length; j++) {
        $scope.vectori.push($scope.all[i][j]);
      }
    }
  }

  $scope.televizorProducts = function () {
    $scope.vectori = [];
    for (var i = 0; i < $scope.all[0].length; i++) {
      $scope.vectori.push($scope.all[0][i]);
    }

  }

  $scope.frigiderProducts = function () {
    $scope.vectori = [];
    for (var i = 0; i < $scope.all[1].length; i++) {
      $scope.vectori.push($scope.all[1][i]);
    }
  }

  $scope.gamingProducts = function () {
    $scope.vectori = [];
    for (var i = 0; i < $scope.all[2].length; i++) {
      $scope.vectori.push($scope.all[2][i]);
    }
  }

  $scope.fashonProducts = function () {
    $scope.vectori = [];
    for (var i = 0; i < $scope.all[3].length; i++) {
      $scope.vectori.push($scope.all[3][i]);
    }
  }
  $scope.autoProducts = function () {
    $scope.vectori = [];
    for (var i = 0; i < $scope.all[4].length; i++) {
      $scope.vectori.push($scope.all[4][i]);
    }
  }

}]);
