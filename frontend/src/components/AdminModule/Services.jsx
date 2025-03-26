import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const ServiceManagement = () => {
    const [services, setServices] = useState([]);
    const [form, setForm] = useState({
        id: '',
        name: '',
        description: '',
        status: ''
    });
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:8090/api/services');
            setServices(response.data);
        } catch (error) {
            console.error('Error fetching services:', error);
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
                await axios.put(`http://localhost:8090/api/services/${form.id}`, form);
            } else {
                await axios.post('http://localhost:8090/api/services', form);
            }
            fetchServices();
            setForm({
                id: '',
                name: '',
                description: '',
                status: ''
            });
            setIsEdit(false);
        } catch (error) {
            console.error('Error saving service:', error);
        }
    };

    const handleEdit = (service) => {
        setForm(service);
        setIsEdit(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8090/api/services/${id}`);
            fetchServices(); // Refresh the service list after deletion
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

    const handleShowAllServices = () => {
        fetchServices(); // Fetch all services and display them
    };

    const handleShowDetails = (service) => {
        alert(`Service Details:\nName: ${service.name}\nDescription: ${service.description}\nStatus: ${service.status}`);
    };

    return (
        <div className="service-management">
            <h2>Service Management</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Service Name" value={form.name} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
                <input type="text" name="status" placeholder="Status" value={form.status} onChange={handleChange} required />
                <button type="submit">{isEdit ? 'Update' : 'Add'} Service</button>
                <button type="button" onClick={handleShowAllServices}>Show All Services</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => (
                        <tr key={service.id}>
                            <td>{service.id}</td>
                            <td>{service.name}</td>
                            <td>{service.description}</td>
                            <td>{service.status}</td>
                            <td>
                                <div className="actions">
                                    <button className="btn" onClick={() => handleEdit(service)}>Edit</button>
                                    <button onClick={() => handleDelete(service.id)}>Delete</button>
                                    <button className="btn" onClick={() => handleShowDetails(service)}>Show Details</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceManagement;
