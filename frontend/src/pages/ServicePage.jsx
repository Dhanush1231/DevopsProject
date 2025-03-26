import React from 'react';
import education from '../assets/education.jpeg';
import utilities from '../assets/utilities.jpeg';
import healthcare from '../assets/healthcare.jpeg';
import waste from '../assets/waste-management.jpeg';
import transport from '../assets/public-transport.jpeg';
import emergency from '../assets/emergency.jpg'

const services = [
  { id: 1, name: 'Public Transportation', description: 'Bus, Metro, and Tram services', link: '/public', image: transport },
  { id: 2, name: 'Waste Management', description: 'Garbage collection and recycling', link: '/waste-management', image: waste },
  { id: 3, name: 'Emergency Services', description: 'Police, Fire Department, and Ambulance', link: '/emergency-services', image: emergency },
  { id: 4, name: 'Healthcare', description: 'Hospitals and Clinics', link: '/healthcare', image: healthcare },
  { id: 5, name: 'Education', description: 'Schools and Universities', link: '/education', image: education },
  { id: 6, name: 'Utilities', description: 'Water, Electricity, and Gas', link: '/utilities', image: utilities },
];

const ServiceList = () => {
  return (
    <div className='services'>
      <h1>Smart City Services</h1>
      <div className='service-grid'>
        {services.map(service => (
          <div key={service.id} className='service-item'>
            <img src={service.image} alt={service.name} className='service-image' />
            <h2>{service.name}</h2>
            <p1>{service.description}</p1><br/>
            <a href={service.link}>Learn more about {service.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
