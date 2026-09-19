import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Calendar as CalendarIcon, Award, Users, BookOpen } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Resume: React.FC = () => {
    return (
        <div className="fade-in container section" style={{ paddingBottom: '5rem' }}>
            {/* Print Styles */}
            <style>
                {`
                @media print {
                    @page { margin: 0; }
                    body { background: white; color: black; -webkit-print-color-adjust: exact; }
                    .no-print { display: none !important; }
                    .resume-container { 
                        box-shadow: none !important; 
                        border: none !important; 
                        margin: 0 !important; 
                        width: 100% !important; 
                        max-width: 100% !important;
                        padding: 30px 40px !important;
                        background: white !important;
                    }
                    * { color: black !important; border-color: #ccc !important; }
                    .primary-text { color: #2563EB !important; }
                    .secondary-text { color: #444 !important; }
                    h1, h2, h3, h4 { color: #222 !important; }
                    a { text-decoration: none !important; color: #2563EB !important; }
                    .skill-tag { border: 1px solid #999 !important; color: #000 !important; }
                }
                `}
            </style>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }} className="no-print">
                <h2 className="section-title" style={{ marginBottom: 0 }}>My <span>Resume</span></h2>
                <button
                    onClick={() => window.print()}
                    style={{
                        padding: '0.8rem 1.5rem',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}
                >
                    <Download size={20} /> Download PDF
                </button>
            </div>

            <div className="resume-container" style={{
                maxWidth: '900px',
                margin: '0 auto',
                backgroundColor: 'var(--color-bg-secondary)',
                padding: '3rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
            }}>
                {/* Header */}
                <header style={{ display: 'flex', gap: '2rem', borderBottom: '2px solid rgba(128,128,128,0.2)', paddingBottom: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                    <img src={profileImage} alt="Vishnu K.R" style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1 }}>Vishnu <span className="primary-text" style={{ color: 'var(--color-primary)' }}>K.R</span></h1>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text-muted)', marginBottom: '1rem' }} className="secondary-text">Full Stack Developer | MBA Graduate</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', fontSize: '0.9rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Phone size={14} /> +91 9946524862</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Mail size={14} /> vishnu.kr2050@gmail.com</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={14} /> Nettoor P.O, Ernakulam, India</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CalendarIcon size={14} /> 31-08-2001</div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.8rem', fontSize: '0.9rem' }}>
                            <a href="https://github.com/VishnuKR-Official" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-primary)' }}>
                                <Github size={16} /> github.com/VishnuKR-Official
                            </a>
                            <a href="https://www.linkedin.com/in/vishnu-kr2050/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-primary)' }}>
                                <Linkedin size={16} /> linkedin.com/in/vishnu-kr2050
                            </a>
                        </div>
                    </div>
                </header>

                {/* Summary */}
                <section style={{ marginBottom: '2rem' }}>
                    <h3 className="primary-text" style={{ fontSize: '1.4rem', color: 'var(--color-primary)', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Users size={20} /> Professional Summary
                    </h3>
                    <p style={{ lineHeight: '1.6', color: 'var(--color-text-muted)', fontSize: '0.95rem' }} className="secondary-text">
                        Eager to kickstart my career as a Software Engineer, leveraging a strong academic background in Computer Applications and Management.
                        As an MBA graduate and former Banking Professional, I have consciously transitioned into development, driven by a passion for programming and logical problem-solving.
                        I aim to contribute efficiently to a dedicated technical team while delivering value through scalable web solutions.
                    </p>
                </section>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>

                    {/* LEFT COLUMN */}
                    <div>
                        {/* Technical Skills */}
                        <section style={{ marginBottom: '2.5rem' }}>
                            <h3 className="primary-text" style={{ fontSize: '1.4rem', color: 'var(--color-primary)', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <BookOpen size={20} /> Technical Skills
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <div>
                                    <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Languages & Core</strong>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3', 'Java', 'C'].map(s => (
                                            <span key={s} className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--color-primary)', borderRadius: '4px' }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Frameworks & Tools</strong>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {['React.js', 'Bootstrap', 'Tailwind CSS', 'Git', 'GitHub', 'VS Code'].map(s => (
                                            <span key={s} className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--color-primary)', borderRadius: '4px' }}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Software Projects */}
                        <section style={{ marginBottom: '2.5rem' }}>
                            <h3 className="primary-text" style={{ fontSize: '1.4rem', color: 'var(--color-primary)', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Award size={20} /> Software Projects
                            </h3>

                            <div style={{ marginBottom: '1.2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>User Management & Admin Panel</h4>
                                    <a href="https://github.com/VishnuKR-Official/UserManagementProject" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                        View Code <ExternalLink size={10} />
                                    </a>
                                </div>
                                <p className="secondary-text" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                    Full-stack Node/Express/MongoDB application with CRUD operations and role-based access.
                                </p>
                            </div>

                            <div style={{ marginBottom: '1.2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Node.js User Authentication</h4>
                                    <a href="https://github.com/VishnuKR-Official/User-Authentication-node-project" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                        View Code <ExternalLink size={10} />
                                    </a>
                                </div>
                                <p className="secondary-text" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                    Secure backend system featuring session cookies and bcrypt password hashing.
                                </p>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Travel & Tourism UI Clone</h4>
                                </div>
                                <p className="secondary-text" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                    Responsive frontend layout featuring modern grids, itinerary sections, and sliders.
                                </p>
                            </div>
                        </section>

                        {/* Professional Experience */}
                        <section style={{ marginBottom: '2.5rem' }}>
                            <h3 className="primary-text" style={{ fontSize: '1.4rem', color: 'var(--color-primary)', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Users size={20} /> Experience
                            </h3>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Branch Sales & Service Executive</h4>
                                    <span className="secondary-text" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>08/2024 – Present</span>
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.3rem', fontSize: '0.9rem' }}>Karur Vysya Bank LTD, Ernakulam</p>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }} className="secondary-text">
                                    <li>Managed financial portfolios and customer relationships.</li>
                                    <li>Ensured compliance with banking regulations and operational standards.</li>
                                </ul>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Marketing Intern</h4>
                                    <span className="secondary-text" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>04/2023 – 05/2023</span>
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.3rem', fontSize: '0.9rem' }}>Le Meridien, Kochi</p>
                            </div>
                        </section>

                        {/* Achievements */}
                        <section>
                            <h3 className="primary-text" style={{ fontSize: '1.4rem', color: 'var(--color-primary)', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Award size={20} /> Achievements
                            </h3>
                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }} className="secondary-text">
                                <li>Guided a 5-member team in <strong>Kombatts 2k24</strong>.</li>
                                <li>Key Hospitality Organizer for <strong>Kombatts 2K23</strong> Management Fest.</li>
                                <li>Lead Organizer for <strong>Job Mela 2K23</strong> (Largest Job Fair).</li>
                                <li>Volunteered for <strong>GTEK Marathon 2k24</strong>.</li>
                                <li>Certified <strong>Microsoft Excel Specialist</strong> (2023).</li>
                            </ul>
                        </section>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div>
                        {/* Education */}
                        <section style={{ marginBottom: '2.5rem' }}>
                            <h3 className="primary-text" style={{ fontSize: '1.4rem', color: 'var(--color-primary)', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Education</h3>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '1rem' }}>MBA (Marketing & Finance)</strong>
                                <span className="secondary-text" style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.2rem' }}>2022 – 2024</span>
                                <p style={{ fontSize: '0.9rem' }}>Kochi Business School</p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Score: 67%</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '1rem' }}>BCom Computer App.</strong>
                                <span className="secondary-text" style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.2rem' }}>2019 – 2022</span>
                                <p style={{ fontSize: '0.9rem' }}>Swamy Saswathikananda College</p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Score: 72%</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '1rem' }}>Plus Two</strong>
                                <span className="secondary-text" style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.2rem' }}>2017 – 2019</span>
                                <p style={{ fontSize: '0.9rem' }}>Sacred Hearts, Thevara</p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Score: 89%</p>
                            </div>
                        </section>

                        {/* Soft Skills */}
                        <section style={{ marginBottom: '2.5rem' }}>
                            <h3 className="primary-text" style={{ fontSize: '1.4rem', color: 'var(--color-primary)', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Competencies</h3>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }} className="secondary-text">
                                <li>• Team Leadership</li>
                                <li>• Adaptability</li>
                                <li>• Communication</li>
                                <li>• MS Office Suite</li>
                                <li>• Strategic Planning</li>
                            </ul>
                        </section>

                        {/* Languages */}
                        <section style={{ marginBottom: '2.5rem' }}>
                            <h3 className="primary-text" style={{ fontSize: '1.4rem', color: 'var(--color-primary)', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Languages</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['English', 'Malayalam', 'Tamil', 'Hindi'].map(l => (
                                    <span key={l} style={{ fontSize: '0.85rem', padding: '0.1rem 0.5rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }} className="skill-tag">{l}</span>
                                ))}
                            </div>
                        </section>

                        {/* References */}
                        <section>
                            <h3 className="primary-text" style={{ fontSize: '1.4rem', color: 'var(--color-primary)', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>References</h3>
                            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="secondary-text">
                                <div>
                                    <strong>Dr. Bindhu Ann Thomas</strong><br />
                                    Principal, Kochi Business School<br />
                                    +91 94464 46493
                                </div>
                                <div>
                                    <strong>Hazel Austin</strong><br />
                                    Marketing Manager, Le Meridien<br />
                                    +91 97452 25100
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
