package com.niit.portalbackend;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class BlogComment {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int blogCommentId;
	private String blogCommentText;
	
	private String commentedBy;
	private Date commentedDate;
	
	@ManyToOne
	private Blog blog;

	
	public int getBlogCommentId() {
		return blogCommentId;
	}

	public void setBlogCommentId(int blogCommentId) {
		this.blogCommentId = blogCommentId;
	}

	public String getBlogCommentText() {
		return blogCommentText;
	}

	public void setBlogCommentText(String blogCommentText) {
		this.blogCommentText = blogCommentText;
	}

	public String getCommentedBy() {
		return commentedBy;
	}

	public void setCommentedBy(String commentedBy) {
		this.commentedBy = commentedBy;
	}

	public Date getCommentedDate() {
		return commentedDate;
	}

	public void setCommentedDate(Date commentedDate) {
		this.commentedDate = commentedDate;
	}

	public Blog getBlog() {
		return blog;
	}

	public void setBlog(Blog blog) {
		this.blog = blog;
	}
	
	
}
