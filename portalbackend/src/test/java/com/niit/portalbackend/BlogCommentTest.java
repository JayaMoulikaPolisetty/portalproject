package com.niit.portalbackend;

import java.util.Date;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.portalbackend.dao.BlogCommentDao;
import com.niit.portalbackend.dao.BlogDao;
import com.niit.portalbackend.dao.PortalUserDao;

public class BlogCommentTest {

	AnnotationConfigApplicationContext context;
	PortalUserDao portalUserDao;
	portal_user user;
	BlogDao blogDao;
	Blog blog;
	BlogComment blogComment;
	BlogCommentDao blogCommentDao;

	@Before
	public void init() {
		
		context =  new AnnotationConfigApplicationContext();
		context.scan("com.niit");
		context.refresh();
		portalUserDao = (PortalUserDao) context.getBean("portalUserDao");
		blogDao = (BlogDao) context.getBean("blogDao");
		blogCommentDao = (BlogCommentDao) context.getBean("blogCommentDao");
		blogComment = new BlogComment();
	}
	
	@Test
	public void addblogComment()
	{
		blogComment.setBlogCommentText("Good blog");
		blogComment.setCommentedBy("chandu");
		blogComment.setCommentedDate(new Date());
		blog = blogDao.getblogById(2);
		blogComment.setBlog(blog);
		
		Assert.assertEquals("Added", true, blogCommentDao.addBlogComment(blogComment));
	}
}