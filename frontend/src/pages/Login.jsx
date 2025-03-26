import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8090/api/user/signin', { email, password }, {
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        navigate('/userdash'); // Redirect to the home page after login
      } else {
        console.error('Login failed:', response.data);
        alert(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        console.error('Login error:', error.response.data);
        alert(error.response.data.message || 'Login error. Please try again.');
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('No response from server. Please try again later.');
      } else {
        console.error('Error during login:', error.message);
        alert('Error during login. Please try again later.');
      }
    }
  };

  return (

    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <label className='label'>
            Email:
            <input
              type='email'
              placeholder='Email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaUser className='icon' />
          </label>
        </div>
        <div className='input-box'>
          <label className='label'>
            Password:
            <input
              type='password'
              placeholder='Password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className='icon' />
          </label>
        </div>
        <div className='login-btn'>
          <button type='submit'>Login</button>
        </div>
        <div className='forgot'>
          <label>
            <input type='checkbox' /> remember me
          </label>
          <a href='/forgot'>forgot password</a>
        </div>
        <div className='account'>
          <label>Don't have an account?</label>
          <Link to='/register'>
            <button type='button' className='register-btn'>Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
