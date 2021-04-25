package com.demo.entity;

import javax.persistence.*;

@Entity
@Table(name = "book")
public class Book {

	public Book() {
		super();
	}

	public Book(Long id, String name, int price, String author ,byte[] picByte) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.author = author;
		this.picByte = picByte;
	}


	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "author")
	private String author;
	
	@Column(name = "price")
	private int price;

	@Column(name = "picByte", length = 1000)
	private byte[] picByte;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return author;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}

	public byte[] getpicByte() {
		return picByte;
	}

	public void setpicByte(byte[] picByte) {
		this.picByte = picByte;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
}