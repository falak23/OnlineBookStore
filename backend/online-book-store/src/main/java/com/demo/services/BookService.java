package com.demo.services;

import java.util.List;
import java.util.Optional;

import com.demo.db.BookRepository;
import com.demo.entity.Book;

public class BookService {

	BookRepository bookRepository;
	public Book addBook(Book book) {
	        return bookRepository.save(book);
	    }
	
	public Book getUserbyUsername(String name) {
		Optional<Book> optional = bookRepository.findByName(name);
		Book user = optional.orElse(null);
		return user;
	}
	
	public List<Book> getBooks() {
		return (List<Book>) bookRepository.findAll();
	}

}
