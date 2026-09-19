import React from 'react';
import { Github, Layers } from 'lucide-react';
import userManagementImg from '../assets/projects/usermanagement.png';
import nodeAuthImg from '../assets/projects/node_Authentication.jpg';
import trawellImg from '../assets/projects/Trawell.jpg';
import amazonImg from '../assets/projects/amazon project.png';
import sevenUpImg from '../assets/projects/7up.jpg';
import starbucksImg from '../assets/projects/starbucks.jpg';
import youtubeImg from '../assets/projects/Youtube project.png';
import calculatorImg from '../assets/projects/calculator project.png';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "User Management & Admin Panel",
            desc: "Full-stack Express/MongoDB application featuring CRUD, role-based dashboard controls, and quick dynamic user search features.",
            tags: ["Node.js", "Express", "MongoDB", "Full-Stack"],
            color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            github: "https://github.com/VishnuKR-Official/UserManagementProject",
            image: userManagementImg
        },
        {
            title: "Node.js User Authentication",
            desc: "A secure backend system, session cookies, password hashing with bcrypt, and secure route parameters.",
            tags: ["Node.js", "Security", "Backend"],
            color: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            github: "https://github.com/VishnuKR-Official/User-Authentication-node-project",
            image: nodeAuthImg
        },
        {
            title: "Travel & Tourism UI Clone",
            desc: "A beautiful, fully responsive holiday booking layout featuring modern grid cards, itinerary sections, and dynamic destination sliders.",
            tags: ["HTML", "CSS", "Responsive", "UI"],
            color: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
            github: "https://github.com/VishnuKR-Official/Travel-website-landing-page",
            image: trawellImg
        },
        {
            title: "Static Amazon Clone UI",
            desc: "A static website replica of Amazon.com, demonstrating proficiency in HTML and CSS layout techniques.",
            tags: ["HTML", "CSS", "Frontend", "Static Site"],
            color: "linear-gradient(135deg, #131921 0%, #232f3e 100%)",
            github: "https://github.com/VishnuKR-Official/Amazon-clone",
            image: amazonImg
        },
        {
            title: "7UP Landing Page",
            desc: "A vibrant, responsive product landing page replica of the official 7UP website, built with CSS Flexbox.",
            tags: ["HTML", "CSS", "Flexbox"],
            color: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
            github: "https://github.com/VishnuKR-Official/7UP-static-UI",
            image: sevenUpImg
        },
        {
            title: "Starbucks Rewards UI",
            desc: "A clean, asymmetric layout copying the Starbucks landing site, implementing custom CSS semantic elements and modern variables.",
            tags: ["HTML", "CSS", "Layout"],
            color: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
            github: "https://github.com/VishnuKR-Official/starbucks-responsive-clone",
            image: starbucksImg
        },
        {
            title: "Youtube clone UI",
            desc: "A responsive static clone of YouTube, featuring the sidebar, video grid, and navigation bar styling.",
            tags: ["HTML", "CSS", "Responsive Design"],
            color: "linear-gradient(135deg, #cc0000 0%, #ff0000 100%)",
            github: "https://github.com/VishnuKR-Official/Youtube-clone",
            image: youtubeImg
        },
        {
            title: "Basic Java Calculator",
            desc: "A functional calculator application built using Java, implementing core mathematical operations and OOP principles.",
            tags: ["Java", "OOP", "Logic", "Console App"],
            color: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            github: "https://github.com/VishnuKR-Official/Calculator-java",
            image: calculatorImg
        }
    ];

    return (
        <div className="fade-in container section">
            <h2 className="section-title">My <span>Projects</span></h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.05)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{
                            height: '200px',
                            background: project.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top center'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, width: '100%', height: '100%',
                                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 100%)'
                            }} />
                        </div>

                        <div style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.75rem',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '20px',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        color: 'var(--color-text-muted)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                {project.desc}
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                                    flex: 1,
                                    padding: '0.75rem',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    fontWeight: 600
                                }}>
                                    <Github size={18} /> Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
