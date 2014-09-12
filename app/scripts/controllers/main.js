'use strict';

/**
 * @ngdoc function
 * @name cdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cdApp
 */
angular.module('cdApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
