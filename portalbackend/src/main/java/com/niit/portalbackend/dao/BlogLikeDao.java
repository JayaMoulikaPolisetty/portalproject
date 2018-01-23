package com.niit.portalbackend.dao;

import java.util.List;

import com.niit.portalbackend.BlogLike;

public interface BlogLikeDao {
	
	boolean addBlogLike(BlogLike blogLike);
	
	boolean deleteBlogLike(BlogLike blogLike);
	
	BlogLike getBlogLikeById(int id);
	
	BlogLike getBlogLike(int id,String username);
	
	List<BlogLike> blogLikes(int id);

}
