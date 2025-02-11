package com.fittrack.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fittrack.pojos.User;

public interface UserDao extends JpaRepository<User, Long> {
	Optional<User>  findByEmail(String email);
	Optional<User> getByEmailAndPassword(String email,String password);
}
