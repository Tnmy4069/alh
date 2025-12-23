import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="glass" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8rem 2rem',
      position: 'sticky',
      top: '1rem',
      zIndex: 1000,
      margin: '0 1rem'
    }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', zIndex: 1002 }}>
        <div style={{
          width: '60px',
          height: '60px',
          overflow: 'hidden',
          borderRadius: '50%',
          border: '2px solid #fff',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src={logo} alt="Apex Learning Hub Logo" style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }} />
        </div>
        <h1 style={{ color: '#023E8A', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', fontWeight: '800' }}>APEX LEARNING HUB</h1>
      </div>

      {/* Hamburger Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span style={{ fontSize: '1.5rem', color: '#023E8A' }}>
          {isMenuOpen ? '✖' : '☰'}
        </span>
      </button>

      {/* Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul style={{ display: 'flex', gap: '2rem', flexDirection: isMenuOpen ? 'column' : 'row', alignItems: 'center' }}>
          {['Home', 'Courses', 'Features', 'FAQ', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                style={{ fontWeight: '600', color: '#005f99', fontSize: isMenuOpen ? '1.2rem' : '1rem' }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {isMenuOpen && (
          <button className="btn"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            style={{ marginTop: '1rem' }}
          >
            Enquire Now
          </button>
        )}
      </nav>

      <button className="btn" style={{ display: isMenuOpen ? 'none' : 'block' }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Enquire Now</button>
    </header>
  );
};

export default Header;
