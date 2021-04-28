package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.db.UserRepository;
import com.demo.entity.User;
import com.demo.services.UserService;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {

	@Autowired
	private UserService userService;
	private UserRepository userRepository;

	@GetMapping("/get")
	public List<User> getUsers() {
		return userRepository.findAll();
	}
	
	@PostMapping("/register")
	public User addUser(@RequestBody User user) {
		System.out.println(user);
		userService.addUser(user);
		
		return user;
	}

}