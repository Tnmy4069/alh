import React, { useState, useEffect } from 'react';
import banner from '../assets/banner.jpg';
import results from '../assets/results.jpg';
import flyer from '../assets/flyer.jpg';

const Gallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { type: 'image', src: banner, alt: 'Apex Learning Hub Banner' },
        { type: 'image', src: flyer, alt: 'Apex Learning Hub Flyer' },
        { type: 'image', src: results, alt: 'Student Results and Classroom' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section id="gallery" style={{ padding: '6rem 2rem', background: '#f0f9ff' }}>
            <h2 className="section-title">Our Gallery & Results</h2>

            <div className="glass" style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '10px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '24px'
            }}>
                <div style={{
                    display: 'flex',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: 'transform 0.5s ease-in-out'
                }}>
                    {slides.map((slide, index) => (
                        <div key={index} style={{
                            minWidth: '100%',
                            height: '500px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            borderRadius: '16px'
                        }}>
                            <img src={slide.src} alt={slide.alt} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                background: '#fff'
                            }} />
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button onClick={prevSlide} style={{
                    position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%',
                    width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.5rem', color: '#005f99'
                }}>❮</button>
                <button onClick={nextSlide} style={{
                    position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%',
                    width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.5rem', color: '#005f99'
                }}>❯</button>

                {/* Indicators */}
                <div style={{
                    position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', gap: '10px'
                }}>
                    {slides.map((_, index) => (
                        <div key={index}
                            onClick={() => setCurrentSlide(index)}
                            style={{
                                width: '12px', height: '12px', borderRadius: '50%',
                                background: index === currentSlide ? '#0077b6' : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                border: '1px solid #fff'
                            }} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
