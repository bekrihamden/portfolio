import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/SocialLinks.css';

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links-container">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://github.com/bekrihamden" target="_blank" rel="noopener noreferrer" className="social-link github">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );
};

export default SocialLinks;
