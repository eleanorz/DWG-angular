'use strict';

/**
 * @ngdoc function
 * @name dwgAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dwgAngularApp
 */
angular.module('dwgAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
