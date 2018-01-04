HomeModule.factory('HomeService', function($http){

var BASE_URL = "http://localhost:8089/portalmiddleware"
var userservice={};
  userservice.registeruser = function(userdata){

    console.log(userdata.firstname);

    return $http.post(BASE_URL+"/registeruser", userdata)
  }

  userservice.login = function(credentials) {

    return $http.post(BASE_URL+"/authenticate",credentials);
  }
  return userservice;
})
