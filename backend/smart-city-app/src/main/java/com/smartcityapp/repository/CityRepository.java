package com.smartcityapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartcityapp.model.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

}
