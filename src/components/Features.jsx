import React from 'react';

const Features = () => {
    const features = [
        { text: "Small Batch Sizes", desc: "Personalized attention for every student." },
        { text: "Expert Faculty", desc: "Qualified and experienced mentors." },
        { text: "Regular Testing", desc: "Weekly assessments to track progress." },
        { text: "Doubt Solving", desc: "Dedicated sessions for concept clarity." },
        { text: "Parent Updates", desc: "Regular feedback and PTMs." },
        { text: "Holistic Approach", desc: "Focus on overall development." }
    ];

    return (
        <section id="features" style={{ padding: '6rem 2rem' }}>
            <h2 className="section-title">Why Choose Us?</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {features.map((feature, index) => (
                    <div key={index} className="glass" style={{
                        padding: '2rem',
                        textAlign: 'left',
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))',
                        borderLeft: '5px solid #00BFFF'
                    }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#005f99', marginBottom: '0.5rem' }}>{feature.text}</h3>
                        <p style={{ color: '#555', lineHeight: '1.6' }}>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
