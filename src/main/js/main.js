var $ = require("jquery");
require("angular");
var type = require('typejs');


angular.module('createam', [])
.controller('HelloController', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'https://createam-api.herokuapp.com/hello'
  }).then(function successCallback(response) {
    $scope.hello = response.data;
  }, function errorCallback(response) {
    $scope.hello.message = 'no message available';
    $scope.hello.heartbeats = 'no heartbeats available';
    $scope.hello.uptime = 'no uptime available';
  });
});
