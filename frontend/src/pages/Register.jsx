import React, { useState } from 'react';
import axios from 'axios'; // Ensure this is at the top
import { FaUser, FaLock, FaPhone } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const signup = async (e) => { e.preventDefault(); const payload = { email, name, password, confirmPassword, mobile }; 
  try { await axios.post('http://localhost:8090/api/user/signup',
     payload, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }, });

      // If the request is successful
      alert('Registration successful! Please log in.');
      navigate('/signin'); // Navigate to the sign-in page

      // Clear form fields after successful submission
      setEmail('');
      setName('');
      setPassword('');
      setConfirmPassword('');
      setMobile('');
    } catch (error) {
      if (error.response) {
        console.error('Response data:', error.response.data);
        handleErrorResponse(error.response.status, error.response.data);
      } else if (error.request) {
        console.error('Request data:', error.request);
        alert('No response from server. Please try again later.');
      } else {
        console.error('Error message:', error.message);
        alert('Error during registration. Please try again later.');
      }
    }
  };

  const handleErrorResponse = (status, data) => {
    switch (status) {
      case 400:
        alert(data?.message || 'Invalid request. Please check your input.');
        break;
      case 409:
        alert(data?.message || 'User already exists. Please try a different email.');
        break;
      case 500:
        alert('Internal server error. Please try again later.');
        console.error('Internal server error:', data);
        break;
      default:
        alert(data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className='Register'>
      <h1>Sign Up</h1>
      <form onSubmit={signup} autoComplete="on">
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
              autoComplete="email"
            />
            <FaUser className='icon' />
          </label>
        </div>
        <div className='input-box'>
          <label className='label'>
            Full Name:
            <input
              type='text'
              placeholder='Full Name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
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
              autoComplete="new-password"
            />
            <FaLock className='icon' />
          </label>
        </div>
        <div className='input-box'>
          <label className='label'>
            Confirm Password:
            <input
              type='password'
              placeholder='Confirm Password'
              id='password1'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <FaLock className='icon' />
          </label>
        </div>
        <div className='input-box'>
          <label className='label'>
            Mobile:
            <input
              type='number'
              placeholder='Mobile'
              id='mobile'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              autoComplete="tel"
            />
            <FaPhone className='icon' />
          </label>
        </div>

        <div className='login-btn'>
          <button type='submit'>Register</button>
        </div>
        <div className='account'>
          <label>Have an account?</label>
          <Link to='/signin'>
            <span className='login-btn'>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
