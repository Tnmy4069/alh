import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="glass" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      position: 'sticky',
      top: '1rem',
      zIndex: 1000,
      margin: '0 1rem'
    }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          overflow: 'hidden',
          borderRadius: '50%',
          border: '2px solid #fff',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Using the dedicated logo image */}
          <img src={logo} alt="Apex Learning Hub Logo" style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }} />
        </div>
        <h1 style={{ color: '#023E8A', fontSize: '1.4rem', fontWeight: '800' }}>APEX LEARNING HUB</h1>
      </div>

      <nav>
        <ul style={{ display: 'flex', gap: '2rem' }}>
          <li><a href="#home" style={{ fontWeight: '600', color: '#005f99' }}>Home</a></li>
          <li><a href="#courses" style={{ fontWeight: '600', color: '#005f99' }}>Courses</a></li>
          <li><a href="#features" style={{ fontWeight: '600', color: '#005f99' }}>Features</a></li>
          <li><a href="#contact" style={{ fontWeight: '600', color: '#005f99' }}>Contact</a></li>
        </ul>
      </nav>

      <button className="btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Enquire Now</button>
    </header>
  );
};

export default Header;
