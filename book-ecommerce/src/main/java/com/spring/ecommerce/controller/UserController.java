package com.spring.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.spring.ecommerce.repository.*;
import com.spring.ecommerce.model.*;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "users")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	

	
	@GetMapping("/get")
	public List<User> getUsers() {
		return userRepository.findAll();
	}
	
	@PostMapping("/add")
	public void createUser(@RequestBody User user) {
		user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
		userRepository.save(user);
	}
	
	@DeleteMapping(path = { "/{id}" })
	public User deleteUser(@PathVariable("id") Long id) {
		User user = userRepository.getOne(id);
		userRepository.deleteById(id);
		return user;
	}

}
