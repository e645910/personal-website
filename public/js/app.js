angular.module('myPersonalWeb', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/',
	{
		templateUrl:'views/aboutMe-view.html',
		controller:'aboutMeCtrl'
	})

	.when('/bio',
	{
		templateUrl:'views/biography-view.html',
		controller:'bioCtrl'
	})

	.when('/blog',
	{
		templateUrl:'views/blog-view.html',
		controller:'blogCtrl'
	})

	.when('/contact',
	{
		templateUrl:'views/contact-view.html',
		controller:'contactCtrl'

	})

	.when('/hireMe',
	{
		templateUrl:'views/hireMe-view.html',
		controller:'hireMeCtrl'
	})

	.when('/portfolio',
	{
		templateUrl:'views/portfolio-view.html',
		controller:'portfolioCtrl'
	})

	.when('/resume',
	{
		templateUrl:'views/resume-view.html',
		controller:'resumeCtrl'
	})

	.otherwise({
		redirectTo: '/'})

});