package com.fittrack.controller;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fittrack.dto.ApiResponse;
import com.fittrack.dto.SigninRequest;
import com.fittrack.dto.SigninResponse;
import com.fittrack.dto.UserDto;
import com.fittrack.pojos.User;
import com.fittrack.security.CustomUserDetails;
import com.fittrack.security.JwtUtils;
import com.fittrack.service.EmailService;
import com.fittrack.service.UserService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {

	 @Autowired
	    private EmailService emailService;

	@Autowired
	private UserService userService;
	@Autowired
	private JwtUtils utils;

	
	private AuthenticationManager mgr;
	
	@GetMapping
	public ResponseEntity<?> getAllUsers(){
		List<User> users=userService.getAllUser();
		if(users!=null) {
			return ResponseEntity.ok(users);
		}
		return  ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable Long id){
		try {
		return ResponseEntity.ok(userService.getUserById(id));
		}
		catch(RuntimeException e){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> addNewUser( @RequestBody UserDto user) {
		 emailService.sendRegistrationEmail(user.getEmail());
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addUser(user));
	}


	@PutMapping("/edit/{id}")
	public ResponseEntity<?> updateUserDetails(@RequestBody User user, @PathVariable Long id) {
		try {
		return ResponseEntity.ok(new ApiResponse(userService.updateUser(user, id)));
		}
		catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteUserDetails(@PathVariable Long id) {
		//System.out.println("in delete " + id);
		try {
			return ResponseEntity.ok(new ApiResponse(userService.deleteUser(id)));
		} catch (RuntimeException e) {
			// SC 404 , DTO - err mesg + time stamp
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	
//	@PostMapping("/signin")
//	public ResponseEntity<?> userSignin(@RequestBody AuthRequest authRequest ){
//		try {
//		return ResponseEntity.ok(userService.getUserByEmailAndPassword(authRequest.getEmail(), authRequest.getPassword()));
//		}
//		catch(RuntimeException e){
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
//		}
//	}
	
	
	@PostMapping("/signin")
	public ResponseEntity<?> signinUser(@RequestBody @Valid SigninRequest reqDTO) {
		System.out.println("in signin " + reqDTO);
		// simply invoke authentucate(...) on AuthMgr
		// i/p : Authentication => un verifed credentials
		// i/f --> Authentication --> imple by UsernamePasswordAuthToken
		// throws exc OR rets : verified credentials (UserDetails i.pl class: custom
		// user details)
		
		Authentication verifiedAuth = mgr
				.authenticate(new UsernamePasswordAuthenticationToken
						(reqDTO.getEmail(), reqDTO.getPassword()));
		System.out.println(verifiedAuth.getClass());// Custom user details
		CustomUserDetails userDetails = (CustomUserDetails) verifiedAuth.getPrincipal();
		
		// => auth success
		return ResponseEntity
			//	.ok(new SigninResponse(utils.generateJwtToken(verifiedAuth), "Successful Authentication!!!"));
				.ok(new SigninResponse(utils.generateJwtToken(verifiedAuth),"Successful Authentication!!!",userDetails.getUser().getUserType().name(),userDetails.getUser().getFirstName()));
	}
	
	@PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
        boolean emailSent = userService.requestPasswordReset(request.get("email"));
        if (emailSent) {
            return ResponseEntity.ok(Map.of("message", "Reset link sent to your email"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Email not found"));
        }
    }
	
	@PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String oldPassword = request.get("oldPassword");
        String newPassword = request.get("newPassword");

        boolean isReset = userService.resetPassword(email, oldPassword, newPassword);
        if (isReset) {
            return ResponseEntity.ok(Map.of("message", "Password updated successfully"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "Invalid old password or email"));
        }
    }
	
//	@GetMapping
//	public List<User> getAllUsers(){
//		
//		return userService.getAllUser();
//	}
//	
//	@GetMapping("/{id}")
//	public User getUserById(@PathVariable Long id) {
//		return userService.getUserById(id);
//	}
//	
//	@PostMapping
//	public String addNewUser( @RequestBody User user) {
//		return userService.addUser(user);
//	}
//	
//	@DeleteMapping("/{id}")
//	public String deleteUser(@PathVariable Long id) {
//		return userService.deleteUser(id);
//	}
//	
//	@PutMapping("/{id}")
//	public String updateUser(@RequestBody User user,@PathVariable Long id) {
//		return userService.updateUser(user, id);
//	}
}
