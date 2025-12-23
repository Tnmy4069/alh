import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            q: "What boards do you cover?",
            a: "We cover all major boards including CBSE, ICSE, IGCSE, and State Board (SSC/HSC) for all grades from 1st to 12th."
        },
        {
            q: "Do you provide study material?",
            a: "Yes, we provide comprehensive study material, worksheets, and practice papers curated by our expert faculty."
        },
        {
            q: "What is the batch size?",
            a: "To ensure personalized attention, we maintain a small batch size of 15-20 students."
        },
        {
            q: "Is there transport facility available?",
            a: "We do not provide transport directly, but we can connect you with reliable van services operating in the area."
        },
        {
            q: "How can I track my child's progress?",
            a: "We conduct weekly tests and send regular performance reports via WhatsApp. We also hold monthly Parent-Teacher Meetings (PTMs)."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding" style={{ background: '#f8fafc' }}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {questions.map((item, index) => (
                    <div key={index} style={{ marginBottom: '1rem' }}>
                        <button
                            onClick={() => toggleFAQ(index)}
                            style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '1.5rem',
                                background: '#fff',
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '16px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                color: '#023E8A',
                                boxShadow: activeIndex === index ? '0 10px 20px rgba(0,0,0,0.05)' : 'none',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {item.q}
                            <span style={{
                                transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                fontSize: '1.5rem',
                                color: '#48CAE4'
                            }}>
                                ▼
                            </span>
                        </button>
                        <div style={{
                            height: activeIndex === index ? 'auto' : '0',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            background: 'rgba(255,255,255,0.5)',
                            borderRadius: '0 0 16px 16px',
                            marginTop: '-10px'
                        }}>
                            <p style={{
                                padding: '1.5rem',
                                paddingTop: '2rem',
                                color: '#555',
                                lineHeight: '1.6'
                            }}>
                                {item.a}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
