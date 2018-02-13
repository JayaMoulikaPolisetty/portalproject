package com.niit.portalmiddleware.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.niit.portalbackend.Job;
import com.niit.portalbackend.dao.JobDao;

@RestController
public class JobController {
	
	@Autowired
	JobDao jobDao;
	
	@PostMapping("/addJob")
	public ResponseEntity<?> addJob(@RequestBody Job job)
	{
		try {
			job.setPostedOn(new Date());
			
			jobDao.addJob(job);
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<Boolean>(false,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/jobsList")
	public ResponseEntity<?> jobsList()
	{
		try {
			List<Job> jobs = jobDao.allJobs();
			
			return new ResponseEntity<List<Job>>(jobs, HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<String>("error in getting jobs", HttpStatus.NOT_FOUND);
		}
	}
}
