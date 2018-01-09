package com.niit.portalmiddleware.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.niit.portalbackend.portal_user;
import com.niit.portalbackend.dao.PortalUserDao;

@RestController
public class HomeController {
	
	@GetMapping("/")
	public String index()
	{
		return "index";
	}
	@Autowired
	PortalUserDao portalUserDao;

	@PostMapping("/registeruser")
	public ResponseEntity<?> registeruser(@RequestBody portal_user user)
	{
		try {
			portalUserDao.addPortalUser(user);
		}catch(Exception e)
		{
			return new ResponseEntity<String>("User creation error", HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<portal_user>(user, HttpStatus.CREATED); 
	}
	

	@PostMapping("/authenticate")
	public ResponseEntity<?> login(@RequestBody portal_user user)
	{
		try {
			user=portalUserDao.getCredentials(user);
			user.setStatus(true);
			portalUserDao.updatePortalUser(user);
			
		}catch(Exception e)
		{
			return new ResponseEntity<String>("User login fails", HttpStatus.UNAUTHORIZED);
		}
		return new ResponseEntity<portal_user>(user,HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/editProfile")
	public ResponseEntity<?> editProfile(@RequestBody portal_user user)
	{
		try {
			portalUserDao.updatePortalUser(user);
		}catch(Exception e)
		{
			return new ResponseEntity<String>("user updation failed", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<portal_user>(user,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/logout")
	public ResponseEntity<?> logout(@RequestParam("username") String username)
	{
		try {
			portal_user user= portalUserDao.getUserByUsername(username);
			user.setStatus(false);
			portalUserDao.updatePortalUser(user);
			
		}catch(Exception e)
		{
			return new ResponseEntity<Boolean>(false, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
	

}
