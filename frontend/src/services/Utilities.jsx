import React, { useState } from 'react';
import axios from 'axios';

const Utilities = () => {
    const [selectedService, setSelectedService] = useState('');
    const [services, setServices] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const handleChange = (event) => {
        setSelectedService(event.target.value);
        setIsSearched(false); // Reset the search state when the service changes
    };

    const handleSearch = () => {
        if (selectedService) {
            axios.get(`/api/${selectedService}-services`)
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
        <div className='utilities'>
            <label htmlFor="utilitiesSelect">Select Utilities Service</label>
            <select 
                id="utilitiesSelect" 
                value={selectedService} 
                onChange={handleChange}
            >
                <option value="" disabled>Select a service</option>
                <option value="water">Water</option>
                <option value="electricity">Electricity</option>
                <option value="gas">Gas</option>
            </select>
            <br/>
            <button onClick={handleSearch}>Search</button>
            {isSearched && services.length > 0 && (
                <table className='service-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map(service => (
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                <td>{service.address}</td>
                                <td>{service.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Utilities;
