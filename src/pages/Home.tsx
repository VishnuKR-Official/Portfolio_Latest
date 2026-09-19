import React from 'react';
import { ArrowRight, Code, Server, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile-home.jpg';

const Home: React.FC = () => {
    return (
        <div className="fade-in">
            {/* Hero Section */}
            <section style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Abstract Background Elements */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'var(--color-primary)',
                    opacity: 0.1,
                    filter: 'blur(100px)',
                    borderRadius: '50%'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'var(--color-secondary)',
                    opacity: 0.1,
                    filter: 'blur(120px)',
                    borderRadius: '50%'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Build <span style={{ color: 'var(--color-primary)' }}>Faster</span>.<br />
                        Scale <span style={{ color: 'var(--color-secondary)' }}>Better</span>.
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <img src={profileImage} alt="Vishnu" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary)' }} />
                        I'm Vishnu K.R, a Full Stack Developer specializing in building exceptional digital experiences.
                        Currently crafting scalable solutions with React and Node.js.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="https://github.com/VishnuKR-Official" target="_blank" rel="noopener noreferrer" style={{
                            padding: '1rem 2rem',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: '50px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            View My Work <ArrowRight size={20} />
                        </a>
                        <Link to="/contact" style={{
                            padding: '1rem 2rem',
                            border: '1px solid rgba(255,255,255,0.2)',
                            borderRadius: '50px',
                            fontWeight: 600
                        }}>
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section container">
                <h2 className="section-title">What I <span>Do</span></h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { icon: <Code size={40} />, title: 'Frontend Development', desc: 'Building responsive, pixel-perfect user interfaces with React and TypeScript.' },
                        { icon: <Server size={40} />, title: 'Backend Development', desc: 'Designing robust APIs and microservices using Node.js and Python.' },
                        { icon: <Database size={40} />, title: 'Database Design', desc: 'Optimizing data structures with PostgreSQL and MongoDB for performance.' }
                    ].map((item, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            backgroundColor: 'var(--color-bg-secondary)',
                            borderRadius: '1rem',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
