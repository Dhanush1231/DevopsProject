import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [user, setUser] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });
    const [cityName, setCityName] = useState('');
    const [cityDetails, setCityDetails] = useState(null);

    useEffect(() => {
        // Fetch user data from backend
        axios.get('http://localhost:8090/api/user/')
            .then(response => {
                setUser(response.data);
                setFormData({
                    name: response.data.name,
                    email: response.data.email,
                    mobile: response.data.mobile
                });
            })
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Save updated user data to backend
        axios.put('/api/user/profile', formData)
            .then(response => {
                setUser(response.data);
                setEditMode(false);
            })
            .catch(error => console.error('Error saving user data:', error));
    };

    const handleCitySearch = () => {
        fetch(`http://localhost:8090/cityservice/get/${cityName}`)
            .then((response) => response.json())
            .then((data) => setCityDetails(data))
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="user-dashboard">
            <h2>User Dashboard</h2>
            <div className="profile-section">
                <h3>User Profile</h3>
                {!editMode ? (
                    <div className="profile-details">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Mobile:</strong> {user.mobile}</p>
                        <button onClick={() => setEditMode(true)}>Edit Profile</button>
                    </div>
                ) : (
                    <div className="profile-edit">
                        <label>
                            Name:
                            <input type="text" name="name" value={formData.name} onChange={handleProfileChange} />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" value={formData.email} onChange={handleProfileChange} />
                        </label>
                        <label>
                            Mobile:
                            <input type="text" name="mobile" value={formData.mobile} onChange={handleProfileChange} />
                        </label>
                        <button onClick={handleSave}>Save</button>
                    </div>
                )}
            </div>
            <div className="city-section">
                <h3>City Search</h3>
                <div className="search-container">
                    <input
                        type="text"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        placeholder="Enter city name"
                    />
                    <button onClick={handleCitySearch}>Search</button>
                </div>
                {cityDetails && (
                    <div className="city-details">
                        <h3>City Details:</h3>
                        <p><strong>Name:</strong> {cityDetails.name}</p>
                        <p><strong>Population:</strong> {cityDetails.population}</p>
                        <p><strong>District :</strong> {cityDetails.district}</p>
                        <p><strong>State:</strong> {cityDetails.state}</p>
                        <p><strong>Country:</strong> {cityDetails.country}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserDashboard;
