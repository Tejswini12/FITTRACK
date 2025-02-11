package com.fittrack.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fittrack.custom_exception.UserNotFoundException;
import com.fittrack.dto.UserDto;
import com.fittrack.pojos.User;
import com.fittrack.repository.UserDao;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
    @Autowired
    private JavaMailSender mailSender;
	
	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public UserDto addUser(UserDto user) {
		
		 User u= modelMapper.map(user, User.class);
		 u.setPassword(encoder.encode(u.getPassword()));
	return modelMapper.map(userDao.save(u), UserDto.class);
//		UserEntity user=mapper.map(reqDTO, UserEntity.class);
//		user.setPassword(encoder.encode(user.getPassword()));//pwd : encrypted using SHA
//		return mapper.map(userDao.save(user), Signup.class)
	}

	@Override
	public List<User> getAllUser() {
		List<User> users=userDao.findAll();
		return users;
	}

	@Override
	public String deleteUser(Long id) {
		if(userDao.existsById(id)) {
			userDao.deleteById(id);
			return "Deleted Succesfully";
		}
		throw new UserNotFoundException("Not found User with this id");
	}

	@Override
	public String updateUser(User user, Long id) {
		if(userDao.existsById(id)) {
			User userData=userDao.save(user);
			return "Updated Successfully";
		}
		throw new UserNotFoundException("Not found User with this id");
	}

	@Override
	public UserDto getUserById(Long id) {
		
//		Category entity = categoryDao.findById(categoryId)
//				.orElseThrow(() -> new ResourceNotFoundException("Invalid Category Id !!!!"));
//				return mapper.map(entity, CategoryDTO.class);
			User user=userDao.findById(id).orElseThrow(()->new UserNotFoundException("Invalid Id"));
			return modelMapper.map(user, UserDto.class);
	}

	@Override
	public UserDto getUserByEmailAndPassword(String email, String password) {
		User user=userDao.getByEmailAndPassword(email, password).orElseThrow(()->new UserNotFoundException("Invalid User"));
		
		return modelMapper.map(user, UserDto.class);
	}

	




    private String generateResetToken() {
        return UUID.randomUUID().toString();
    }

    public void sendResetEmail(String email, String resetToken) {
        String resetLink = "http://localhost:3000/reset-password?token=" + resetToken;
        String message = "Click the link to reset your password: " + resetLink;

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(email);
        mailMessage.setSubject("Password Reset");
        mailMessage.setText(message);
        mailSender.send(mailMessage);
    }

    public boolean requestPasswordReset(String email) {
        Optional<User> userOpt = userDao.findByEmail(email);
        if (userOpt.isPresent()) {
            String resetToken = generateResetToken();
            sendResetEmail(email, resetToken);
            return true;
        }
        return false;
    }
    public boolean resetPassword(String email, String oldPassword, String newPassword) {
        Optional<User> userOpt = userDao.findByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();

            // Check if the old password matches
            if (!encoder.matches(oldPassword, user.getPassword())) {
                return false; // Old password does not match
            }

            // Update password
            user.setPassword(encoder.encode(newPassword));
            userDao.save(user);
            return true;
        }
        return false; // User not found
    }
}
	
	


