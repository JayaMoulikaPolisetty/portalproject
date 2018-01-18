HomeModule.controller("BlogController", function($scope, $location, $rootScope,$cookieStore, $filter,BlogService) {

  if($cookieStore.get('blogData')!=null)
  {
    $rootScope.blogContent=$cookieStore.get('blogData');
    $rootScope.blogCommentsList = $cookies.get('blogComments')
  }
  $scope.blog={};
  $scope.addblog = function() {
    $scope.blog.user = $rootScope.userdetails
    if($rootScope.userdetails.user_role=='admin')
    {
      $scope.blog.approved=1;
    }
    else {
        $scope.blog.approved=0;
    }
    BlogService.addblog($scope.blog).then(function(response) {

      // $scope.blog = null;
      alert("Blog added Successfully")
    }, function(response) {
      console.log(response)
    })
  }

  $scope.blogslist = function() {

    BlogService.blogslist().then(function(response) {

        $scope.blogs = response.data
        $scope.approvedBlogs = [];
        $scope.unapprovedBlogs = [];
        angular.forEach($scope.blogs, function(value,approved){
          if(value.approved == 1)
          {
            $scope.approvedBlogs.push(value);
          }
          else{
          $scope.unapprovedBlogs.push(value);
        }
        })
        console.log(response)
        console.log($scope.approvedBlogs)
        console.log($scope.unapprovedBlogs)
        $location.path("/blogslist")
      }),
      function(response) {
        console.log(response)
      }
  }

  $scope.blogDescription = function(id) {

    var blogData = $filter('filter')($scope.blogs, {blogId: id},true)[0];
    console.log(blogData);

    BlogService.blogComments(id).then(function(response) {
      alert("567")
    console.log(response.data)
    $cookieStore.put('blog',blogData )
    $rootScope.blogContent = $cookieStore.get('blog')
    $cookies.put('blogComments',response.data)
    $rootScope.blogCommentsList = $cookies.get('blogComments')
    $location.path("/blogDescription")
      }),
      function(response) {
        console.log("123")
        console.log(response)
      }
  }

  $scope.approve= function(blogApproval){
    console.log($rootScope.blogContent.blogId)
    console.log(blogApproval);
    $scope.blogApprove = {};
    $scope.blogApprove.blogId = $rootScope.blogContent.blogId;
    $scope.blogApprove.approved = blogApproval;
    BlogService.approve($scope.blogApprove).then(function(response){
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

  $scope.addComment = function(event)
  {
    if(event.key=='Enter')
    {
      $scope.blogComment.commentedBy = $rootScope.userdetails.username;
      $scope.blogComment.blog = $rootScope.blogContent;

        BlogService.addComment($scope.blogComment).then(function(response) {
          alert("commented Successfully")
          $scope.blogComment={}
          console.log(response)
        }),function(response) {
          console.log(response);
        }
      }
  }
})
