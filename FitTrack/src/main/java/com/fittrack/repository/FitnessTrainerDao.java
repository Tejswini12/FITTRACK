package com.fittrack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fittrack.pojos.FitnessTrainer;

public interface FitnessTrainerDao extends JpaRepository<FitnessTrainer, Long> {

}
