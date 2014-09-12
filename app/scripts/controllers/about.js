'use strict';

/**
 * @ngdoc function
 * @name cdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cdApp
 */
angular.module('cdApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
