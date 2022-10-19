package com.sampleproject.sampleproject.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.sampleproject.sampleproject.model.User;
import com.sampleproject.sampleproject.model.repos.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository repo;

	public List<User> getUsers() {
		return repo.findAll();

	}

	public User saveUser(User user) {
		return repo.save(user);

	}
	
	
	public User getUser(Long id) {
		
		return repo.findById(id).get();
	}
	
}
