package com.smartcityapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartcityapp.model.EducationService;
import com.smartcityapp.repository.EducationServiceRepository;

@Service
public class EducationServiceService {

	@Autowired
	private EducationServiceRepository educationServiceRepository;

	// Create Education Service
	public void createEducationService(EducationService educationService) {
		educationServiceRepository.save(educationService);
	}

	// Get Education Service by ID
	public EducationService getEducationServiceById(Long id) {
		return educationServiceRepository.findById(id).orElse(null);
	}

	// Update Education Service
	public boolean updateEducationService(Long id, EducationService educationService) {
		if (educationServiceRepository.existsById(id)) {
			educationService.setId(id);
			educationServiceRepository.save(educationService);
			return true;
		}
		return false;
	}

	// Delete Education Service
	public boolean deleteEducationService(Long id) {
		if (educationServiceRepository.existsById(id)) {
			educationServiceRepository.deleteById(id);
			return true;
		}
		return false;
	}

	public List<EducationService> getEducationServicesByName(String name) {
		return educationServiceRepository.findByNameContainingIgnoreCase(name);
	}
}
