package com.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	private String username;
	private String password;
	private boolean role;

	public User() {

	}

	public User(String username, String password, boolean role) {
		this.username = username;
		this.password = password;
		this.role = role;
	}

	public boolean isAdmin() {
		return role;
	}

	public void setMerchant(boolean role) {
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		System.out.println("username: " + username);
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User{" + "username='" + username + '\'' + ", password='" + password + '\'' + ",  admin=" + role + '}';
	}
}