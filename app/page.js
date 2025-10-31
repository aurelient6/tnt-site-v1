import './style/accueil.css';
import EquipeAccueil from './components/equipeAccueil.js';
import { getAllServices } from './data/servicesData.js';
import React from 'react';
import { equipeData } from './data/equipeData.js';
import { actualitesData } from './data/actualitesData';
import ActualitesCarousel from './components/ActualitesCarousel.js';
import { INFORMATIONS } from './constantes/infos.js';
import { ROUTES } from './constantes/routes';
import Image from 'next/image';

export default async function HomePage() {
  const actualitesTriees = actualitesData.actualites.sort((a, b) => b.id - a.id);
  const services = getAllServices();
  
  return (
    <>
      <main className="main">
        <section className='title'>
          <div className="title-content">
            <h1>{INFORMATIONS.name}, votre centre canin multidisciplinaire</h1>
            <p className="title-subtitle">Bien-être, éducation et activités pour votre compagnon</p>
            <div className="title-cta">
              <a href={ROUTES.services} className="btn btn-primary">Découvrir nos services</a>
              <a href={ROUTES.contact} className="btn btn-secondary">Nous contacter</a>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>↓</span>
          </div>
        </section>
        <section className='stats-section'>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">{services.length}+</div>
              <div className="stat-label">Services</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{equipeData.equipe.length}</div>
              <div className="stat-label">Professionnels</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Passion</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5★</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </section>

        <section className='description'>
          <div className="description-content">
            <div className="description-text">
              <h2>{INFORMATIONS.name}, c&apos;est quoi?</h2>
              <p>
                Nous sommes un endroit pensé pour le bien-être et le dressage de votre chien ! 
                <br/>
                À travers différentes activités, votre chien trouvera son bonheur: bien-être, olfaction, sport, dressage,...
              </p>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">🐾</div>
                  <h3>Expertise</h3>
                  <p>Professionnels qualifiés et passionnés</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💚</div>
                  <h3>Bien-être</h3>
                  <p>Le confort de votre animal avant tout</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🏆</div>
                  <h3>Qualité</h3>
                  <p>Services premium et équipements modernes</p>
                </div>
              </div>
            </div>
            <div className="description-image"> 
              <Image 
                src="/images/accueil/description.jpg" 
                alt={`Chien heureux chez ${INFORMATIONS.name}`}
                loading="lazy"
                width={300}
                height={300}
                sizes="(max-width: 480px) 180px, (max-width: 767px) 200px, 300px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '300px',
                  aspectRatio: '1/1'
                }}
              />
            </div>              
          </div>
        </section>

        <section className='services-preview'>
          <div className="services-preview-content">
            <h2>Nos Services</h2>
            <p className="services-intro">Découvrez notre gamme complète de services pour le bien-être de votre compagnon</p>
            <div className="services-grid">
              {services.slice(0, 6).map((service) => (
                <a key={service.id} href={`${ROUTES.service}/${service.slug}`} className="service-card-mini">
                  <div className="service-icon-wrapper">
                    <span className="service-icon">🐕</span>
                  </div>
                  <h3>{service.name}</h3>
                  <p>En savoir plus →</p>
                </a>
              ))}
            </div>
            {services.length > 6 && (
              <div className="services-cta">
                <a href={ROUTES.services} className="btn btn-outline">Voir tous nos services</a>
              </div>
            )}
          </div>
        </section>
        <section className='equipe' id="equipe">
          <h2>Notre équipe</h2>
          <div className="equipe-grid">
            {equipeData.equipe.map((membre) => (
              <EquipeAccueil
                key={membre.id}
                membre={membre}
              />
            ))}
          </div>
        </section>
        <ActualitesCarousel actualites={actualitesTriees} />
      </main>
    </>
  );
}