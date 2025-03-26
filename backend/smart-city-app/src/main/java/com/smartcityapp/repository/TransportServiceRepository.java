package com.smartcityapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartcityapp.model.TransportService;

@Repository
public interface TransportServiceRepository extends JpaRepository<TransportService, Long> {
}
