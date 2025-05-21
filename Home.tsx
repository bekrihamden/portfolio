import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Merhaba, Ben <span className="highlight">Bekir Hamden</span></h1>
        <h2 className="home-subtitle">Web Geliştirici & Tasarımcı</h2>
        <p className="home-description">
          Modern ve kullanıcı dostu web siteleri ve uygulamalar geliştiriyorum. 
          Yaratıcı çözümler ve etkileyici kullanıcı deneyimleri sunmak için buradayım.
        </p>
        <div className="home-buttons">
          <Link to="/portfolio" className="btn btn-primary">
            Çalışmalarımı Gör <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            İletişime Geç
          </Link>
        </div>
      </div>
      <div className="home-image">
        <div className="image-placeholder">
          <span>BH</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
