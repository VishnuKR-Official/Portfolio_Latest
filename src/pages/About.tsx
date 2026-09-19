import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import profileImage from '../assets/profile-home.jpg';

const About: React.FC = () => {
    return (
        <div className="fade-in container section">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
                <h2 className="section-title">About <span>Me</span></h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    width: '100%'
                }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '400px',
                        aspectRatio: '1',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        margin: '0 auto'
                    }}>
                        <img
                            src={profileImage}
                            alt="Vishnu K.R"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                            I'm <span style={{ color: 'var(--color-primary)' }}>Vishnu K.R</span>, a Software Engineer.
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: '1.8' }}>
                            I am an MBA graduate and former banking professional who has consciously transitioned into software development after discovering a strong interest in programming and problem-solving.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: '1.8' }}>
                            While working in banking, I realized my long-term motivation lies in logical thinking, building systems, and technology-driven solutions rather than sales-focused roles.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: '1.8' }}>
                            I am currently strengthening my foundation in C and Java programming, OOPs, data structures, and core computer science concepts through hands-on practice, mini projects, and continuous learning.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                            I am actively seeking mentorship, guidance, and entry-level opportunities in software development where I can grow as a disciplined and reliable engineer.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <MapPin color="var(--color-secondary)" />
                                <span>Kerala, India</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Mail color="var(--color-secondary)" />
                                <a href="mailto:vishnu.kr2050@gmail.com">vishnu.kr2050@gmail.com</a>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Phone color="var(--color-secondary)" />
                                <span>+91 9946524862</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Github color="var(--color-secondary)" />
                                <a href="https://github.com/VishnuKR-Official" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Linkedin color="var(--color-secondary)" />
                                <a href="https://www.linkedin.com/in/vishnu-kr2050/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <Link to="/resume" style={{
                                padding: '0.8rem 2rem',
                                borderRadius: '50px',
                                border: '1px solid var(--color-primary)',
                                color: 'var(--color-primary)',
                                fontWeight: 600
                            }}>
                                Download My Resume
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
