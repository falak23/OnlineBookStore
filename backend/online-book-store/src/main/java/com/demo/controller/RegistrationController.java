package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.db.UserRepositoryImpl;
import com.demo.entity.User;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class RegistrationController {

	@Autowired
	private UserRepositoryImpl userDao;

	@RequestMapping("/api/register")
	public User showRegister() {
		return new User();
	}

	@PostMapping("/register")
	public User addUser(@RequestBody User user, Model model) {
		System.out.println(user.toString());
		System.out.println(model.toString());
		userDao.register(user);
		return user;
	}

	@PostMapping("/checkUserName")
	public boolean checkAvailability(@RequestBody String username, Model model) {
		return userDao.usernameExists(username);
	}
}