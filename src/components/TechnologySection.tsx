import React from 'react';
import { translations } from '../locales/translations';

interface TechnologySectionProps {
  language: 'de' | 'en' | 'fr';
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ language }) => {
  const t = translations[language].tech;

  return (
    <section className="technology-section py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Step 1: Capture */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
            <div className="text-5xl mb-4">📡</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{t.step1Title}</h3>
            <p className="text-gray-600">{t.step1Text}</p>
          </div>

          {/* Step 2: Analyze */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{t.step2Title}</h3>
            <p className="text-gray-600">{t.step2Text}</p>
          </div>

          {/* Step 3: Reconstruct */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{t.step3Title}</h3>
            <p className="text-gray-600">{t.step3Text}</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* TRL 6 Badge */}
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h4 className="text-lg font-bold text-green-900 mb-2">{t.trl.title}</h4>
            <p className="text-green-800 text-sm">{t.trl.text}</p>
          </div>

          {/* Patent Badge */}
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h4 className="text-lg font-bold text-blue-900 mb-2">{t.patent.title}</h4>
            <p className="text-blue-800 text-sm">{t.patent.text}</p>
          </div>

          {/* Privacy Badge */}
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h4 className="text-lg font-bold text-purple-900 mb-2">{t.privacy.title}</h4>
            <p className="text-purple-800 text-sm">{t.privacy.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
