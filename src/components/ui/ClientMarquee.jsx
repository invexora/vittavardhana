import React from 'react';
import { Briefcase, Landmark, TrendingUp, Globe, Users, Shield, Building, Award } from 'lucide-react';
import './ClientMarquee.css';

const clients = [
  { name: 'Acme Corp', icon: <Briefcase size={28} /> },
  { name: 'Horizon Trust', icon: <Landmark size={28} /> },
  { name: 'Apex Wealth', icon: <TrendingUp size={28} /> },
  { name: 'Global Ventures', icon: <Globe size={28} /> },
  { name: 'Alliance Partners', icon: <Users size={28} /> },
  { name: 'Vanguard Security', icon: <Shield size={28} /> },
  { name: 'Stellar Real Estate', icon: <Building size={28} /> },
  { name: 'Prime Holdings', icon: <Award size={28} /> },
];

const ClientMarquee = () => {
  // Duplicate array to ensure seamless looping
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="client-marquee-section">
      <div className="client-marquee-container">
        <div className="client-marquee-header">
          <span className="section-label" style={{ margin: '0 auto' }}>Trusted Partners</span>
          <h2 className="display-md" style={{ textAlign: 'center', marginTop: '1rem', color: '#fff' }}>Empowering Industry Leaders</h2>
        </div>
        
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeItems.map((client, idx) => (
              <div className="marquee-item" key={idx}>
                <div className="marquee-icon">{client.icon}</div>
                <span className="marquee-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
