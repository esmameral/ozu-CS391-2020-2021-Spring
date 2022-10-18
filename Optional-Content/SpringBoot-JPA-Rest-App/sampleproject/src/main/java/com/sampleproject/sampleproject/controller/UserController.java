package com.sampleproject.sampleproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sampleproject.sampleproject.model.User;
import com.sampleproject.sampleproject.model.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
   
	@Autowired
	UserService service;
	
	@GetMapping()
	public List<User> getUsers() {
		
		return service.getUsers();
	}
	
	@GetMapping("/{id}")
	public User getUsers(@PathVariable Long id) {
		
		return service.getUser(id);
	}
	
	@PostMapping()
	public User saveUser(@RequestBody User user) {
		
		return service.saveUser(user);
		
	}
	
}
