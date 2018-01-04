
HomeModule.controller('HomeController', function($scope, $location, HomeService){

  $scope.registeruser = function(){
    HomeService.registeruser($scope.portal_user).then(function(response){

        $scope.portal_user=null
        $scope.message = "Registered Successfully. Please login."

    })
    ,function(response){

        $scope.message = "Registration failed" + $scope.status
    }
  }
  $scope.login=function() {
    HomeService.login($scope.credentials).then(function(response){


        alert("loggedin Successfully");
      console.log(response.data.status)
      $scope.user = response.data
    $location.path("Home")

    })
    ,function(response)
    {
    console.log(response)
    }

  }

})
