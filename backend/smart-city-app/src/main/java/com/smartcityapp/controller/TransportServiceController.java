package com.smartcityapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcityapp.model.TransportService;
import com.smartcityapp.service.TransportServiceService;

@RestController
@RequestMapping("/api/transport")
public class TransportServiceController {

	@Autowired
	private TransportServiceService transportServiceService;

	// Endpoint to add a new transport service
	@PostMapping("/add")
	public ResponseEntity<TransportService> addTransportService(@RequestBody TransportService transportService) {
		TransportService createdService = transportServiceService.createTransportService(transportService);
		return ResponseEntity.ok(createdService);
	}

	// Endpoint to update an existing transport service
	@PutMapping("/update/{id}")
	public ResponseEntity<TransportService> updateTransportService(@PathVariable Long id,
			@RequestBody TransportService transportDetails) {
		if (transportServiceService.updateTransportService(id, transportDetails)) {
			return ResponseEntity.ok(transportDetails);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Endpoint to delete a transport service
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteTransportService(@PathVariable Long id) {
		if (transportServiceService.deleteTransportService(id)) {
			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
