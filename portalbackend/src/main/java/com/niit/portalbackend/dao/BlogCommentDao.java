package com.niit.portalbackend.dao;

import java.util.List;

import com.niit.portalbackend.BlogComment;

public interface BlogCommentDao {

	boolean addBlogComment(BlogComment blogComment);

	boolean deleteBlogComment(BlogComment blogComment);

	boolean updateBlogComment(BlogComment blogComment);

	BlogComment getBlogComment(int commentId);

	List<BlogComment> allBlogComments(int blogId);
}
