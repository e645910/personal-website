angular.module('myPersonalWeb')
.controller('aboutMeCtrl', function($scope, $location, $window){
	$scope.isCurrentPath = function (path) {
     return $location.path() == path;
    }
    // $scope.redirectToGoogle = function(){
    //         $window.open('https://wildernessquiz.herokuapp.com/#/', '_blank');
    //     };
// function openInNewTab() {
//   $scope.open = window.open('https://wildernessquiz.herokuapp.com/#/','_blank');
// }

$scope.openTab = function() {
    $scope.url = 'https://wildernessquiz.herokuapp.com/#/';
}

});