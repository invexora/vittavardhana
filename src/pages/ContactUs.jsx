import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`);
      
      // Open default mail client with pre-filled details
      window.location.href = `mailto:invest@vittavardhana.com?subject=${subject}&body=${body}`;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 5000);
    }
  };

  const contactCards = [
    {
      title: 'Our Office',
      desc: 'S.No. 218/1A/2, Maruti Homes, Vrundavan Nagari, Plot No. 4, Lane No. 1, behind Hotel Vihan, Thakare Mala, Panchawati, Nashik, Maharashtra 422003',
      icon: <MapPin size={24} className="text-gold" />,
      actionText: 'View Directions',
      actionUrl: 'https://maps.google.com/maps?q=Vittavardhana&t=m&z=10&iwloc=near'
    },
    {
      title: 'Phone Contact',
      desc: 'Speak directly with our investment managers. Available Monday through Friday, 9:30 AM to 6:30 PM.',
      icon: <Phone size={24} className="text-gold" />,
      actionText: '+91 98347 36387',
      actionUrl: 'tel:+919834736387'
    },
    {
      title: 'Email Address',
      desc: 'Send us your inquiries, tax portfolios, or schedule questions. We respond within 12 hours.',
      icon: <Mail size={24} className="text-gold" />,
      actionText: 'invest@vittavardhana.com',
      actionUrl: 'mailto:invest@vittavardhana.com'
    }
  ];

  return (
    <div className="contact-page">

      {/* HEADER SECTION */}
      <section className="contact-hero-section">
        <div className="container animate-fade-in-up contact-hero-content">
          <span className="section-label">Get In Touch</span>
          <h1 className="display-lg contact-hero-title">Contact Us</h1>
          <p className="contact-hero-lead">
            Get in touch to schedule your introductory consultation or request detailed prospectus documents.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS GRID */}
      <section className="scroll-reveal contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            {contactCards.map((card, idx) => (
              <div key={idx} className="glass-card contact-info-card">
                <div className="contact-info-top">
                  <div className="feature-card-icon-wrapper">
                    {card.icon}
                  </div>
                  <div className="contact-info-text">
                    <h3 className="contact-info-title">{card.title}</h3>
                    <p className="contact-info-desc">{card.desc}</p>
                  </div>
                </div>
                <a
                  href={card.actionUrl}
                  target={card.actionUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="button-primary contact-info-action"
                >
                  {card.actionText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP & FORM GRID */}
      <section className="scroll-reveal contact-form-section">
        <div className="container">
          <div className="contact-form-grid">

            {/* Contact Form Card */}
            <div className="glass-card contact-form-card">
              <h2 className="contact-form-title">Send A Message</h2>
              {submitted ? (
                <div className="contact-form-success">
                  <div className="contact-form-success-icon">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="contact-form-success-title">Message Dispatched</h3>
                  <p className="contact-form-success-desc">
                    Thank you! Your message has been sent to our corporate inbox. A wealth adviser will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="contact-form-body">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </div>

                  <div className="contact-form-row">
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@example.com"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your investment inquiry, asset status, or questions here..."
                      className="form-input contact-form-textarea"
                    />
                  </div>

                  <button type="submit" className="button-primary contact-form-submit">
                    Send Secure Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map & Info Panel */}
            <div className="contact-map-column">
              {/* Map frame */}
              <div className="contact-map-wrapper">
                <iframe
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Vittavardhana&t=m&z=12&output=embed&iwloc=near"
                  title="Vittavardhana Location Map"
                  aria-label="Vittavardhana Office Map"
                  className="contact-map-iframe"
                />
              </div>

              {/* Operating hours panel */}
              <div className="glass-card contact-hours-card">
                <Clock size={24} className="text-gold contact-hours-icon" />
                <div className="contact-hours-text">
                  <span className="contact-hours-title">Advisory Business Hours</span>
                  <span className="contact-hours-detail">
                    Monday - Friday: 9:30 AM - 6:30 PM <span className="contact-hours-sep">|</span> Saturday: By Appointment Only
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
