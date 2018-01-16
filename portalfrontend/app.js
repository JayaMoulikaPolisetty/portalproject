var HomeModule = angular.module('HomeModule', ['ngRoute', 'ngCookies', 'angularUtils.directives.dirPagination']);

HomeModule.config(function($routeProvider){
    $routeProvider

    .when("/",{
      templateUrl: 'Home.html'
    })
    .when("/home",{
      templateUrl:'Home.html',
      controller:"HomeController"
    })
    .when("/register",{
      templateUrl:'Registration.html',
      controller: 'HomeController'
    })
    .when("/login",{
      templateUrl: "Login.html",
      controller: "HomeController"
    })
    .when("/editProfile", {
      templateUrl: "MyProfile.html",
      controller: "HomeController"
    })

    .when("/blog", {
    templateUrl: "Blog.html",
    controller: "BlogController"
  })

  .when("/blogslist",{
    templateUrl: "BlogsList.html",
    controller: "BlogController"
  })

  .when("/blogDescription",{
    templateUrl: "BlogDescription.html",
    controller: "BlogController"
})

    // .when("/logout", {
    //   templateUrl: "Login.html",
    //   controller: "HomeController"
    // })


})
