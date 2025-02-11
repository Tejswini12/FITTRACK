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
import com.fittrack.dto.FitnessTrainerDto;
import com.fittrack.pojos.FitnessTrainer;
import com.fittrack.pojos.MemberFeedback;
import com.fittrack.pojos.User;
import com.fittrack.service.FitnessTrainerService;
import com.fittrack.service.MemberFeedbackService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private MemberFeedbackService memberFeedbackService;
	
	@Autowired
	private FitnessTrainerService fitnessTrainerService;
	
	@GetMapping("/allfeedbacks")
	public ResponseEntity<?> getAllFeedbacks(){
		List<MemberFeedback> feedbacks=memberFeedbackService.getAllFeedbacks();
		if(feedbacks!=null) {
			return ResponseEntity.ok(feedbacks);
		}
		return  ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	
	@GetMapping("/alltrainers")
	public ResponseEntity<?> getAllTrainers(){
		List<FitnessTrainer> trainers=fitnessTrainerService.getAllTrainer();
		if(trainers!=null) {
			return ResponseEntity.ok(trainers);
		}
		return  ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@PostMapping("/addtrainer")
	public ResponseEntity<?> addNewTrainer(@RequestBody @Valid FitnessTrainerDto dto) {
		//TODO: process POST request
		
		return ResponseEntity.status(HttpStatus.CREATED).body(fitnessTrainerService.addNewTrainer(dto));
	}
	
	@PutMapping("/updateTrainer/{id}")
	public ResponseEntity<?> updateUserDetails(@RequestBody FitnessTrainer trainer, @PathVariable Long id) {
		try {
		return ResponseEntity.ok(new ApiResponse(fitnessTrainerService.updateTrainer(trainer, id)));
		}
		catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteUserDetails(@PathVariable Long id) {
		//System.out.println("in delete " + id);
		try {
			return ResponseEntity.ok(new ApiResponse(fitnessTrainerService.deleteTrainer(id)));
		} catch (RuntimeException e) {
			// SC 404 , DTO - err mesg + time stamp
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	@GetMapping("/gettrainer/{id}")
	public ResponseEntity<?> getTrainerById(@PathVariable Long id){
		try {
		return ResponseEntity.ok(fitnessTrainerService.getTrainerById(id));
		}
		catch(RuntimeException e){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
	
	
}

