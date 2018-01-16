HomeModule.controller("BlogController", function($scope, $location, $rootScope,$cookieStore, BlogService) {

  if($cookieStore.get('blogData')!=null)
  {
    $rootScope.blog=$cookieStore.get('blogData');
  }
  $scope.addblog = function() {
    $scope.blog.user = $rootScope.userdetails
    BlogService.addblog($scope.blog).then(function(response) {

      $scope.blog = null;
      alert("Blog added Successfully")
    }, function(response) {
      console.log(response)
    })
  }

  $scope.blogslist = function() {

    BlogService.blogslist().then(function(response) {

        $scope.blogs = response.data
        console.log(response)
        $location.path("/blogslist")
      }),
      function(response) {
        console.log(response)
      }
  }

  $scope.blogDescription = function(blogId) {

    BlogService.blogDescription(blogId).then(function(response) {
      console.log(response.data)
      $cookieStore.put('blogData',response.data )
      $rootScope.blog = $cookieStore.get('blogData')
        $location.path("/blogDescription")
      }),
      function(response) {
        console.log(response)
      }
  }

  $scope.approve= function(blog){
    BlogService.approve($scope.blog).then(function(response){
      console.log(response)
      $location.path("/blogslist")
    }),function(response)
    {
      console.log(response)
    }

  }

  $scope.sort = function(KeyName)
  {
    $scope.sortKey= KeyName;
    $scope.reverse=!$scope.reverse;
  }

})
