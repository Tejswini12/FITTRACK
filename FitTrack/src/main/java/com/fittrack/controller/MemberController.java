package com.fittrack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fittrack.dto.MemberDto;
import com.fittrack.dto.MemberFeedbackDto;
import com.fittrack.service.MemberFeedbackService;
import com.fittrack.service.MemberService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/member")
public class MemberController {
	
	@Autowired
	private MemberFeedbackService memberFeedbackService;
	
	@Autowired
	private MemberService memberService;
	
	
	@PostMapping("/addFeedback")
	public ResponseEntity<?> memberFeedBack(@RequestBody MemberFeedbackDto memberFeedbackDto){
		return ResponseEntity.status(HttpStatus.CREATED).body(memberFeedbackService.addFeedback(memberFeedbackDto));
	}
	
	@PostMapping("/addMember")
	public ResponseEntity<?> addNewMember(@RequestBody MemberDto memberDto ){
		return ResponseEntity.status(HttpStatus.CREATED).body(memberService.addNewMember(memberDto));
	}
	
	
}
