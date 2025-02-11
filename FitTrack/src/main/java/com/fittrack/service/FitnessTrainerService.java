package com.fittrack.service;

import java.util.List;

import com.fittrack.dto.FitnessTrainerDto;
import com.fittrack.pojos.FitnessTrainer;

public interface FitnessTrainerService {

	FitnessTrainerDto addNewTrainer(FitnessTrainerDto fitnessTrainer);
	List<FitnessTrainer> getAllTrainer();
	String updateTrainer(FitnessTrainer trainer, Long id);
	String deleteTrainer(Long id);
	FitnessTrainerDto getTrainerById(Long id);
}
