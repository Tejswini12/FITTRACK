package com.fittrack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fittrack.pojos.GymPackage;

public interface GymPackageDao extends JpaRepository<GymPackage, Long> {

}
