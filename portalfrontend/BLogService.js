HomeModule.factory("BlogService", function($http){

  var BASE_URL = "http://localhost:8089/portalmiddleware"
  var blogservice={};

  blogservice.addblog= function(blog)
  {
    return $http.post(BASE_URL+"/addblog", blog);
  }
  blogservice.blogslist = function()
  {
    return $http.get(BASE_URL+"/blogslist");
  }
  blogservice.blogDescription = function(blogId)
  {
    return $http.get(BASE_URL+"/blogDescription?blogId="+blogId)
  }
  blogservice.approve = function(blog)
  {
    return $http.post(BASE_URL+"/approval",blog)
  }
  blogservice.addComment = function(blogComment) {
    return $http.post(BASE_URL+"/addBlogComment",blogComment)
  }
  blogservice.blogComments = function(blogId){
    return $http.get(BASE_URL+"/blogComments?blogId="+blogId)
  }
  blogservice.likeBlog = function(blogLike) {
      console.log(blogLike)
    return $http.post(BASE_URL+"/likeBlog", blogLike)
  }
 blogservice.likeStatus = function(blogId) {
   return $http.get(BASE_URL+"/likeStatus?blogId="+blogId)
 }
 blogservice.unlikeBlog = function(blogLike) {
   return $http.post(BASE_URL+"/unlikeBlog",blogLike)
 }
  return blogservice;
})
