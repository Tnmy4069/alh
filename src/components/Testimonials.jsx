import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Rajesh Patil",
            role: "Parent (Class 10th Student)",
            text: "Apex Learning Hub has been a turning point for my son. The faculty is extremely dedication and the small batch size ensures he gets personal attention. His grades have improved significantly!",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            name: "Anjali Deshmukh",
            role: "Parent (Class 5th Student)",
            text: "I was worried about finding the right tuition for my daughter in primary school. The foundation course here is excellent. She actually enjoys learning math now!",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            name: "Rahul Sharma",
            role: "Student (Class 12th Science)",
            text: "The NEET preparation batch is intense but very helpful. The doubt solving sessions and weekly tests helped me identify my weak areas. Highly recommended!",
            rating: "⭐⭐⭐⭐⭐"
        }
    ];

    return (
        <section id="testimonials" className="section-padding">
            <h2 className="section-title">What Parents Say</h2>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem'
            }}>
                {reviews.map((review, index) => (
                    <div key={index} className="glass" style={{
                        padding: '2.5rem',
                        position: 'relative',
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))'
                    }}>
                        <div style={{
                            fontSize: '4rem',
                            color: '#FFC300',
                            position: 'absolute',
                            top: '-10px',
                            left: '20px',
                            opacity: 0.3,
                            fontFamily: 'serif'
                        }}>“</div>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            color: '#334155',
                            marginBottom: '1.5rem',
                            fontStyle: 'italic'
                        }}>
                            "{review.text}"
                        </p>
                        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1rem' }}>
                            <h4 style={{ color: '#023E8A', fontWeight: '700', fontSize: '1.1rem' }}>{review.name}</h4>
                            <p style={{ color: '#0077B6', fontSize: '0.9rem' }}>{review.role}</p>
                            <div style={{ marginTop: '0.5rem' }}>{review.rating}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
