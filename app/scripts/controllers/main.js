'use strict';

/**
 * @ngdoc function
 * @name dwgAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dwgAngularApp
 */
angular.module('dwgAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
