'use strict';

/**
 * @ngdoc function
 * @name angessentialsApp.controller:CarsCtrl
 * @description
 * # CarsCtrl
 * Controller of the angessentialsApp
 */
angular.module('angessentialsApp')
  .controller('CarsCtrl', function ($scope) {
    $scope.appTitle = '[Packt] Parking';

    $scope.appDescriptionHtml = '<b>Find the best place to park</b>';

    $scope.cars = [];

    $scope.park = function(car) {
        if (car) {
            car.entrance = new Date();
            $scope.cars.push(car);
            delete $scope.car;
        }
    };

    $scope.colors = ['Red', 'White', 'Blue', 'Black', 'Silver'];

  });
