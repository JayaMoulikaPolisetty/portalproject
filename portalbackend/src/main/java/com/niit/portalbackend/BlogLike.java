package com.niit.portalbackend;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BlogLike {
	
	
	private String username;
	
	@Id
	private int blogId;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getBlogId() {
		return blogId;
	}

	public void setBlogId(int blogId) {
		this.blogId = blogId;
	}

	
	
}
