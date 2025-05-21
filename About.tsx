import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="section-title">Ben <span className="highlight">Kimim?</span></h1>
        <div className="section-divider"></div>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <div className="image-placeholder">
            <span>BH</span>
          </div>
        </div>
        
        <div className="about-text">
          <h2>Bekir Hamden</h2>
          <h3>Web Geliştirici & Tasarımcı</h3>
          
          <p>
            Merhaba! Ben Bekir Hamden, modern web teknolojileri konusunda tutkulu bir geliştiriciyim. 
            Kullanıcı deneyimini ön planda tutan, estetik ve işlevsel web siteleri ve uygulamalar geliştirmeye odaklanıyorum.
          </p>
          
          <p>
            Frontend geliştirme alanında React, TypeScript ve modern CSS teknolojileri konusunda deneyimliyim. 
            Her projede kullanıcı dostu arayüzler oluşturmak ve modern tasarım prensiplerini uygulamak için çalışıyorum.
          </p>
          
          <p>
            Sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum. Yeni teknolojileri keşfetmek, 
            problem çözmek ve yaratıcı çözümler üretmek benim için bir tutku.
          </p>
          
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">İsim:</span>
              <span className="detail-value">Bekir Hamden</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">E-posta:</span>
              <span className="detail-value">bekir.hamden@example.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Konum:</span>
              <span className="detail-value">İstanbul, Türkiye</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Uzmanlık:</span>
              <span className="detail-value">Web Geliştirme, UI/UX Tasarım</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
