app = angular.module('myapp',['ngAnimate','ui.router'])

app.config(function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'home.html'
	})
	.state('about',{
		url:'/about',
		templateUrl:'about.html'
	})
	.state('leveluptuts',{
		url:'/leveluptuts',
		templateUrl:'leveluptuts.html',
		controller: 'testapp as displayName'
	})
	.state('sexy',{
		url:'/sexy',
		templateUrl:'sexy.html'
	});
});

app.controller('testapp', function () {

	var displayName = this;
	displayName.toggle = true;
	displayName.names = ['aparupa','saif','chotku','sutapa'];
	displayName.addPerson = function() {
		displayName.names.push(displayName.newname);
		displayName.newname="";
	};

});

app.directive('nameList', function(){

	return{
		templateUrl:'name-list.html'
	}
});