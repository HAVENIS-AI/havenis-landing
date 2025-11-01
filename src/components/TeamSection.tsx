import React from 'react';
import { translations } from '../locales/translations';

interface TeamSectionProps {
  language: 'de' | 'en' | 'fr';
}

export const TeamSection: React.FC<TeamSectionProps> = ({ language }) => {
  const t = translations[language].team;

  const teamMembers = [
    {
      data: t.ceo,
      color: 'blue',
      emoji: '👨‍💼'
    },
    {
      data: t.cto,
      color: 'indigo',
      emoji: '👨‍💻'
    },
    {
      data: t.coo,
      color: 'purple',
      emoji: '👩‍💼'
    }
  ];

  return (
    <section className="team-section py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg border-t-4 border-${member.color}-500 hover:shadow-2xl transition-shadow`}
            >
              {/* Avatar */}
              <div className="text-6xl mb-4 text-center">{member.emoji}</div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                {member.data.name}
              </h3>

              {/* Role */}
              <p className={`text-${member.color}-600 font-semibold mb-4 text-center`}>
                {member.data.role}
              </p>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {member.data.bio}
              </p>

              {/* LinkedIn Link */}
              <a
                href={member.data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-2 bg-${member.color}-100 text-${member.color}-700 rounded-lg hover:bg-${member.color}-200 transition-colors`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
