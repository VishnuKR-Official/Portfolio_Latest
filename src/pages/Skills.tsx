import React from 'react';

const Skills: React.FC = () => {
    const skills = [
        {
            category: "Languages & Core", items: [
                { name: "JavaScript", level: 85 },
                { name: "C Language (Basics)", level: 75 },
                { name: "Java (Basics)", level: 70 }
            ]
        },
        {
            category: "Frontend", items: [
                { name: "HTML", level: 95 },
                { name: "CSS", level: 90 },
                { name: "React", level: 80 },
                { name: "Tailwind CSS", level: 85 },
                { name: "Bootstrap", level: 85 }
            ]
        },
        {
            category: "Backend & Database", items: [
                { name: "Node.js", level: 80 },
                { name: "Express.js", level: 80 },
                { name: "MongoDB", level: 75 }
            ]
        },
        {
            category: "Tools & Others", items: [
                { name: "Git / GitHub", level: 90 },
                { name: "VS Code", level: 95 },
                { name: "Problem Solving", level: 80 }
            ]
        }
    ];

    return (
        <div className="fade-in container section">
            <h2 className="section-title">My <span>Skills</span></h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                {skills.map((category, index) => (
                    <div key={index}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                            {category.category}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {category.items.map((skill, idx) => (
                                <div key={idx}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span>{skill.name}</span>
                                        <span style={{ color: 'var(--color-primary)' }}>{skill.level}%</span>
                                    </div>
                                    <div style={{
                                        width: '100%',
                                        height: '8px',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        borderRadius: '4px',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: `${skill.level}%`,
                                            height: '100%',
                                            backgroundColor: 'var(--color-primary)',
                                            borderRadius: '4px',
                                            transition: 'width 1s ease-out'
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
