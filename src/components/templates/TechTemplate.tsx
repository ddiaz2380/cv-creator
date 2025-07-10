
import React from 'react';
import { CVData } from '@/types/cv';

interface TechTemplateProps {
  data: CVData;
}

const TechTemplate = ({ data }: TechTemplateProps) => {
  const { personalInfo, experience, education, skills, languages, certifications } = data;

  return (
    <div className="bg-gray-900 shadow-2xl min-h-[297mm] mx-auto max-w-[210mm] font-mono text-white overflow-hidden">
      {/* Tech Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 p-8">
          <div className="flex items-center gap-8">
            {/* Avatar */}
            <div className="w-28 h-28 bg-black bg-opacity-30 rounded-lg flex items-center justify-center border-2 border-cyan-400 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">
                  {personalInfo.fullName ? personalInfo.fullName.split(' ').map(n => n[0]).join('').slice(0, 2) : 'DEV'}
                </div>
                <div className="text-xs text-cyan-300">DEVELOPER</div>
              </div>
            </div>
            
            {/* Name and Title */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3 text-white">
                {personalInfo.fullName || 'DEVELOPER NAME'}
              </h1>
              <div className="text-lg text-cyan-300 font-light mb-4 tracking-wider">
                &lt;FULL STACK DEVELOPER /&gt;
              </div>
              
              {/* Tech Contact Info */}
              <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                <div className="space-y-2">
                  {personalInfo.email && (
                    <div className="flex items-center text-cyan-200">
                      <span className="text-cyan-400 mr-2">$</span>
                      <span>email: {personalInfo.email}</span>
                    </div>
                  )}
                  {personalInfo.phones.length > 0 && (
                    <div className="flex items-center text-cyan-200">
                      <span className="text-cyan-400 mr-2">$</span>
                      <span>phone: {personalInfo.phones[0].number}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  {personalInfo.addresses.length > 0 && (
                    <div className="flex items-center text-cyan-200">
                      <span className="text-cyan-400 mr-2">$</span>
                      <span>location: {personalInfo.addresses[0].city}, {personalInfo.addresses[0].country}</span>
                    </div>
                  )}
                  {personalInfo.website && (
                    <div className="flex items-center text-cyan-200">
                      <span className="text-cyan-400 mr-2">$</span>
                      <span>web: {personalInfo.website}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-800 p-6 space-y-8">
          {/* About Section */}
          {personalInfo.summary && (
            <div>
              <h2 className="text-lg font-bold text-cyan-400 mb-4 font-mono">
                // ABOUT_ME
              </h2>
              <div className="bg-gray-900 p-4 rounded border-l-4 border-cyan-500">
                <p className="text-gray-300 text-sm leading-relaxed font-mono">
                  {personalInfo.summary}
                </p>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-cyan-400 mb-4 font-mono">
                // TECH_STACK
              </h2>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id} className="bg-gray-900 p-3 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm font-mono">{skill.name}</span>
                      <span className="text-xs text-cyan-400 font-mono">{skill.level}</span>
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-6 h-2 rounded ${
                            (skill.level === 'Experto' && level <= 5) ||
                            (skill.level === 'Avanzado' && level <= 4) ||
                            (skill.level === 'Intermedio' && level <= 3) ||
                            (skill.level === 'Básico' && level <= 2)
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                              : 'bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-cyan-400 mb-4 font-mono">
                // LANGUAGES
              </h2>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div key={lang.id} className="bg-gray-900 p-3 rounded flex justify-between items-center">
                    <span className="text-white text-sm font-mono">{lang.name}</span>
                    <span className="text-xs text-cyan-400 font-mono bg-gray-800 px-2 py-1 rounded">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-cyan-400 mb-4 font-mono">
                // CERTIFICATIONS
              </h2>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-gray-900 p-3 rounded border-l-2 border-purple-500">
                    <div className="text-white text-sm font-mono mb-1">{cert.name}</div>
                    <div className="text-cyan-400 text-xs font-mono mb-1">{cert.organization}</div>
                    <div className="text-gray-400 text-xs font-mono">{cert.issueDate}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-900 p-8 space-y-8">
          {/* Experience */}
          {experience.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
                // WORK_EXPERIENCE
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white font-mono mb-1">{exp.position}</h3>
                          <div className="text-cyan-400 font-mono text-base">{exp.company}</div>
                          {exp.location && <div className="text-gray-400 font-mono text-sm">{exp.location}</div>}
                        </div>
                        <span className="text-sm text-cyan-400 font-mono bg-gray-900 px-3 py-1 rounded">
                          {exp.startDate} - {exp.current ? 'CURRENT' : exp.endDate}
                        </span>
                      </div>
                      
                      {exp.description && (
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 font-mono">
                          {exp.description}
                        </p>
                      )}
                      
                      {exp.achievements.length > 0 && (
                        <div>
                          <h4 className="text-cyan-400 font-mono text-sm mb-2">// ACHIEVEMENTS:</h4>
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-start text-sm text-gray-300 font-mono">
                                <span className="text-cyan-400 mr-3">&gt;</span>
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
                // EDUCATION
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-white font-mono">{edu.degree}</h3>
                        <div className="text-cyan-400 font-mono text-base">{edu.institution}</div>
                        {edu.location && <div className="text-gray-400 font-mono text-sm">{edu.location}</div>}
                        {edu.honors && (
                          <div className="text-purple-400 font-mono text-sm mt-1 bg-gray-900 px-2 py-1 rounded inline-block">
                            {edu.honors}
                          </div>
                        )}
                      </div>
                      {edu.graduationDate && (
                        <span className="text-sm text-gray-400 font-mono bg-gray-900 px-3 py-1 rounded">
                          {edu.graduationDate}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-700">
            <div className="text-cyan-400 font-mono text-sm">
              // END_OF_RESUME
            </div>
            <div className="text-gray-500 font-mono text-xs mt-2">
              console.log("Thanks for reviewing my profile!");
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTemplate;
