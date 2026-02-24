import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Simulate form submission
            setTimeout(() => {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            }, 800);
        }
    };

    return (
        <section className="contact-section section animate-fade-in">
            <div className="container">
                <div className="contact-header text-center mb-12">
                    <h1 className="section-title">Get In Touch</h1>
                    <div className="divider"></div>
                </div>

                <div className="contact-grid">
                    {/* Contact Information */}
                    <div className="contact-info card">
                        <h2 className="card-title">Contact Information</h2>
                        <p className="contact-description">
                            Looking forward to connecting! Feel free to reach out via the form or directly using the details below.
                        </p>

                        <div className="info-list flex flex-col gap-6 mt-4">
                            <div className="info-item flex items-center gap-4">
                                <div className="info-icon">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="info-label">Email</h3>
                                    <a href="mailto:pathanadnan3445@gmail.com" className="info-value">pathanadnan3445@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-item flex items-center gap-4">
                                <div className="info-icon">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="info-label">Phone</h3>
                                    <a href="tel:+919157969570" className="info-value">+91 9157969570</a>
                                </div>
                            </div>

                            <div className="info-item flex items-center gap-4">
                                <div className="info-icon">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="info-label">Location</h3>
                                    <p className="info-value text-white text-lg">Vadodara, Gujarat</p>
                                </div>
                            </div>

                            <div className="info-item flex items-center gap-4">
                                <div className="info-icon">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h3 className="info-label">LinkedIn</h3>
                                    <a href="https://www.linkedin.com/in/adnan-khan-39123a223/" target="_blank" rel="noopener noreferrer" className="info-value">adnan-khan-39123a223</a>
                                </div>
                            </div>

                            <div className="info-item flex items-center gap-4">
                                <div className="info-icon">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <h3 className="info-label">GitHub</h3>
                                    <a href="https://github.com/Adnan5357" target="_blank" rel="noopener noreferrer" className="info-value">Adnan5357</a>
                                </div>
                            </div>
                        </div>
                        {/* Resume Download CTA */}
                        <div className="resume-download-wrapper mt-4">
                            <a href="/AdnanKhan_Resume.pdf" download className="btn btn-outline" style={{ width: '100%' }}>
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper card">
                        {submitted ? (
                            <div className="success-message flex flex-col items-center justify-center text-center">
                                <CheckCircle size={64} className="text-success" />
                                <h3 className="mt-4">Message Sent!</h3>
                                <p>Thank you for reaching out. I'll get back to you shortly.</p>
                                <button className="btn btn-outline mt-4" onClick={() => setSubmitted(false)}>
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-4">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`form-control ${errors.name ? 'error-border' : ''}`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`form-control ${errors.email ? 'error-border' : ''}`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`form-control ${errors.message ? 'error-border' : ''}`}
                                        placeholder="Your message here..."
                                    ></textarea>
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn mt-4">
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
