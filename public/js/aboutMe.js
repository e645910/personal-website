angular.module('myPersonalWeb')
.controller('aboutMeCtrl', function($scope, $location){
	$scope.isCurrentPath = function (path) {
     return $location.path() == path;
	}
});