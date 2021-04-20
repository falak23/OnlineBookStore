package com.demo.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entity.Login;
import com.demo.entity.User;

@Service
public class UserRepositoryImpl{

    @Autowired
    private UserRepository userDao;


    public void register(User user) {
        userDao.save(user);
    }

    public User validateUser(Login login) {
        User user = null;
        if (userDao.findById(login.getUsername()).isPresent()) {
            user = userDao.findById(login.getUsername()).get();
            if(!user.getPassword().equals(login.getPassword()))
                user=null;
        }
        return user;
    }

    public Boolean usernameExists(String username){
       return userDao.findById(username).isPresent();
    }

}