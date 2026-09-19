import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        let tempErrors: { [key: string]: string } = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
        if (!formData.message) tempErrors.message = "Message is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitted(true);

            // EMAILJS INTEGRATION
            // Replace these Placeholders with your actual EmailJS keys!
            // 1. Sign up at https://www.emailjs.com/
            // 2. Create a service (e.g., Gmail) -> Get SERVICE_ID
            // 3. Create a template -> Get TEMPLATE_ID
            // 4. Go to Account > API Keys -> Get PUBLIC_KEY

            const SERVICE_ID = 'service_3kegl6h';
            const TEMPLATE_ID = 'template_z82x6ec';
            const PUBLIC_KEY = 'q3js1XcnqNymPjJzg';

            emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || 'New Portfolio Inquiry',
                    message: formData.message,
                },
                PUBLIC_KEY
            ).then((result) => {
                console.log('Email sent successfully:', result.text);
                setIsSubmitted(false);
                alert('Message Sent Successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, (error) => {
                console.error('Email sending failed:', error.text);
                setIsSubmitted(false);
                alert('Failed to send message. Please try again later.');
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="fade-in container section">
            <h2 className="section-title">Get In <span>Touch</span></h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                {/* Contact Info */}
                <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Let's Talk</h3>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                        Have a project in mind or want to collaborate? Feel free to send me a message.
                        I'm currently open to new opportunities.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Phone</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>+91 9946524862</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Email</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>vishnu.kr2050@gmail.com</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Location</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>Kerala, India</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>Social Profiles</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://github.com/VishnuKR-Official" target="_blank" rel="noopener noreferrer" style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    padding: '0.75rem 1.5rem', backgroundColor: 'var(--color-bg-secondary)',
                                    color: 'white', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <Github size={20} /> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/vishnu-kr2050/" target="_blank" rel="noopener noreferrer" style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    padding: '0.75rem 1.5rem', backgroundColor: '#0077b5',
                                    color: 'white', borderRadius: '50px'
                                }}>
                                    <Linkedin size={20} /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: 'var(--color-bg)',
                                    border: `1px solid ${errors.name ? 'var(--color-secondary)' : 'rgba(255,255,255,0.1)'}`,
                                    borderRadius: '0.5rem',
                                    color: 'white'
                                }}
                            />
                            {errors.name && <span style={{ color: 'var(--color-secondary)', fontSize: '0.875rem' }}>{errors.name}</span>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: 'var(--color-bg)',
                                    border: `1px solid ${errors.email ? 'var(--color-secondary)' : 'rgba(255,255,255,0.1)'}`,
                                    borderRadius: '0.5rem',
                                    color: 'white'
                                }}
                            />
                            {errors.email && <span style={{ color: 'var(--color-secondary)', fontSize: '0.875rem' }}>{errors.email}</span>}
                        </div>

                        <div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: 'var(--color-bg)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '0.5rem',
                                    color: 'white'
                                }}
                            />
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: 'var(--color-bg)',
                                    border: `1px solid ${errors.message ? 'var(--color-secondary)' : 'rgba(255,255,255,0.1)'}`,
                                    borderRadius: '0.5rem',
                                    color: 'white',
                                    resize: 'vertical'
                                }}
                            />
                            {errors.message && <span style={{ color: 'var(--color-secondary)', fontSize: '0.875rem' }}>{errors.message}</span>}
                        </div>

                        <button type="submit" style={{
                            padding: '1rem',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: '0.5rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}>
                            <Send size={18} /> {isSubmitted ? 'Message Sent!' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
