var HomeModule = angular.module('HomeModule', ['ngRoute']);

HomeModule.config(function($routeProvider){
    $routeProvider

    .when("/",{
      templateUrl:'Login.html',
      controller: 'HomeController'
    })
    .when("/register",{
      templateUrl:'Registration.html',
      controller: 'HomeController'
    })
    .when("/login",{
      templateUrl: "Login.html",
      controller: "HomeController"
    })
    

})
