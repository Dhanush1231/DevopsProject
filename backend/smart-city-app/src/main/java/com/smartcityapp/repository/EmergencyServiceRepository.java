package com.smartcityapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartcityapp.model.EmergencyService;

@Repository
public interface EmergencyServiceRepository extends JpaRepository<EmergencyService, Long> {
	List<EmergencyService> findByEmeType(String emeType);
}
