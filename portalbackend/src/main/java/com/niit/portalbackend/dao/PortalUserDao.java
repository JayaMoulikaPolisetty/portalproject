package com.niit.portalbackend.dao;

import java.util.List;

import org.springframework.stereotype.Component;

import com.niit.portalbackend.portal_user;

@Component
public interface PortalUserDao {
	
	boolean addPortalUser(portal_user user);
	
	boolean deletePortalUser(portal_user user);
	
	boolean updatePortalUser(portal_user user);
	
	portal_user getUserByUsername(String username);
	
	portal_user getCredentials(portal_user user);
	
	List<portal_user> getAllUsers();

}
