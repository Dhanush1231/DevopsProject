import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to the Smart City Application</h1>
      <p>Access city information and services easily...</p>
      {/* Link to Register page */}
      <Link to="/register">
        <button className='btn'>Register</button>
      </Link>
    </div>
  );
};

export default Home;
