import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content flex flex-col items-center gap-4">
                    <div className="social-links flex gap-4">
                        <a href="mailto:pathanadnan3445@gmail.com" aria-label="Email" className="social-icon">
                            <Mail size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/adnan-khan-39123a223/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/Adnan5357" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                            <Github size={20} />
                        </a>
                    </div>
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} Mohd Adnan Khan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
