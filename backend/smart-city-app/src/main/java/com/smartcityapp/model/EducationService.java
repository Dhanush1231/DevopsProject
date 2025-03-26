package com.smartcityapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "education")
public class EducationService {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "Name")
	private String name;
	@Column(name = "city")
	private String city;
	@Column(name = "stream")
	private String stream;
	@Column(name = "location")
	private String location;
	@Column(name = "contact")
	private String contact;
}
