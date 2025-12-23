import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'center',
            minHeight: '85vh',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }} className="section-padding">
            {/* Background Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div style={{ zIndex: 2, maxWidth: '900px' }}>
                <h2 style={{
                    fontSize: '1.1rem',
                    color: '#005f99',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    background: 'rgba(255,255,255,0.6)',
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    backdropFilter: 'blur(5px)'
                }}>
                    Government Reg. Udyam-MH-23-0020244
                </h2>

                <h1 style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    lineHeight: '1.1',
                    margin: '1rem 0',
                    fontWeight: '800',
                    color: '#1a3c59',
                    textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
                }}>
                    APEX <span style={{ color: '#0077b6' }}>LEARNING</span> HUB
                </h1>

                <p style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                    fontStyle: 'italic',
                    color: '#446',
                    marginBottom: '3rem',
                    fontWeight: '300'
                }}>
                    "Your Dream, Our Vision..."
                </p>

                <div className="glass" style={{
                    padding: '2rem',
                    marginBottom: '3rem',
                    border: '1px solid rgba(255,255,255,0.6)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                }}>
                    <h3 style={{ color: '#005f99', marginBottom: '1rem', fontSize: '1.5rem' }}>Excellence in Education For</h3>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {['1st - 5th', '6th - 10th', '11th & 12th', 'Science', 'Commerce'].map(tag => (
                            <span key={tag} style={{
                                background: '#e0f7fa',
                                color: '#006064',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '30px',
                                fontWeight: '600',
                                fontSize: '1.1rem'
                            }}>{tag}</span>
                        ))}
                    </div>
                    <p style={{ marginTop: '1rem', fontWeight: '500', color: '#555' }}>Boards: IGCSE, ICSE, CBSE, SSC & HSC</p>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn"
                        onClick={() => window.open('https://docs.google.com/forms/u/0/', '_blank')}
                        style={{
                            fontSize: '1.3rem',
                            padding: '15px 40px',
                            boxShadow: '0 10px 20px rgba(255, 215, 0, 0.3)'
                        }}>
                        Enroll Now
                    </button>
                    <button className="btn"
                        onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            background: 'transparent',
                            color: '#005f99',
                            border: '2px solid #005f99',
                            boxShadow: 'none'
                        }}>
                        Explore Courses
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
