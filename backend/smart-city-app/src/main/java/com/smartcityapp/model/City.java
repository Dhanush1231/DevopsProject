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
@Table(name = "City")
public class City {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "City", nullable = false)
	private String name;
	@Column(name = "state")
	private String state;
	@Column(name = "district")
	private String district;
	@Column(name = "Country")
	private String country;
	@Column(name = "Population")
	private int population;

	@Column(name = "Pincode")
	private int pincode;

}
