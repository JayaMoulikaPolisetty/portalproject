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

  userservice.editProfile = function(user){
    return $http.post(BASE_URL+ "/editProfile", user);
  }

  userservice.logout = function(userdetails){
    return $http.get(BASE_URL+ "/logout?username="+userdetails.username);
  }
  return userservice;
})
