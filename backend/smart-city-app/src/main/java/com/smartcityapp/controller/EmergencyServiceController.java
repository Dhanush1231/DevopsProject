package com.smartcityapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.smartcityapp.model.EmergencyService;
import com.smartcityapp.service.EmergencyServiceService;

@RestController
@RequestMapping("/api/emergency")

public class EmergencyServiceController {

	@Autowired
	private EmergencyServiceService emergencyServiceService;

	// Create Emergency Service
	@PostMapping("/add")
	public @ResponseBody ResponseEntity<String> createEmergencyService(@RequestBody EmergencyService emergencyService) {
		emergencyServiceService.createEmergencyService(emergencyService);
		return ResponseEntity.ok("Emergency Service created successfully");
	}

	// Get Emergency Service by ID
	@GetMapping("/{id}")
	public @ResponseBody ResponseEntity<EmergencyService> getEmergencyServiceById(@PathVariable Long id) {
		EmergencyService service = emergencyServiceService.getEmergencyServiceById(id);
		if (service != null) {
			return ResponseEntity.ok(service);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Update Emergency Service
	@PutMapping("/{id}")
	public @ResponseBody ResponseEntity<String> updateEmergencyService(@PathVariable Long id,
			@RequestBody EmergencyService emergencyService) {
		boolean updated = emergencyServiceService.updateEmergencyService(id, emergencyService);
		if (updated) {
			return ResponseEntity.ok("Emergency Service updated successfully");
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Delete Emergency Service
	@DeleteMapping("/{id}")
	public @ResponseBody ResponseEntity<String> deleteEmergencyService(@PathVariable Long id) {
		boolean deleted = emergencyServiceService.deleteEmergencyService(id);
		if (deleted) {
			return ResponseEntity.ok("Emergency Service deleted successfully");
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/{emeType}")
	public List<EmergencyService> getEmergencyServicesByType(@PathVariable String emeType) {
		return emergencyServiceService.findByEmeType(emeType);
	}
}
