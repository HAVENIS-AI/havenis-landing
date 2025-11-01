import React from 'react';
import { translations } from '../locales/translations';

interface HeroProps {
  language: 'de' | 'en' | 'fr';
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language].hero;

  return (
    <section className="hero-section bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-4xl mx-auto">
          {t.subtitle}
        </p>

        {/* Technical Subtitle */}
        <p className="text-sm md:text-base mb-8 text-gray-300 max-w-3xl mx-auto italic">
          {t.technicalSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <a
            href="/whitepaper.pdf"
            download
            className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            📄 {t.cta1}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-all transform hover:scale-105"
          >
            🚀 {t.cta2}
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>DSGVO/GDPR konform</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Patent angemeldet</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>TRL 6 erreicht</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
