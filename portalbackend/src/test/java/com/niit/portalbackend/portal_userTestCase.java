package com.niit.portalbackend;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.portalbackend.dao.PortalUserDao;

import java.util.List;

import org.junit.Assert;

public class portal_userTestCase {

	AnnotationConfigApplicationContext context;
	PortalUserDao portalUserDao;
	portal_user user;

	@Before
	public void init() {
		context = new AnnotationConfigApplicationContext();
		context.scan("com.niit");
		context.refresh();
		portalUserDao = (PortalUserDao) context.getBean("portalUserDao");
		user = new portal_user();
	}
	/*
	 * @Test public void test() { user.setUsername("1234");
	 * user.setFirstname("Mouli"); user.setLastname("Polise");
	 * user.setPassword("mou"); user.setEmail("mou@gmail.com");
	 * user.setMobile("12345"); user.setUser_role("employee"); user.setStatus(0);
	 * 
	 * Assert.assertEquals("user added successfully", true,
	 * portalUserDao.addPortalUser(user)); }
	 */
	/*
	 * @Test public void delTest() {
	 * 
	 * user.setUsername("1234");
	 * 
	 * Assert.assertEquals("user deleted", true,
	 * portalUserDao.deletePortalUser(user)); }
	 */

	/*
	 * @Test public void updateTest() { user =
	 * portalUserDao.getUserByUsername("mouli123"); user.setFirstname("Mahesh");
	 * user.setLastname("ravva"); user.setEmail("mahesh@gmail.com");
	 * 
	 * Assert.assertEquals("user updated", true,
	 * portalUserDao.updatePortalUser(user)); }
	 */

	@Test
	public void getTest() {
		List<portal_user> users = portalUserDao.getAllUsers();
		for (int i = 0; i < users.size(); i++) {
			portal_user user = users.get(i);
			System.out.println(user.getFirstname() + "   " + user.getLastname() + "  " + user.getMobile() + "  "
					+ user.getUser_role());
		}
	}

}
