import { Briefcase, HeartHandshake } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    return (
        <section className="experience-section section animate-fade-in">
            <div className="container">

                <div className="experience-header text-center mb-12">
                    <h1 className="section-title">Experience</h1>
                    <div className="divider"></div>
                </div>

                <div className="experience-timeline">
                    {/* Timeline Line */}
                    <div className="timeline-line"></div>

                    {/* Current Role */}
                    <div className="timeline-block">
                        <div className="timeline-icon">
                            <Briefcase size={20} />
                        </div>
                        <div className="timeline-content card">
                            <span className="timeline-date-badge">December 2025 – Present</span>
                            <h3 className="role-title">Fullstack Web Developer</h3>
                            <h4 className="company-name">Bitbyte Info</h4>
                            <p className="role-description">
                                Leading MERN stack development initiatives with a focus on scalable RESTful API design. Architecting robust MongoDB structures to ensure efficient data management and retrieval.
                            </p>
                            <div className="tech-tags">
                                <span className="tag">MERN Stack</span>
                                <span className="tag">REST APIs</span>
                                <span className="tag">MongoDB</span>
                            </div>
                        </div>
                    </div>

                    {/* Previous Role */}
                    <div className="timeline-block">
                        <div className="timeline-icon">
                            <Briefcase size={20} />
                        </div>
                        <div className="timeline-content card">
                            <span className="timeline-date-badge">January 2024 – May 2024</span>
                            <h3 className="role-title">Web Developer Intern</h3>
                            <h4 className="company-name">Amitaujas LLP</h4>
                            <p className="role-description">
                                Developed dynamic frontend user interfaces utilizing React.js to enhance user engagement. Implemented secure and efficient backend logic using PHP and MySQL.
                            </p>
                            <div className="tech-tags">
                                <span className="tag">React.js</span>
                                <span className="tag">PHP</span>
                                <span className="tag">MySQL</span>
                            </div>
                        </div>
                    </div>

                    {/* Volunteer Work */}
                    <div className="timeline-block">
                        <div className="timeline-icon volunteer-icon">
                            <HeartHandshake size={20} />
                        </div>
                        <div className="timeline-content card">
                            <span className="timeline-date-badge">Volunteer Work</span>
                            <h3 className="role-title">Community Volunteer</h3>
                            <h4 className="company-name">House of Humanity</h4>
                            <p className="role-description">
                                Actively participated in community service initiatives, collaborating with teams to deliver social impact projects and support local welfare programs.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
