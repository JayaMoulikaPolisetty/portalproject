HomeModule.controller("BlogController", function($scope, $location, $rootScope,$cookieStore,$filter,BlogService) {

  if($cookieStore.get('blog')!=null)
  {
    $rootScope.blogContent=$cookieStore.get('blog');
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
    $cookieStore.put('blog',blogData )
    $rootScope.blogContent = $cookieStore.get('blog')
    // $scope.getComments(blogContent.blogId);

    $location.path("/blogDescription")

    // $cookieStore.put('blogComments',response.data)
    // $rootScope.blogCommentsList = $cookieStore.get('blogComments')
  }

  $scope.getComments = function(id)
  {
    BlogService.blogComments(id).then(function(response) {
    $scope.blogCommentsList = response.data;
    BlogService.likeStatus(id).then(function(response) {
      if(response.data.username == $rootScope.userdetails.username)
      {
        $scope.likedStatus = true;
      }
      console.log($rootScope.userdetails.username)
      console.log($scope.likedStatus)
      console.log(response.data.username)
  }),function(response) {
    console.log(response)
  }
  }),
function(response) {
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
      console.log($scope.blogComment.blog.blogId);
        BlogService.addComment($scope.blogComment).then(function(response) {
          alert("commented Successfully")
            $scope.blogCommentsList = response.data;
          console.log($scope.blogComment.blog)
          $scope.blogComment={}

          console.log(response)
        }),function(response) {
          console.log(response);
        }
      }
  }

  $scope.likeBlog = function()
  {
    var blogLike = {};
    blogLike.blogId = $rootScope.blogContent.blogId;
    blogLike.username = $rootScope.userdetails.username;
    // console.log(blogLike)
    BlogService.likeBlog(blogLike).then(function(response) {
      $scope.bloglikes = response.data
      BlogService.likeStatus($rootScope.blogContent.blogId).then(function(response) {
        blogText = $cookieStore.get('blog')
        blogText.likes = blogText.likes+1;
        $cookieStore.put("blog",blogText)
        $rootScope.blogContent = $cookieStore.get('blog')
        if(response.data.username == $rootScope.userdetails.username)
        {
          $scope.likedStatus = true;
        }
        console.log($rootScope.blogContent.likes);
        // console.log($rootScope.userdetails.username)
        // console.log($scope.likedStatus)
        // console.log(response.data.username)
        $location.path("/blogDescription")
    }),function(response) {
      console.log(response)
    }
    $location.path("/blogDescription")
      console.log(response)
    }),function(response){
      console.log(response)
    }
  }

  $scope.unlikeBlog = function()
  {
    var blogLike = {};
    blogLike.blogId = $rootScope.blogContent.blogId;
    blogLike.username = $rootScope.userdetails.username;
    BlogService.unlikeBlog(blogLike).then(function(response){
      blogText = $cookieStore.get('blog')
      blogText.likes = blogText.likes-1;
      $cookieStore.put("blog",blogText)
      $rootScope.blogContent = $cookieStore.get('blog')
      BlogService.likeStatus($rootScope.blogContent.blogId).then(function(response) {
          console.log(response)
          if(response.data == "")
          {
            $scope.likedStatus = false;
          }  $location.path("/blogDescription")
        }),function(response) {
          console.log(response)
        }
    }),function(response) {

    }
  }
})
