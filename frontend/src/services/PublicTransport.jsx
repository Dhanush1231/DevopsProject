import React, { useState } from 'react';
import axios from 'axios';

const PublicTransport = () => {
    const [selectedService, setSelectedService] = useState('');
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [services, setServices] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
        setIsSearched(false);
    };

    const handleFromChange = (event) => {
        setFromLocation(event.target.value);
        setIsSearched(false);
    };

    const handleToChange = (event) => {
        setToLocation(event.target.value);
        setIsSearched(false);
    };

    const handleSearch = () => {
        if (selectedService && fromLocation && toLocation) {
            axios
                .get(`/api/transport/${selectedService}-services`, {
                    params: {
                        from: fromLocation,
                        to: toLocation
                    }
                })
                .then(response => {
                    setServices(response.data);
                    setIsSearched(true);
                })
                .catch(error => {
                    console.error(`Error fetching ${selectedService} services:`, error);
                });
        }
    };

    return (
        <div className="public">
            <div className="input-container">
                <div className="input-item">
                    <label htmlFor="servicesSelect">Service</label>
                    <select
                        id="servicesSelect"
                        value={selectedService}
                        onChange={handleServiceChange}
                    >
                        <option value="" disabled>Select a service</option>
                        <option value="bus">Bus Service</option>
                        <option value="train">Train Service</option>
                        <option value="flight">Flight Service</option>
                        <option value="cab">Cab Service</option>
                    </select>
                </div>

                <div className="input-item">
                    <label htmlFor="fromLocation">From</label>
                    <input
                        type="text"
                        id="fromLocation"
                        value={fromLocation}
                        onChange={handleFromChange}
                        placeholder="Enter departure"
                    />
                </div>

                <div className="input-item">
                    <label htmlFor="toLocation">To</label>
                    <input
                        type="text"
                        id="toLocation"
                        value={toLocation}
                        onChange={handleToChange}
                        placeholder="Enter destination"
                    />
                </div>

                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>

            {isSearched && services.length > 0 && (
                <div className="service-list">
                    {services.map(service => (
                        <div key={service.id} className="service-item">
                            {Object.entries(service).map(([key, value]) => (
                                <p key={key}>
                                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                                </p>
                            ))}
                            <hr /> {/* Divider between service items */}
                        </div>
                    ))}
                </div>
            )}

            {isSearched && services.length === 0 && (
                <p>No services found for the selected type.</p>
            )}
        </div>
    );
};

export default PublicTransport;
