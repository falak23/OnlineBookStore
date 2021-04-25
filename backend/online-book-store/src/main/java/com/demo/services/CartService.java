package com.demo.services;

import java.util.List;

import com.demo.db.CartRepository;
import com.demo.entity.Cart;

public class CartService {
	CartRepository cartRepository;
//	Book book;
//	Long id = book.id;
//	public Cart addToCart(id) {
//	        return cartRepository.save(book);
//	    }
	
	public List<Cart> getItems() {
		return (List<Cart>) cartRepository.findAll();
	}
}
