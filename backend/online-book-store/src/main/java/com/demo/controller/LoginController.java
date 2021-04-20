package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.db.UserRepositoryImpl;
import com.demo.entity.Login;
import com.demo.entity.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

	@Autowired
	private UserRepositoryImpl userDao;

	@RequestMapping("/login")
	public Login showLogin() {
		return new Login();
	}

	@PostMapping("/login")
	public User loginProcess(@RequestBody Login login, Model model) {
		User user = null;
		user = userDao.validateUser(login);
		if (user != null)
			user.setPassword(null);
		return user;
	}

}