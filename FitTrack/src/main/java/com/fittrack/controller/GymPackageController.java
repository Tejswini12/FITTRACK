package com.fittrack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.fittrack.dto.GymPackageDto;
import com.fittrack.dto.UserDto;
import com.fittrack.pojos.GymPackage;
import com.fittrack.pojos.User;
import com.fittrack.service.GymPackageService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/gympackages")
public class GymPackageController {

	
	@Autowired
	private GymPackageService gymPackageService;
	
	
	@GetMapping("/getPackages")
	public ResponseEntity<?> getAllPackages(){
		List<GymPackage> pkgs=gymPackageService.getAllPackages();
		if(pkgs!=null) {
			return ResponseEntity.ok(pkgs);
		}
		return  ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@GetMapping("/getpackages/{id}")
	public ResponseEntity<?> getPackageById(@PathVariable Long id){
		try {
		return ResponseEntity.ok(gymPackageService.getPackageById(id));
		}
		catch(RuntimeException e){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addNewPackage( @RequestBody GymPackageDto gymPackage) {
		return ResponseEntity.status(HttpStatus.CREATED).body(gymPackageService.addPackage(gymPackage));
	}
	
	@PutMapping("/edit/{id}")
	public ResponseEntity<?> updateUserDetails(@RequestBody GymPackageDto gymPackage, @PathVariable Long id) {
		try {
		return ResponseEntity.ok(new ApiResponse(gymPackageService.updatePackage(gymPackage, id)));
		}
		catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
		
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePackageDetails(@PathVariable Long id) {
		//System.out.println("in delete " + id);
		try {
			return ResponseEntity.ok(new ApiResponse(gymPackageService.deletePackage(id)));
		} catch (RuntimeException e) {
			// SC 404 , DTO - err mesg + time stamp
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	
	
}
