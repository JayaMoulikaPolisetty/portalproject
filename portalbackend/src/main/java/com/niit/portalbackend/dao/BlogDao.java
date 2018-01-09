package com.niit.portalbackend.dao;

import java.util.List;

import com.niit.portalbackend.Blog;

public interface BlogDao {

	boolean addBlog(Blog blog);

	boolean deleteBlog(Blog blog);

	boolean updateBlog(Blog blog);

	Blog getblogById(int blogId);

	List<Blog> getAllBlogs();
}
