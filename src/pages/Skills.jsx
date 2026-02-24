import { Monitor, Server, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: 'Frontend',
            icon: <Monitor size={24} />,
            items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap'],
        },
        {
            category: 'Backend & Database',
            icon: <Server size={24} />,
            items: ['Node.js', 'Express.js', 'PHP', 'MongoDB', 'MySQL'],
        },
        {
            category: 'Tools & Technologies',
            icon: <Wrench size={24} />,
            items: ['Git', 'AWS Cloud Services', 'AI-Assisted Development'],
        },
    ];

    return (
        <section className="skills-section section animate-fade-in">
            <div className="container">

                <div className="skills-header text-center mb-12">
                    <h1 className="section-title">Technical Skills</h1>
                    <div className="divider"></div>
                </div>

                <div className="skills-grid">
                    {skillsData.map((skillGroup, index) => (
                        <div className="skill-card card" key={index}>
                            <div className="skill-card-header">
                                <div className="skill-icon">
                                    {skillGroup.icon}
                                </div>
                                <h2 className="skill-category">{skillGroup.category}</h2>
                            </div>
                            <ul className="skill-list">
                                {skillGroup.items.map((skill, idx) => (
                                    <li className="skill-item" key={idx}>
                                        <span className="skill-dot"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
