angular.module('myPersonalWeb')
.controller('contactCtrl', function($scope, $location){
	$scope.isCurrentPath = function (path) {
     return $location.path() == path;
	}
});