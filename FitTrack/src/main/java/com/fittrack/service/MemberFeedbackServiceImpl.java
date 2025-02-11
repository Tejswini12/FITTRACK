package com.fittrack.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fittrack.dto.MemberFeedbackDto;
import com.fittrack.pojos.MemberFeedback;
import com.fittrack.repository.MemberFeedbackDao;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class MemberFeedbackServiceImpl implements MemberFeedbackService {

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private MemberFeedbackDao memberFeedbackDao;
	
	@Override
	public MemberFeedbackDto addFeedback(MemberFeedbackDto memberFeedbackDto) {
		MemberFeedback feedback=mapper.map(memberFeedbackDto, MemberFeedback.class);
		memberFeedbackDao.save(feedback);
		return mapper.map(feedback, MemberFeedbackDto.class);
	}

	@Override
	public List<MemberFeedback> getAllFeedbacks() {
		
		return memberFeedbackDao.findAll();
	}
	
	

}
