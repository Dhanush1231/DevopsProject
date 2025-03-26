package com.smartcityapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartcityapp.model.User;
import com.smartcityapp.repository.UserRepository;

import jakarta.validation.Valid;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	// Fetch all users
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	// Fetch a user by ID
	public User getUserById(long id) {
		return userRepository.findById(id).orElse(null);
	}

	// Add a new user
	public User addUser(User user) {
		return userRepository.save(user);
	}

	// Update user details
	public User updateUser(long id, User userDetails) {
		Optional<User> userOptional = userRepository.findById(id);
		if (userOptional.isPresent()) {
			User user = userOptional.get();
			user.setName(userDetails.getName());
			user.setEmail(userDetails.getEmail());
			user.setMobile(userDetails.getMobile());
			user.setPassword(userDetails.getPassword()); // Update password if applicable
			return userRepository.save(user);
		}
		return null;
	}

	// Delete a user by ID
	public void deleteUser(long id) {
		userRepository.deleteById(id);
	}

	// Authenticate user by email and password
	public Optional<User> authenticateUser(String email, String password) {
		return userRepository.findByEmailAndPassword(email, password);
	}

	// Register a new user
	public String registerUser(@Valid User user) {
		if (userExists(user)) {
			return "User already exists!";
		}
		userRepository.save(user);
		return "Registration successful!";
	}

	// Check if a user already exists (by email or mobile)
	public boolean userExists(@Valid User user) {
		return userRepository.existsByEmailOrMobile(user.getEmail(), user.getMobile());
	}
}
