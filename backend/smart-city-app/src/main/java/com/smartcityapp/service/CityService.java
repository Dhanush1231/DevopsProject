package com.smartcityapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartcityapp.model.City;
import com.smartcityapp.repository.CityRepository;

@Service
public class CityService {

	@Autowired
	private CityRepository cityRepository;

	public City createCity(City city) {
		return cityRepository.save(city);
	}

	public City getCityById(Long id) {
		return cityRepository.findById(id).orElse(null);
	}

	public boolean updateCity(Long id, City city) {
		if (cityRepository.existsById(id)) {
			city.setId(id);
			cityRepository.save(city);
			return true;
		}
		return false;
	}

	public boolean deleteCity(Long id) {
		if (cityRepository.existsById(id)) {
			cityRepository.deleteById(id);
			return true;
		}
		return false;
	}

	public Iterable<City> getAllCities() {
		return cityRepository.findAll();
	}
}
