package com.demo.db;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.entity.User;

public interface UserRepository extends JpaRepository<User, String> {
	Optional<User> findUserByUsername(String username);
}