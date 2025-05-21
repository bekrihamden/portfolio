import React from 'react';
import '../styles/Portfolio.css';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Web Sitesi',
      description: 'React ve Node.js kullanılarak geliştirilen tam kapsamlı bir e-ticaret platformu.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: 'project-placeholder-1'
    },
    {
      id: 2,
      title: 'Kişisel Blog Uygulaması',
      description: 'Modern tasarıma sahip, içerik yönetim sistemli blog uygulaması.',
      technologies: ['React', 'TypeScript', 'Firebase'],
      image: 'project-placeholder-2'
    },
    {
      id: 3,
      title: 'Hava Durumu Uygulaması',
      description: 'Gerçek zamanlı hava durumu verilerini gösteren interaktif uygulama.',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      image: 'project-placeholder-3'
    },
    {
      id: 4,
      title: 'Görev Takip Uygulaması',
      description: 'Kullanıcıların görevlerini organize etmelerine yardımcı olan web uygulaması.',
      technologies: ['React', 'Redux', 'LocalStorage'],
      image: 'project-placeholder-4'
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1 className="section-title">Portfolyo <span className="highlight">Çalışmalarım</span></h1>
        <div className="section-divider"></div>
        <p className="section-description">
          İşte geliştirdiğim bazı projeler. Her projede modern teknolojiler ve 
          kullanıcı odaklı tasarım prensiplerini uygulamaya çalışıyorum.
        </p>
      </div>
      
      <div className="portfolio-grid">
        {projects.map(project => (
          <div className="portfolio-item" key={project.id}>
            <div className={`portfolio-image ${project.image}`}>
              <div className="portfolio-overlay">
                <div className="portfolio-buttons">
                  <button className="portfolio-btn">Detaylar</button>
                  <button className="portfolio-btn">Demo</button>
                </div>
              </div>
            </div>
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
