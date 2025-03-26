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
@Table(name = "transport")
public class TransportService {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "vechileType")
	private String vehicleType; // "Bus", "Metro", "Taxi"
	@Column(name = "Route")
	private String route;
	@Column(name = "Schedule")
	private String schedule;
	@Column(name = "`to`")
	private String to;
	@Column(name = "`from`")
	private String from;
	@Column(name = "Charges")
	private double cost;
	@Column(name = "status")
	private String status;

}
