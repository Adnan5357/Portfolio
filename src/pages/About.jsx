import { GraduationCap, Award, BookOpen } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section className="about-section section animate-fade-in">
            <div className="container">

                <div className="about-header text-center mb-12">
                    <h1 className="section-title">About Me</h1>
                    <div className="divider"></div>
                </div>

                <div className="about-grid">
                    {/* Professional Bio */}
                    <div className="bio-card card">
                        <h2 className="card-title flex items-center gap-2">
                            <BookOpen className="text-accent" />
                            Professional Bio
                        </h2>
                        <p className="bio-text">
                            I am a results-driven Full Stack Developer with a passion for building scalable, production-ready web applications. Currently pursuing my Master of Computer Applications (MCA) at Parul University, I have cultivated a strong foundation in modern development practices, ranging from MERN stack architecture to relational database management with PHP and MySQL.
                        </p>
                        <p className="bio-text mt-4">
                            My approach to engineering is defined by efficiency and continuous learning. I actively leverage AI-powered tools not as a replacement for core coding skills, but as a catalyst to accelerate development velocity and ensure high-quality, clean code. With 8+ months of professional experience—including my current role at Bitbyte Info—I specialize in creating seamless, user-focused interfaces and robust RESTful APIs.
                        </p>
                    </div>

                    <div className="education-sidebar flex flex-col gap-6">
                        {/* Education Timeline */}
                        <div className="education-card card">
                            <h2 className="card-title flex items-center gap-2">
                                <GraduationCap className="text-accent" />
                                Education
                            </h2>

                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <h3 className="timeline-title">Master of Computer Applications (MCA)</h3>
                                    <p className="timeline-subtitle">Parul University | Fullstack Web Development</p>
                                    <p className="timeline-date">August 2024 – June 2026</p>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <h3 className="timeline-title">Bachelor of Computer Application (BCA)</h3>
                                    <p className="timeline-subtitle">Navrachana University | Computer Programming</p>
                                    <p className="timeline-date">October 2021 – December 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="cert-card card">
                            <h2 className="card-title flex items-center gap-2">
                                <Award className="text-accent" />
                                Certifications
                            </h2>
                            <ul className="cert-list">
                                <li className="cert-item">AWS Academy Introduction to Cloud</li>
                                <li className="cert-item">Introduction to Generative AI</li>
                                <li className="cert-item">Data Science Using Python</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
