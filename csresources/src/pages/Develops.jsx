import { useEffect, useState } from 'react';
import develops from '../data/develops';
import portfolio from '../data/portfolio';
import './Develops.css';

const Develops = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // small reveal observer for existing .glass-panel elements
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.glass-panel').forEach(panel => {
      panel.classList.add('transition-all', 'duration-1000', 'translate-y-10', 'opacity-0');
      observer.observe(panel);
    });

    return () => observer.disconnect();
  }, []);

  const project = portfolio[activeIndex];
  const item = project.items[0];

  const goPrevious = () => setActiveIndex((c) => (c === 0 ? portfolio.length - 1 : c - 1));
  const goNext = () => setActiveIndex((c) => (c === portfolio.length - 1 ? 0 : c + 1));

  return (
    <div className="develops-page">

      {/* Hero */}
      <section className="hero">
        <h1 className='page-title'>UMB Develops</h1>
        <p className='page-description'>
          Building real software for real clients while helping students gain
          industry experience.
        </p>
      </section>

      <div className='section1'>
        <div className='info-section'>
          <h8>WHAT IS DEVELOPS?</h8> 
          <span className='page-description'> Develops is a student-led software development group under UMass Boston's Computer Science Club.</span>
          <span className='page-description'>Our teams of develops create innovative products for clients each semester, bridgeng the gap between academic theory and industry reality.</span>
          <span className='page-description'>We are constantly growing our team to strength our skills as programmers, designers, and innovators.</span>
        </div>

        <div className="goal-section">
          <span className="goal-sub-section">Our goal is to provide students with an opportunity to develop software in a professional setting while providing clients with industry grade products.</span>
        </div>
      </div>

      <div className='student-section'>
        <h3 className='title-section'>Students</h3>
        <p className='sub-section'>Develops gives students the opportunity to learn and practice software development for a real client. While working with develops, students use industry standard practices and technology during the process of creating their projects. Students will also develop vital leadership skills through our Team Lead Role.</p>
      </div>

      <div className='client-section'>
        <h4 className='title-section'>Clients</h4>
        <p className='sub-section'>We are open to collaborate with any clients who want to work with a passionate team of students who are ready to prove their skills. Over the course of a semester, you will be in collaboration with one of our teams to create a product of your specification. Through working with develops, you receive a free project and meaningful connections with developers!</p>
      </div>

      {/* Portfolio */}
      <section className="portfolio-section">
        <h5>Portfolio</h5>
        
        <div className="portfolio-carousel">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goPrevious}
            aria-label="Previous project"
          >
            ‹
          </button>

          <div className="project-card carousel-card">
            <div className="project-card-header">
              <h6>{project.category}</h6>
              <span className="year">{item.year}</span>
            </div>

            {item.description && <p>{item.description}</p>}

            <ul>
              {item.note1 && <li>{item.note1}</li>}
              {item.note2 && <li>{item.note2}</li>}
              {item.note3 && <li>{item.note3}</li>}
            </ul>

            <div className="tech-stack">
              {item.techstack}
            </div>
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goNext}
            aria-label="Next project"
          >
            ›
          </button>
        </div>

        <div className="carousel-indicator">
          {activeIndex + 1} / {portfolio.length}
        </div>
      </section>

    </div>
  );
};

export default Develops;