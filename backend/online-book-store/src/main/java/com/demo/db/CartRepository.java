package com.demo.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long>{

}
