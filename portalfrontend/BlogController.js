HomeModule.controller("BlogController", function($scope,$location,$rootScope,BlogService){

  $scope.addblog=function()
  {
    $scope.blog.user=$rootScope.userdetails
    BlogService.addblog($scope.blog).then(function(response){

      $scope.blog=null;
      alert("Blog added Successfully")
    },function(response){
      console.log(response)
    })
  }

  $scope.blogslist=function()
  {
    BlogService.blogslist().then(function(response){

      $scope.blogs= response.data
      console.log(response)
      $location.path("/blogslist")
    }),function(response){
      console.log(response)
    }
  }

})
