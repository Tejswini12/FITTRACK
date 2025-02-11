package com.fittrack.service;

import java.util.List;

import com.fittrack.dto.GymPackageDto;
import com.fittrack.pojos.GymPackage;

public interface GymPackageService {

	GymPackageDto addPackage(GymPackageDto pkg);
	String updatePackage(GymPackageDto pkg,Long id);
	GymPackageDto getPackageById(Long id);
	List<GymPackage>  getAllPackages();
	String deletePackage(Long id);
}
