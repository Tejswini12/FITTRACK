package com.fittrack.service;

import java.util.List;

import com.fittrack.dto.MemberFeedbackDto;
import com.fittrack.pojos.MemberFeedback;

public interface MemberFeedbackService {
	
	MemberFeedbackDto addFeedback(MemberFeedbackDto memberFeedbackDto);
	List<MemberFeedback> getAllFeedbacks();

}
