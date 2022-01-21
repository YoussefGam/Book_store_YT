package com.spring.ecommerce.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.util.Assert;
import com.spring.ecommerce.model.Book;
import com.spring.ecommerce.model.User;
import com.spring.ecommerce.repository.UserRepository;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class AuthController {


	@Autowired
	private UserRepository userRepository;
	
	
	@PostMapping("/register")
	public void RegisterUser(@RequestBody User user) throws IOException {
		user.setType("USER");
		user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		userRepository.save(user);
	}

	
	
	@GetMapping("/client")
	public String home() {
			return "This is client Page";
	}
	
	@GetMapping("/admin")
	public String admin() {
		return "This is admin Page";
	}
	
	}
