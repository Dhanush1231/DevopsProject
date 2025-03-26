package com.smartcityapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartcityapp.model.City;
import com.smartcityapp.service.CityService;

@RestController
@RequestMapping("/api/cities")

public class CityController {

	@Autowired
	private CityService cityService;

	@PostMapping("/add") // http://localhost:8090/cityservice/add
	public ResponseEntity<String> createCity(@RequestBody City city) {
		cityService.createCity(city);
		return new ResponseEntity<String>("City Created Successfully", HttpStatus.CREATED);
	}

	@GetMapping("/get/{id}")
	public ResponseEntity<Object> getCity(@PathVariable Long id) {
		City city = cityService.getCityById(id);
		if (city != null) {
			return new ResponseEntity<>(city, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("City Not Found", HttpStatus.NOT_FOUND);
		}
	}

	// Update an existing City
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateCity(@PathVariable Long id, @RequestBody City city) {
		if (cityService.updateCity(id, city)) {
			return new ResponseEntity<>("City Updated Successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("City Not Found", HttpStatus.NOT_FOUND);
		}
	}

	// Delete a City by ID
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteCity(@PathVariable Long id) {
		if (cityService.deleteCity(id)) {
			return new ResponseEntity<>("City Deleted Successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("City Not Found", HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/all")
	public ResponseEntity<Object> getAllCities() {
		Iterable<City> cities = cityService.getAllCities();
		if (cities.iterator().hasNext()) {
			return new ResponseEntity<>(cities, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(new String("No Cities Found"), HttpStatus.NO_CONTENT);
		}
	}

	@GetMapping("/test")
	public ResponseEntity<String> testEndpoint() {
		return ResponseEntity.ok("Controller is working!");
	}

}
