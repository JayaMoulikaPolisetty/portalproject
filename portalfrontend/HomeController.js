
HomeModule.controller('HomeController', function($scope, $rootScope,$cookieStore,$cookies,$location, HomeService){

   console.log($cookieStore.get('user'));
   if($cookieStore.get('user')!=null)
   {
     $rootScope.userdetails=$cookieStore.get('user');
     $rootScope.authenticated=true;
   }

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
      $cookieStore.put('user', response.data)
       $rootScope.userdetails= $cookieStore.get('user')
      console.log($rootScope.userdetails.user_role)
      console.log($scope.authenticated);
    $location.path("/home")


    })
    ,function(response)
    {
    console.log(response)
    }

  }

  $scope.editProfile=function() {
    HomeService.editProfile($rootScope.userdetails).then(function(response){
      console.log(response.data)
      $location.path("Home")
    })
    ,function(response)
    {
      console.log(response)
    }

  }

  $scope.logout = function(){
      console.log("called")
        HomeService.logout($rootScope.userdetails).then(function(response){

          $cookies.remove('authentication')
          $rootScope.authenticated = null;
          $cookieStore.remove("user");
          $rootScope.userdetails = null;
          $location.path("/")
          console.log($rootScope.authenticated)
        })
        ,function(response)
        {
          console.log(response)
        }


    }



})
