import React from 'react';
import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop, faMobileAlt, faServer } from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1 className="section-title">Neler <span className="highlight">Yapabilirim?</span></h1>
        <div className="section-divider"></div>
        <p className="section-description">
          Modern web teknolojileri kullanarak çeşitli alanlarda hizmet sunuyorum.
          İşte size sunabileceğim başlıca hizmetler:
        </p>
      </div>
      
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <h3>Frontend Geliştirme</h3>
          <p>
            Modern JavaScript framework'leri (React, Vue) kullanarak 
            interaktif ve kullanıcı dostu web uygulamaları geliştiriyorum.
          </p>
          <ul className="skill-list">
            <li>React & TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Responsive Tasarım</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faDesktop} />
          </div>
          <h3>UI/UX Tasarım</h3>
          <p>
            Kullanıcı deneyimini ön planda tutan, estetik ve işlevsel 
            arayüzler tasarlıyorum.
          </p>
          <ul className="skill-list">
            <li>Kullanıcı Arayüzü Tasarımı</li>
            <li>Kullanıcı Deneyimi</li>
            <li>Wireframing & Prototyping</li>
            <li>Görsel Tasarım</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faMobileAlt} />
          </div>
          <h3>Responsive Web Tasarım</h3>
          <p>
            Tüm cihazlarda mükemmel görünen ve çalışan, 
            mobil uyumlu web siteleri geliştiriyorum.
          </p>
          <ul className="skill-list">
            <li>Mobil Öncelikli Tasarım</li>
            <li>Cross-Browser Uyumluluk</li>
            <li>Performans Optimizasyonu</li>
            <li>Erişilebilirlik</li>
          </ul>
        </div>
        
        <div className="skill-card">
          <div className="skill-icon">
            <FontAwesomeIcon icon={faServer} />
          </div>
          <h3>Backend Entegrasyonu</h3>
          <p>
            Frontend uygulamalarını backend sistemleriyle entegre ederek 
            tam kapsamlı çözümler sunuyorum.
          </p>
          <ul className="skill-list">
            <li>RESTful API Entegrasyonu</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>API Tasarımı</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
