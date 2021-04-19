package com.demo.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}