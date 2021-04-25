package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.User;
import com.demo.services.UserService;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {

	@Autowired
	UserService userService;


	@PostMapping("/register")
	public User addUser(@RequestBody User user) {
		System.out.println(user);
		userService.addUser(user);
		
		return user;
	}

	//@PostMapping("/checkUserName")
//	public boolean checkAvailability(@RequestBody String username, Model model) {
	//	return userDao.usernameExists(username);
//	}
}