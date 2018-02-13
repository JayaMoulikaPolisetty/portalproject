package com.niit.portalbackend.dao;

import java.util.List;

import com.niit.portalbackend.Job;

public interface JobDao {
	
	boolean addJob(Job job);
	
	boolean deleteJob(Job job);
	
	boolean updateJob(Job job);
	
	Job getJobById(int id);
	
	List<Job> allJobs();

}
