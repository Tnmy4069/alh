import React from 'react';

const Courses = () => {
    const categories = [
        {
            title: "Academic Excellence",
            subtitle: "Grades 6th - 12th",
            items: ["IGCSE & ICSE Boards", "CBSE Curriculum", "SSC & HSC State Boards", "Foundation Courses"],
            gradient: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
            icon: "📚"
        },
        {
            title: "Competitive Edge",
            subtitle: "Entrance Exams",
            items: ["IIT-JEE Intro / MHTCET", "NEET Foundation / KVPY", "NDA Preparation", "Olympiads (Maths/Science)"],
            gradient: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
            icon: "🏆"
        },
        {
            title: "Holistic Growth",
            subtitle: "Skill Development",
            items: ["Vedic Maths & Abacus", "Public Speaking", "Creative Arts", "Personality Development"],
            gradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
            icon: "🎨"
        }
    ];

    return (
        <section id="courses" style={{ padding: '6rem 2rem', background: '#f8fafc' }}>
            <h2 className="section-title">Enriching Courses</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {categories.map((cat, index) => (
                    <div key={index} className="glass" style={{
                        padding: '2.5rem',
                        background: '#fff',
                        borderRadius: '24px',
                        border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'default'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                        }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{cat.icon}</div>
                        <h3 style={{ fontSize: '1.8rem', color: '#023E8A', marginBottom: '0.5rem', fontWeight: '700' }}>{cat.title}</h3>
                        <h4 style={{ fontSize: '1rem', color: '#0077B6', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{cat.subtitle}</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {cat.items.map((item, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: '#334155',
                                    fontWeight: '500'
                                }}>
                                    <span style={{ color: '#48CAE4' }}>✔</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;
