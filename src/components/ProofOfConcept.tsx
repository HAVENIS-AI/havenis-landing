import React, { useState } from 'react';
import { translations } from '../locales/translations';

interface ProofOfConceptProps {
  language: 'de' | 'en' | 'fr';
}

export const ProofOfConcept: React.FC<ProofOfConceptProps> = ({ language }) => {
  const t = translations[language].poc;
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);

  const toggleStudy = (study: string) => {
    setExpandedStudy(expandedStudy === study ? null : study);
  };

  return (
    <section className="poc-section py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Study Cards */}
        <div className="space-y-6">
          {/* Fall Detection Study */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-lg border-l-4 border-green-600">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  {t.fallDetection.title}
                </h3>
                <p className="text-green-800 font-semibold mb-3">
                  {t.fallDetection.description}
                </p>
                <button
                  onClick={() => toggleStudy('fall')}
                  className="text-green-700 underline text-sm hover:text-green-900"
                >
                  {expandedStudy === 'fall' ? '▼ Details ausblenden' : '▶ Methodik anzeigen'}
                </button>
                {expandedStudy === 'fall' && (
                  <div className="mt-4 p-4 bg-white rounded-lg text-sm text-gray-700">
                    <p>{t.fallDetection.methodology}</p>
                  </div>
                )}
              </div>
              <div className="text-5xl ml-4">📊</div>
            </div>
          </div>

          {/* Respiratory Rate Study */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {t.respiratory.title}
                </h3>
                <p className="text-blue-800 font-semibold mb-3">
                  {t.respiratory.description}
                </p>
                <button
                  onClick={() => toggleStudy('respiratory')}
                  className="text-blue-700 underline text-sm hover:text-blue-900"
                >
                  {expandedStudy === 'respiratory' ? '▼ Details ausblenden' : '▶ Methodik anzeigen'}
                </button>
                {expandedStudy === 'respiratory' && (
                  <div className="mt-4 p-4 bg-white rounded-lg text-sm text-gray-700">
                    <p>{t.respiratory.methodology}</p>
                  </div>
                )}
              </div>
              <div className="text-5xl ml-4">💨</div>
            </div>
          </div>

          {/* Heart Rate Study */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl shadow-lg border-l-4 border-red-600">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-red-900 mb-2">
                  {t.heartRate.title}
                </h3>
                <p className="text-red-800 font-semibold mb-3">
                  {t.heartRate.description}
                </p>
                <button
                  onClick={() => toggleStudy('heart')}
                  className="text-red-700 underline text-sm hover:text-red-900"
                >
                  {expandedStudy === 'heart' ? '▼ Details ausblenden' : '▶ Methodik anzeigen'}
                </button>
                {expandedStudy === 'heart' && (
                  <div className="mt-4 p-4 bg-white rounded-lg text-sm text-gray-700">
                    <p>{t.heartRate.methodology}</p>
                  </div>
                )}
              </div>
              <div className="text-5xl ml-4">❤️</div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
          <p className="text-sm text-yellow-900">
            <strong>⚠️ {t.disclaimer}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofOfConcept;
