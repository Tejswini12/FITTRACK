package com.fittrack.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fittrack.custom_exception.ResourceNotFoundException;
import com.fittrack.custom_exception.UserNotFoundException;
import com.fittrack.dto.FitnessTrainerDto;
import com.fittrack.dto.UserDto;
import com.fittrack.pojos.FitnessTrainer;
import com.fittrack.pojos.User;
import com.fittrack.repository.FitnessTrainerDao;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class FitnessTrainerServiceImpl implements FitnessTrainerService {

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private FitnessTrainerDao fitnessTrainerDao;

	@Override
	public FitnessTrainerDto addNewTrainer(FitnessTrainerDto fitnessTrainer) {
		
		FitnessTrainer trainer=mapper.map(fitnessTrainer, FitnessTrainer.class);
		trainer.setCreatedOn(LocalDate.now());
		fitnessTrainerDao.save(trainer);
		
		return mapper.map(trainer, FitnessTrainerDto.class);
	}

	@Override
	public List<FitnessTrainer> getAllTrainer() {
		// TODO Auto-generated method stub
		return fitnessTrainerDao.findAll();
	}

	@Override
	public String updateTrainer(FitnessTrainer trainer, Long id) {
		if(fitnessTrainerDao.existsById(id)) {
		fitnessTrainerDao.save(trainer);
		return "Updated Successfully";
		}
		throw new ResourceNotFoundException("Not found");
	}

	@Override
	public String deleteTrainer(Long id) {
		if(fitnessTrainerDao.existsById(id)) {
			fitnessTrainerDao.deleteById(id);
			return "Deleted Successfully";
		}
		throw new ResourceNotFoundException("Not found");
	}

	


	@Override
	public FitnessTrainerDto getTrainerById(Long id) {
		// TODO Auto-generated method stub
		FitnessTrainer trainer=fitnessTrainerDao.findById(id).orElseThrow(()->new UserNotFoundException("Invalid User"));
		return mapper.map(trainer, FitnessTrainerDto.class);
	}
	
	
	
	
}
