angular.module('myPersonalWeb')
.controller('aboutMeCtrl', function($scope, $location, $window){
	$scope.isCurrentPath = function (path) {
     return $location.path() == path;
    };
    
	$scope.openTab = function() {
    $scope.url = 'https://wildernessquiz.herokuapp.com/#/';
    $scope.url1 = 'https://github.com/mPemba/groupProject/tree/master/api';
	};
});