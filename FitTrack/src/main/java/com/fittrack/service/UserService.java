package com.fittrack.service;

import java.util.List;

import com.fittrack.dto.UserDto;
import com.fittrack.pojos.User;

public interface UserService {

	UserDto addUser(UserDto user);
	List<User> getAllUser();
	String deleteUser(Long id);
	String updateUser(User user,Long id);
	UserDto getUserById(Long id);
	UserDto getUserByEmailAndPassword(String email,String password);
	boolean requestPasswordReset(String email);
	void sendResetEmail(String email, String resetToken);
	boolean resetPassword(String email, String oldPassword, String newPassword);
	
	
}

