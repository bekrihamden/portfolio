import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form gönderme işlemi burada gerçekleştirilecek
    console.log('Form data:', formData);
    alert('Mesajınız gönderildi! (Demo amaçlı)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="section-title">İletişim <span className="highlight">Formu</span></h1>
        <div className="section-divider"></div>
        <p className="section-description">
          Projeleriniz veya sorularınız için benimle iletişime geçebilirsiniz.
          Aşağıdaki formu doldurarak mesajınızı gönderebilirsiniz.
        </p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>İletişim Bilgileri</h3>
          <p>
            Aşağıdaki iletişim bilgilerinden bana ulaşabilir veya sosyal medya hesaplarımı takip edebilirsiniz.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">E-posta:</span>
              <span className="contact-value">bekir.hamden@example.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Konum:</span>
              <span className="contact-value">İstanbul, Türkiye</span>
            </div>
          </div>
          
          <div className="social-links">
            <h4>Sosyal Medya</h4>
            <div className="social-icons">
              {/* Sosyal medya bağlantıları buraya eklenecek */}
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ad Soyad</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Adınız ve soyadınız"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="E-posta adresiniz"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Mesajınızı buraya yazın"
                rows={5}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Gönder <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
