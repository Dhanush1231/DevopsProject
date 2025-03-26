import React, { useState, useEffect } from 'react';
import axios from 'axios';
 

const CityManagement = () => {
    const [cities, setCities] = useState([]);
    const [form, setForm] = useState({
        id: '',
        name: '',
        state: '',
        district: '',
        country: '',
        population: '',
        pincode: ''
    });
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        fetchCities();
    }, []);

    const fetchCities = async () => {
        try {
            const response = await axios.get('http://localhost:8090/api/cities/all');
            setCities(response.data);
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await axios.put(`http://localhost:8090/api/cities/update/${form.id}`, form);
            } else {
                await axios.post('http://localhost:8090/api/cities/add', form);
            }
            fetchCities();
            setForm({
                id: '',
                name: '',
                state: '',
                district: '',
                country: '',
                population: '',
                pincode: ''
            });
            setIsEdit(false);
        } catch (error) {
            console.error('Error saving city:', error);
        }
    };

    const handleEdit = (city) => {
        setForm(city);
        setIsEdit(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8090/api/cities/delete/${id}`);
            fetchCities();
        } catch (error) {
            console.error('Error deleting city:', error);
        }
    };

    const handleShowAllCities = () => {
        fetchCities();
    };

    // const handleShowDetails = (city) => {
    //     alert(`City Details:\nName: ${city.name}\nState: ${city.state}\nDistrict: ${city.district}\nCountry: ${city.country}\nPopulation: ${city.population}\nPincode: ${city.pincode}`);
    // };

    return (
        <div className="city-management">
            <h2>City Management</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="City Name" value={form.name} onChange={handleChange} required />
                <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} required />
                <input type="text" name="district" placeholder="District" value={form.district} onChange={handleChange} required />
                <input type="text" name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
                <input type="number" name="population" placeholder="Population" value={form.population} onChange={handleChange} required />
                <input type="number" name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} required />
                <button type="submit">{isEdit ? 'Update' : 'Add'} City</button>
                <button type="button" onClick={handleShowAllCities}>Show All Cities</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>City</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Country</th>
                        <th>Population</th>
                        <th>Pincode</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(city => (
                        <tr key={city.id}>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>{city.state}</td>
                            <td>{city.district}</td>
                            <td>{city.country}</td>
                            <td>{city.population}</td>
                            <td>{city.pincode}</td>
                            <td>
                                <div className="actions">
                                    <button className="btn" onClick={() => handleEdit(city)}>Edit</button>
                                    <button onClick={() => handleDelete(city.id)}>Delete</button>
                
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CityManagement;
