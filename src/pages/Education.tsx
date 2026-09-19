import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
    const educationHistory = [
        {
            year: "2022 - 2024",
            degree: "Master of Business Administration (MBA), Finance and Marketing",
            school: "Mahatma Gandhi University, Kerala",
            desc: (
                <>
                    <p style={{ marginBottom: '0.5rem' }}>Postgraduate management program with concentrated study in core business functions such as:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
                        <li>Strategic Management</li>
                        <li>Financial Analysis and Decision Making</li>
                        <li>Marketing Management</li>
                        <li>Organizational Behavior & Leadership</li>
                        <li>Operations & Project Management</li>
                    </ul>
                    <p style={{ marginBottom: '0.5rem' }}>Developed capabilities in business analysis, team leadership, strategic planning, and operational execution through coursework, case studies, and collaborative projects.</p>
                </>
            )
        }
    ];

    return (
        <div className="fade-in container section">
            <h2 className="section-title">My <span>Education</span></h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {educationHistory.map((item, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        gap: '2rem',
                        marginBottom: '3rem',
                        position: 'relative'
                    }}>
                        {/* Timeline Line */}
                        {index !== educationHistory.length - 1 && (
                            <div style={{
                                position: 'absolute',
                                left: '24px',
                                top: '50px',
                                bottom: '-50px',
                                width: '2px',
                                background: 'rgba(255,255,255,0.1)'
                            }} />
                        )}

                        <div style={{
                            minWidth: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-bg-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--color-primary)',
                            flexShrink: 0
                        }}>
                            <GraduationCap size={24} color="var(--color-primary)" />
                        </div>

                        <div style={{
                            backgroundColor: 'var(--color-bg-secondary)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            flex: 1,
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '20px',
                                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                                color: 'var(--color-primary)',
                                fontSize: '0.875rem',
                                marginBottom: '1rem'
                            }}>
                                {item.year}
                            </span>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.degree}</h3>
                            <h4 style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{item.school}</h4>
                            <p style={{ lineHeight: '1.6' }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
