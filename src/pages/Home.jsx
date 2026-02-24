import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <section className="home-section flex flex-col justify-center items-center">
            <div className="container home-container animate-fade-in">
                <div className="hero-content">
                    <p className="greeting">Hi, I'm</p>
                    <h1 className="name">Mohd Adnan Khan</h1>
                    <h2 className="title">Full Stack Developer</h2>

                    <p className="description">
                        I'm specialized in MERN stack, PHP, and AI-assisted development.
                        Dedicated to building scalable, production-ready web applications using modern engineering practices.
                    </p>

                    <div className="cta-group flex gap-4">
                        <Link to="/experience" className="btn btn-primary">
                            View My Work
                            <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Contact Me
                            <Mail size={18} />
                        </Link>
                    </div>
                </div>

                <div className="hero-avatar-wrapper">
                    <div className="simple-avatar-container">
                        <img src="/Adnan_Avatar.png" alt="Mohd Adnan Khan Avatar" className="simple-avatar" />
                    </div>
                </div>
            </div>

            <div className="background-glow hidden-mobile"></div>
        </section>
    );
};

export default Home;
