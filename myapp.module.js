// (function(){
// 	'use strict';

// 	angular
// 		.module("myApp",['ngRoute'])
// 		.config(config)

// 		function config($routeProvider,$locationProvider){
// 			$routeProvider


var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/index.html');
    
    $stateProvider


// .state('index', {
//     url: '/index',
//     templateUrl: 'index.html'
// })


.state('emp', {
        url: '/emp',
        templateUrl: 'emp.html',
        controller: 'DetailsController as vm'
    })
    .state('empin', {
        url: '/empin',
        templateUrl: 'empin.html',
        controller: 'EmpController as vm'
    })

.state('et', {
    url: '/et',
    templateUrl: 'et.html',
    controller: 'TaskController as vm'
})

.state('etin', {
    url: '/etin',
    templateUrl: 'etin.html',
    controller: 'Taskin as vm'
})

.state('lg', {
    url: '/lg',
    templateUrl: 'lg.html',
    controller: 'LogController as vm'
})

.state('lgin', {
    url: '/lgin',
    templateUrl: 'lgin.html',
    controller: 'Login as vm'
})

.state('la', {
    url: '/la',
    templateUrl: 'la.html',
    controller: 'LeaveController as vm'
})

.state('lain', {
    url: '/lain',
    templateUrl: 'lain.html',
    controller: 'LeaveController as vm'
})

});