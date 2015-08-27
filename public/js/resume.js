angular.module('myPersonalWeb')
.controller('resumeCtrl', function($scope, $location){
	$scope.isCurrentPath = function (path) {
     return $location.path() == path;
	}
});