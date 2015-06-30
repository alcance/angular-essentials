'use strict';

/**
 * @ngdoc directive
 * @name angessentialsApp.directive:alert
 * @description
 * # alert
 */
angular.module('angessentialsApp')
  .directive('alert', function () {
    return {
      templateUrl: "views/alert.html"
      replace: true
    };
  });
