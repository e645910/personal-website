angular.module('myPersonalWeb')
.controller('bioCtrl', function($scope, $location){
	$scope.isCurrentPath = function (path) {
     return $location.path() == path;
	}
});