//package com.demo.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.demo.db.CartRepository;
//import com.demo.entity.Cart;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping(path = "cart")
//public class CartController {
//	@Autowired
//	private CartRepository cartRepository;
//	
//	
//	@GetMapping("/get")
//	public List<Cart> getCartItems() {
//		return cartRepository.findAll();
//	}
//
//}
