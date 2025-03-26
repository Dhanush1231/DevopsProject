package com.smartcityapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartcityapp.model.EducationService;

@Repository
public interface EducationServiceRepository extends JpaRepository<EducationService, Long> {
	List<EducationService> findByNameContainingIgnoreCase(String name);
}
