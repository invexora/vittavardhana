import React from 'react';
import { Quote } from 'lucide-react';
import './TestimonialMarquee.css';

const testimonials = [
  {
    name: 'Kishor Patil',
    role: 'Business Owner',
    initials: 'KP',
    quote: 'Vittavardhana helped me structure my retirement funds with absolute transparency. Their advisory services have been game-changing for my family.'
  },
  {
    name: 'Susparsha Gaikwad',
    role: 'Senior Consultant',
    initials: 'SG',
    quote: 'Their portfolio restructuring advice simplified our asset allocation and significantly improved our tax-adjusted returns.'
  },
  {
    name: 'Prakash Patil',
    role: 'Real Estate Developer',
    initials: 'PP',
    quote: 'They bring complete integrity to wealth management. Their transparent models and expert stock evaluation are highly reliable.'
  }
];

const TestimonialMarquee = () => {
  // Duplicate array to ensure seamless looping
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="testimonial-marquee-section">
      <div className="container" style={{ marginBottom: '3rem' }}>
        <div className="flex flex-col gap-md" style={{ textAlign: 'center', alignItems: 'center' }}>
          <span className="section-label">Trust Index</span>
          <h2 className="display-lg">Client Testimonials</h2>
          <p className="section-subtitle" style={{ maxWidth: '700px' }}>
            Trusted by over 500+ corporate leaders, agriculturists, and generational families to preserve capital.
          </p>
        </div>
      </div>
      
      <div className="testimonial-marquee-wrapper">
        <div className="testimonial-marquee-track">
          {marqueeItems.map((t, idx) => (
            <div className="testimonial-marquee-card" key={idx}>
              <div className="flex flex-col gap-md" style={{ flexGrow: 1 }}>
                <Quote size={32} style={{ color: 'rgba(16, 185, 129, 0.5)' }} />
                <p className="testimonial-marquee-quote">"{t.quote}"</p>
              </div>
              <div className="testimonial-author" style={{ marginTop: '2rem' }}>
                <div className="testimonial-avatar" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
