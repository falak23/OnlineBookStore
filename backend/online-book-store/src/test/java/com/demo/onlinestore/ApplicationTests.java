package com.demo.onlinestore;

import static org.junit.Assert.assertEquals;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.demo.db.UserRepository;
import com.demo.entity.User;
import com.demo.services.UserService;
@RunWith(SpringRunner.class)
@SpringBootTest
class ApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@MockBean
	private UserRepository userRepo;
	
	@Autowired
	UserService userSer;
	

	 @Test
	 public void getUsersTest() {
		 Mockito.when(userRepo.findAll()).thenReturn(Stream.of(new User("testuser", "testuser", "user"), new User("userdemo", "userdemo", "user")).collect(Collectors.toList()));
		 assertEquals(2, userSer.getUsers().size());
	 }

}
