import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="section-padding" style={{
            marginTop: '0',
            background: 'linear-gradient(to top, #023E8A, #0077B6)',
            color: '#fff',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '4rem',
                marginBottom: '4rem'
            }}>
                <div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#ADE8F4' }}>Apex Learning Hub</h3>
                    <p style={{ opacity: 0.8, lineHeight: '1.8' }}>Empowering students to achieve their dreams through quality education and personalized guidance.</p>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#ADE8F4', fontWeight: '600' }}>Our Centers</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: '#CAF0F8', marginBottom: '0.5rem' }}>📍 Main Branch</h4>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>2nd Floor, 'Guru Mauli', Near HP Petrol Pump, Meri - Rasbihari Link Road, Nashik - 422003</p>
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#ADE8F4', fontWeight: '600' }}>Get in Touch</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#FFD700' }}>
                        +91 9421554793 / +91 8928772435
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.9 }}>
                        <a href="mailto:apexlearninghub2020@gmail.com" style={{ textDecoration: 'underline' }}>apexlearninghub2020@gmail.com</a>
                        <a href="http://www.apexlearninghub.in" target="_blank" rel="noopener noreferrer">www.apexlearninghub.in</a>
                    </div>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.9rem',
                opacity: 0.6
            }}>
                <p>© {new Date().getFullYear()} Apex Learning Hub. Designed with ❤️.</p>
            </div>
        </footer>
    );
};

export default Footer;
