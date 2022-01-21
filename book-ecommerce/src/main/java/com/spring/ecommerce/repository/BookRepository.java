package com.spring.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.ecommerce.model.Book;


@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
