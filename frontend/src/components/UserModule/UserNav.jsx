import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo_light from '../../assets/logo-white.png';
import logo_black from '../../assets/logo-black.png';
import './UserNav.css';

function UserNavbar({theme,setTheme}) {
   
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const hideNavbarPaths = ['/admin'];

  // Hide Navbar if the current path matches a specific path
  if (hideNavbarPaths.includes(location.pathname)) {
    return null;
  }
  return (
    <header className={`header ${!isHomePage ? 'header-green' : ''}`}>
      <img src={theme === 'light' ? logo_black : logo_light} alt='' className='logo'/>
      <h1>Smart City</h1>
      <nav className='navbar'>
        <Link to='/userdash'>Dashboard</Link>
         <Link to='/services'>Services</Link> 
         <Link to='/contact'>Contact</Link>
         <Link to='/feedback'>Feedback</Link>
        <Link to='/signin'>
          <button className='btn'>Logout</button>
        </Link>
      </nav>
      {/* <img onClick={() => {toggle_mode()}} src={theme === 'light' ? toggle_light : toggle_black} alt='' className='toggle-icon'/> */}
    </header>
  );
}

export default UserNavbar;
