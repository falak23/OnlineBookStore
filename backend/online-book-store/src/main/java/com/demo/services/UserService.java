package com.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.db.UserRepository;
import com.demo.entity.User;


@Service

public class UserService {
@Autowired
UserRepository userRepository;
	public User addUser(User user) {
	        return userRepository.save(user);
	    }
	
	public User getUserbyUsername(String username) {
		Optional<User> optional = userRepository.findUserByUsername(username);
		User user = optional.orElse(null);
		return user;
	}
	
	
	public List<User> getUsers() {
		return (List<User>) userRepository.findAll();
	}
	
	public int getUserLogin(String received_username,String received_password) {
		User user = getUserbyUsername(received_username);
		int message;
		if(received_username==null||received_password==null) {
			message=5;
		}
		
		if(user==null) {
			
			 message=1;
			System.out.println("You do not have an account");
		}
		else {
			
			if(user.getPassword().equals(received_password)) {
				message=2;
				System.out.println("Login Successful");
				}
			else {
				System.out.println("Wrong Password");
				 message=3;
			}
		}
		return message;
		
	}

}
