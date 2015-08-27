angular.module('myPersonalWeb')
.controller('portfolioCtrl', function($scope, $location){
	$scope.isCurrentPath = function (path) {
     return $location.path() == path;
	}
});