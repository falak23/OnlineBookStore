//package com.demo.entity;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "cart")
//public class Cart {
//	@Id
//	@Column(name = "id")
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long book_id;
//	
//	@Column(name = "bookname")
//	private String book_name;
//	
//	@Column(name = "authorname")
//	private String author_name;
//	
//	@Column(name = "price")
//	private int price;
//	
//	@Column(name = "quantity")
//	private int quantity;
//
//	public Cart() {
//		super();
//	}	
//
//	public Cart(Long book_id, String book_name, String author_name, int price, int quantity) {
//		super();
//		this.book_id = book_id;
//		this.book_name = book_name;
//		this.author_name = author_name;
//		this.price = price;
//		this.quantity = quantity;
//	}
//
//
//
//	public Long getBook_id() {
//		return book_id;
//	}
//
//
//
//	public void setBook_id(Long book_id) {
//		this.book_id = book_id;
//	}
//
//
//
//	public String getBook_name() {
//		return book_name;
//	}
//
//
//
//	public void setBook_name(String book_name) {
//		this.book_name = book_name;
//	}
//
//
//
//	public String getAuthor_name() {
//		return author_name;
//	}
//
//
//
//	public void setAuthor_name(String author_name) {
//		this.author_name = author_name;
//	}
//
//
//
//	public int getPrice() {
//		return price;
//	}
//
//
//
//	public void setPrice(int price) {
//		this.price = price;
//	}
//
//
//
//	public int getQuantity() {
//		return quantity;
//	}
//
//
//
//	public void setQuantity(int quantity) {
//		this.quantity = quantity;
//	}
//
//
//
//	@Override
//	public String toString() {
//		return "Cart [book_id=" + book_id + ", book_name=" + book_name + ", author_name=" + author_name + ", price="
//				+ price + ", quantity=" + quantity + "]";
//	}
//	
//	
//}
