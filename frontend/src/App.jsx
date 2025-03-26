import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import About from './pages/About';
import Contact from './pages/Contact';
import PublicTransport from './services/PublicTransport';
import WasteManagement from './services/WasteManagement';
import Emergency from './services/Emergency';
import Healthcare from './services/Healthcare';
import Education from './services/Education';
import Utilities from './services/Utilities';
import Signin from './pages/Login';
import Register from './pages/Register';
import UserNav from './components/UserModule/UserNav';
import Feedback from './pages/FeedBack';
import UserDashboard from './components/UserModule/UserDashboard'; 
import AdminNav from './components/AdminModule/AdminNav';
import AdminDashboard from './components/AdminModule/AdminDashboard'
import UserData from './components/AdminModule/UsersData';
import AdminCity from './components/AdminModule/Cities';
import ServiceList from './components/AdminModule/Services';;
const AppContent = ({ theme, setTheme }) => {
  const location = useLocation(); // Get the current route

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Show navbar only on login, register, home, and about pages
  const showNavbar = ['/', '/about', '/signin', '/register'].includes(location.pathname);
  const showUserNav = ['/userdash', '/healthcare','/education','/services', '/contact',
    '/utilities','/feedback','/public','/emergency-services',].some(path => location.pathname.startsWith(path));
    const showAdminNav = ['/admindash','/admin/dashboard','/admin/user','/admin/cities','/admin/services'].some(path => location.pathname.startsWith(path));
  return (
    <div className={theme}>
      {/* Conditionally render Navbar based on the route */}
      {showNavbar && <Navbar theme={theme} setTheme={setTheme} />}
      {showUserNav && <UserNav />}
      {showAdminNav && <AdminNav/>}
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/public' element={<PublicTransport />} />
        <Route path='/emergency-services' element={<Emergency />} />
        <Route path='/waste-management' element={<WasteManagement />} />
        <Route path='/healthcare' element={<Healthcare />} />
        <Route path='/education' element={<Education />} />
        <Route path='/utilities' element={<Utilities />} />
        <Route path='/user' element={<UserNav />} />
        <Route path='/userdash' element={<UserDashboard/>}/>
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/admin' element={<AdminNav />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserData/>}/>
        <Route path="/admin/cities" element={<AdminCity/>}/>
        <Route path="/admin/services" element={<ServiceList/>}/>
      </Routes>
    </div>
  );
};

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  return (
    <Router>
      <AppContent theme={theme} setTheme={setTheme} />
    </Router>
  );
};

export default App;
