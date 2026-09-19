import React from 'react';
import { Layout, Smartphone, PenTool } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        { icon: <Layout size={32} />, title: "Full Stack Web Development", desc: "Building full-stack websites with great UI using React, Node.js, Express, and MongoDB." },
        { icon: <Smartphone size={32} />, title: "Responsive Web Design", desc: "Ensuring websites look perfect on all devices (Mobile, Tablet, Desktop) using Bootstrap, Tailwind CSS, and modern CSS techniques." },
        { icon: <PenTool size={32} />, title: "Frontend Implementation", desc: "Converting UI/UX designs into pixel-perfect, interactive code using the latest frontend technologies." }
    ];

    return (
        <div className="fade-in container section">
            <h2 className="section-title">My <span>Services</span></h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {services.map((service, index) => (
                    <div key={index} style={{
                        padding: '2.5rem',
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: '1rem',
                        border: '1px solid rgba(255,255,255,0.05)',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-primary)';
                            e.currentTarget.style.transform = 'translateY(-10px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            margin: '0 auto 1.5rem',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(37, 99, 235, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-primary)'
                        }}>
                            {service.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
