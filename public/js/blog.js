angular.module('myPersonalWeb')
.controller('blogCtrl', function($scope, $location){
	$scope.isCurrentPath = function (path) {
     return $location.path() == path;
	}
});