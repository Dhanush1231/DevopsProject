import React from 'react';
import cityImage from '../assets/c.png'

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Smart City Application</h1>
      </header>

      <section className="about-introduction">
        <h2>Introduction</h2>
        <p>
          Welcome to the Smart City Application! Our app is designed to provide users with seamless access to vital city information and services. From finding public amenities to reporting issues in real-time, our platform aims to enhance the urban living experience.
        </p>
        <img src={cityImage} alt="Smart City" className="about-image" />
      </section>

      <section className="about-features">
       <br></br> <h2>Features</h2>
        <ul>
          <li>Access to public services and amenities.</li>
          <li>Real-time reporting of city issues.</li>
          <li>User-friendly interface for easy navigation.</li>
          <li>Feedback system for continuous improvement.</li>
          <li>Admin panel for managing city information.</li>
        </ul>
      </section>

      <section className="about-vision-mission">
        <h2>Vision and Mission</h2>
        <p>
          Our vision is to create a more connected and efficient city by leveraging technology. We believe that every resident should have easy access to important city services, contributing to a better quality of life for all.
        </p>
      </section>
      
      <section className='about-srvices'>
      <h2>Services Avaliable</h2>
      <p>
        In a smart city, various services are designed to enhance the quality of life, improve efficiency, 
        and provide sustainable solutions for urban living. Here are some key services available in a smart city:
      </p>
      <h2>1. Smart Transportation:</h2>
      <ul>
        <li>Real-time traffic monitoring and management.</li>
        <li>Public transportation tracking (buses, trains, etc.).</li>
        <li>Ride-sharing and bike-sharing services.</li>
        <li>Electric vehicle (EV) charging stations.</li>
        <li>Smart parking solutions with live availability updates.</li>
      </ul>
      <h2>2. Smart Utilities:</h2>
      <ul>
        <li>Energy-efficient smart grids.</li>
        <li>Real-time water usage monitoring and leak detection.</li>
        <li>Renewable energy integration (solar, wind).</li>
        <li>Smart waste management with sensors to optimize collection routes.</li>
      </ul>
      <h2>3. Public Safety and Security:</h2>
      <ul>
        <li>Smart surveillance with AI-powered cameras.</li>
        <li>Emergency response systems and alerts.</li>
        <li>Smart street lighting (adjusts brightness based on conditions).</li>
        <li>Disaster management systems (flood sensors, early warning systems).</li>
      </ul>
      <h2>4. Healthcare Services:</h2>
      <ul>
        <li>Telemedicine and remote healthcare services.</li>
        <li>Smart ambulances with real-time health monitoring.</li>
        <li>Health kiosks for public access to medical consultations.</li>
        <li>Wearable devices for tracking health data (heart rate, blood pressure).</li>
      </ul>
      <h2>5. Environmental Monitoring:</h2>
      <ul>
        <li>Air and water quality monitoring.</li>
        <li>Noise pollution control systems.</li>
        <li>Smart irrigation for public parks and green spaces.</li>
        <li>Real-time weather forecasting and environmental alerts.</li>
      </ul>
      <h2>6. Smart Governance:</h2>
      <ul>
        <li>E-governance platforms for public services (birth certificates, permits).</li>
        <li>Digital payments for city services and taxes.</li>
        <li>Real-time reporting and tracking of civic issues (potholes, broken lights).</li>
        <li>Open data portals for transparency and citizen engagement.</li>
      </ul>
      <h2>7. Education and Learning:</h2>
      <ul>
        <li>Smart classrooms with digital learning tools.</li>
        <li>Online education platforms and e-learning access.</li>
        <li>Public Wi-Fi zones for connectivity.</li>
      </ul>
      <h2>8. Public Service Access:</h2>
      <ul>
        <li>Mobile apps for accessing public services (libraries, community centers).</li>
        <li>Real-time event information (public meetings, cultural events).</li>
        <li>Tourist information services with smart guides and maps.</li>
      </ul>
      <h2>9. Smart Buildings and Infrastructure:</h2>
      <ul>
        <li>Energy-efficient and sustainable buildings.</li>
        <li>Smart HVAC systems to optimize energy usage.</li>
        <li>Sensor-driven maintenance and repair scheduling for infrastructure.</li>
      </ul>
      <h2>10. Citizen Engagement Platforms:</h2>
      <ul>
        <li>Feedback systems to improve city services.</li>
        <li>Social platforms for local communities to engage and collaborate.</li>
      </ul>
    </section>
      <section className="about-team">
        <h2>Our Team</h2>
        <p>
          Our dedicated team comprises urban planners, developers, and community advocates who are passionate about improving city living through innovative solutions.
        </p>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! If you have any questions or feedback, please reach out to us at:
        </p>
        <p>Email: support@smartcityapp.com</p>
      </section>
    </div>
  );
};

export default About;
