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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.smartcityapp.model.EducationService;
import com.smartcityapp.service.EducationServiceService;

@RestController
@RequestMapping("/api/education")
public class EducationServiceController {

	@Autowired
	private EducationServiceService educationServiceService;

	// Create Education Service
	@PostMapping
	public @ResponseBody ResponseEntity<String> createEducationService(@RequestBody EducationService educationService) {
		educationServiceService.createEducationService(educationService);
		return ResponseEntity.ok("Education Service created successfully");
	}

	// Get Education Service by ID
	@GetMapping("/{id}")
	public @ResponseBody ResponseEntity<EducationService> getEducationServiceById(@PathVariable Long id) {
		EducationService service = educationServiceService.getEducationServiceById(id);
		if (service != null) {
			return ResponseEntity.ok(service);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Update Education Service
	@PutMapping("/{id}")
	public @ResponseBody ResponseEntity<String> updateEducationService(@PathVariable Long id,
			@RequestBody EducationService educationService) {
		boolean updated = educationServiceService.updateEducationService(id, educationService);
		if (updated) {
			return ResponseEntity.ok("Education Service updated successfully");
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Delete Education Service
	@DeleteMapping("/{id}")
	public @ResponseBody ResponseEntity<String> deleteEducationService(@PathVariable Long id) {
		boolean deleted = educationServiceService.deleteEducationService(id);
		if (deleted) {
			return ResponseEntity.ok("Education Service deleted successfully");
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/search")
	public ResponseEntity<List<EducationService>> getEducationServicesByName(@RequestParam String name) {
		List<EducationService> services = educationServiceService.getEducationServicesByName(name);
		return ResponseEntity.ok(services);
	}
}
