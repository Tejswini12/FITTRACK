package com.fittrack.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fittrack.custom_exception.ResourceNotFoundException;
import com.fittrack.dto.GymPackageDto;
import com.fittrack.pojos.GymPackage;
import com.fittrack.repository.GymPackageDao;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class GymPackageServiceImpl implements GymPackageService {

	@Autowired
	private GymPackageDao gymPackageDao;
	
	@Autowired
	private ModelMapper mapper;
	@Override
	public GymPackageDto addPackage(GymPackageDto pkg) {
		GymPackage gympkg=mapper.map(pkg, GymPackage.class);
		gymPackageDao.save(gympkg);
		return mapper.map(gympkg, GymPackageDto.class);
	}
	@Override
	public String updatePackage(GymPackageDto pkg,Long id) {
		if(gymPackageDao.existsById(id)) {
			GymPackage gymPackage=mapper.map(pkg, GymPackage.class);
		GymPackage gympkg=gymPackageDao.save(gymPackage);
			return "Updated Successfully";
		}
		throw new ResourceNotFoundException("No Package found with this Id");
	}
	@Override
	public GymPackageDto getPackageById(Long id) {
		GymPackage gymPackage=gymPackageDao.findById(id).orElseThrow(()->new ResourceNotFoundException("No such Package found"));
		return mapper.map(gymPackage, GymPackageDto.class);
	}
	@Override
	public List<GymPackage> getAllPackages(){// TODO Auto-generated method stub
		return gymPackageDao.findAll();
	}
	@Override
	public String deletePackage(Long id) {
		if(gymPackageDao.existsById(id)) {
			gymPackageDao.deleteById(id);
			return "Package Deleted Successfully";
		}
		throw new ResourceNotFoundException("No such package found with this id");
	}
	
	
	
}
