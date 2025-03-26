import React from 'react';
import { Link } from 'react-router-dom';
import './Adminpage.css';

const AdminNav = () => {
  return (
    <div className="admin">
      <nav className='navbar-admin'>
        <Link to='/admin/dashboard'>Dashboard</Link>
        <Link to='/admin/users'>Users</Link>
        <Link to='/admin/services'>Services</Link>
        <Link to='/admin/cities'>Cities</Link>
        <Link to='/signin'>
          <button className='btn'>Logout</button>
        </Link>
      </nav>
    </div>
  );
};

export default AdminNav;
