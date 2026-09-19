import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-bg-secondary)',
            padding: '4rem 0',
            marginTop: 'auto',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="https://github.com/VishnuKR-Official" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github size={24} /></a>
                    <a href="https://www.linkedin.com/in/vishnu-kr2050/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
                    <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
                    <a href="mailto:vishnu.kr2050@gmail.com" aria-label="Email"><Mail size={24} /></a>
                </div>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
