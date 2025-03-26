import React, { useState, useEffect } from 'react';
import axios from 'axios';
 

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        id: '',
        name: '',
        email: '',
        role: ''
    });
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8090/api/user/all');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
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
                await axios.put(`http://localhost:8090/api/user/update/${form.id}`, form);
            } else {
                await axios.post('http://localhost:8090/api/user/signup', form);
            }
            fetchUsers();
            setForm({
                id: '',
                name: '',
                email: '',
                mobile: ''
            });
            setIsEdit(false);
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    const handleEdit = (user) => {
        setForm(user);
        setIsEdit(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8090/api/user/delete/${id}`);
            fetchUsers(); // Refresh the user list after deletion
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleShowAllUsers = () => {
        fetchUsers(); // Fetch all users and display them
    };

    // const handleShowDetails = (user) => {
    //     alert(`User Details:\nName: ${user.name}\nEmail: ${user.email}\nRole: ${user.role}`);
    // };

    return (
        <div className="user-management">
            <h2>User Management</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input type="text" name="mobile" placeholder="mobile" value={form.mobile} onChange={handleChange} required />
                <button type="submit">{isEdit ? 'Update' : 'Add'} User</button>
                <button type="button" onClick={handleShowAllUsers}>Show All Users</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <div className="actions">
                                    <button className="btn" onClick={() => handleEdit(user)}>Edit</button>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                     
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
