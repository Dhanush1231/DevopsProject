package com.smartcityapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartcityapp.model.TransportService;
import com.smartcityapp.repository.TransportServiceRepository;

@Service
public class TransportServiceService {

	@Autowired
	private TransportServiceRepository transportServiceRepository;

	// Create Transport Service
	public TransportService createTransportService(TransportService transportService) {
		return transportServiceRepository.save(transportService);
	}

	// Get Transport Service by ID
	public TransportService getTransportServiceById(Long id) {
		return transportServiceRepository.findById(id).orElse(null);
	}

	// Update Transport Service
	public boolean updateTransportService(Long id, TransportService transportService) {
		if (transportServiceRepository.existsById(id)) {
			transportService.setId(id);
			transportServiceRepository.save(transportService);
			return true;
		}
		return false;
	}

	// Delete Transport Service
	public boolean deleteTransportService(Long id) {
		if (transportServiceRepository.existsById(id)) {
			transportServiceRepository.deleteById(id);
			return true;
		}
		return false;
	}

}
