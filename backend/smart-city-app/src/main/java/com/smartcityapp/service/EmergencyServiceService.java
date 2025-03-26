package com.smartcityapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartcityapp.model.EmergencyService;
import com.smartcityapp.repository.EmergencyServiceRepository;

@Service
public class EmergencyServiceService {

	@Autowired
	private EmergencyServiceRepository emergencyServiceRepository;

	// Create Emergency Service
	public void createEmergencyService(EmergencyService emergencyService) {
		emergencyServiceRepository.save(emergencyService);
	}

	// Get Emergency Service by ID
	public EmergencyService getEmergencyServiceById(Long id) {
		return emergencyServiceRepository.findById(id).orElse(null);
	}

	// Update Emergency Service
	public boolean updateEmergencyService(Long id, EmergencyService emergencyService) {
		if (emergencyServiceRepository.existsById(id)) {
			emergencyService.setId(id);
			emergencyServiceRepository.save(emergencyService);
			return true;
		}
		return false;
	}

	// Delete Emergency Service
	public boolean deleteEmergencyService(Long id) {
		if (emergencyServiceRepository.existsById(id)) {
			emergencyServiceRepository.deleteById(id);
			return true;
		}
		return false;
	}

	public List<EmergencyService> findByEmeType(String emeType) {
		return emergencyServiceRepository.findByEmeType(emeType);
	}
}
