angular.module('myPersonalWeb')
.controller('hireMeCtrl', function($scope, $location){
	$scope.isCurrentPath = function (path) {
     return $location.path() == path;
	}
});