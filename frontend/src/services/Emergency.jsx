import React, { useState } from 'react';
import axios from 'axios';

const EmergencyServices = () => {
    const [selectedService, setSelectedService] = useState('');
    const [services, setServices] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const handleChange = (event) => {
        setSelectedService(event.target.value);
        setIsSearched(false); // Reset the search state when the service changes
    };

    const handleSearch = () => {
        if (selectedService) {
            // Replace the URL with the correct one from your backend
            axios.get(`http://localhost:8090/api/emergency/${selectedService}`)
                .then(response => {
                    setServices(response.data);
                    setIsSearched(true);
                })
                .catch(error => {
                    console.error(`Error fetching ${selectedService} services:`, error);
                    setIsSearched(true); // Even if an error occurs, set the state to indicate search completion
                });
        }
    };

    return (
        <div className='emergency'>
            <h2>Select Emergency Service</h2>
            
            <label htmlFor="emergencySelect">Service</label>
            <select 
                id="emergencySelect" 
                value={selectedService} 
                onChange={handleChange}
            >
                <option value="" disabled>Select a service</option>
                <option value="Police">Police</option>
                <option value="Fire">Fire Department</option>
                <option value="Ambulance">Ambulance</option>
            </select>

            <button onClick={handleSearch} style={{ marginTop: '10px' }}>Search</button>

            {isSearched && services.length > 0 && (
                <table className='service-table' style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Contact</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map(service => (
                            <tr key={service.id}>
                                <td>{service.emeType}</td>
                                <td>{service.contact}</td>
                                <td>{service.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {isSearched && services.length === 0 && (
                <p>No services found for the selected type.</p>
            )}
        </div>
    );
};

export default EmergencyServices;
