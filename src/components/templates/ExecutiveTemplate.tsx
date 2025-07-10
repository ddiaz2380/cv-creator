
import React from 'react';
import { CVData } from '@/types/cv';

interface ExecutiveTemplateProps {
  data: CVData;
}

const ExecutiveTemplate = ({ data }: ExecutiveTemplateProps) => {
  const { personalInfo, experience, education, skills, languages, certifications } = data;

  return (
    <div className="bg-white shadow-2xl min-h-[297mm] mx-auto max-w-[210mm] font-sans">
      {/* Executive Header */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 p-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4 tracking-wide">
                {personalInfo.fullName || 'EXECUTIVE NAME'}
              </h1>
              <div className="text-xl text-gray-300 font-light mb-6 tracking-wider">
                SENIOR EXECUTIVE PROFESSIONAL
              </div>
              
              {/* Executive Summary */}
              {personalInfo.summary && (
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <p className="text-gray-200 leading-relaxed text-base italic">
                    {personalInfo.summary}
                  </p>
                </div>
              )}
            </div>
            
            {/* Executive Badge */}
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center border-4 border-white border-opacity-20">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {personalInfo.fullName ? personalInfo.fullName.split(' ').map(n => n[0]).join('').slice(0, 2) : 'EX'}
                </div>
                <div className="text-xs font-light">EXECUTIVE</div>
              </div>
            </div>
          </div>
          
          {/* Contact Bar */}
          <div className="grid grid-cols-4 gap-6 mt-8 pt-6 border-t border-white border-opacity-20">
            {personalInfo.email && (
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">EMAIL</div>
                <div className="text-sm font-medium">{personalInfo.email}</div>
              </div>
            )}
            {personalInfo.phones.length > 0 && (
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">TELÉFONO</div>
                <div className="text-sm font-medium">{personalInfo.phones[0].number}</div>
              </div>
            )}
            {personalInfo.addresses.length > 0 && (
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">UBICACIÓN</div>
                <div className="text-sm font-medium">{personalInfo.addresses[0].city}, {personalInfo.addresses[0].country}</div>
              </div>
            )}
            {personalInfo.website && (
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">WEB</div>
                <div className="text-sm font-medium">{personalInfo.website}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Column */}
        <div className="flex-1 p-8 space-y-8">
          {/* Executive Experience */}
          {experience.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-3 border-b-2 border-slate-800">
                EXECUTIVE EXPERIENCE
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative">
                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-slate-800">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-slate-900 text-xl mb-1">{exp.position}</h3>
                          <div className="text-slate-700 font-semibold text-lg">{exp.company}</div>
                          {exp.location && <div className="text-gray-600 text-sm">{exp.location}</div>}
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full">
                            {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                          </span>
                        </div>
                      </div>
                      
                      {exp.description && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 text-justify">
                          {exp.description}
                        </p>
                      )}
                      
                      {exp.achievements.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2 text-sm">KEY ACHIEVEMENTS:</h4>
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-start text-sm text-gray-700">
                                <div className="w-2 h-2 bg-slate-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                <span className="font-medium">{achievement}</span>
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
              <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-3 border-b-2 border-slate-800">
                EDUCATION & QUALIFICATIONS
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-6 shadow-sm border-l-4 border-slate-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{edu.degree}</h3>
                        <div className="text-slate-700 font-medium text-base">{edu.institution}</div>
                        {edu.location && <div className="text-gray-600 text-sm">{edu.location}</div>}
                        {edu.honors && (
                          <div className="text-slate-600 text-sm font-medium mt-1 bg-slate-100 px-2 py-1 rounded inline-block">
                            {edu.honors}
                          </div>
                        )}
                      </div>
                      {edu.graduationDate && (
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
                          {edu.graduationDate}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-slate-50 p-6 space-y-8">
          {/* Core Competencies */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-600">
                CORE COMPETENCIES
              </h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-900 text-sm">{skill.name}</span>
                      <span className="text-xs text-slate-600 font-bold">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-slate-600 to-slate-800 h-2 rounded-full transition-all duration-300" 
                        style={{ 
                          width: skill.level === 'Experto' ? '100%' : 
                                 skill.level === 'Avanzado' ? '80%' : 
                                 skill.level === 'Intermedio' ? '60%' : '40%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-600">
                LANGUAGES
              </h2>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.id} className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-900 text-sm">{lang.name}</span>
                      <span className="text-xs text-slate-600 font-bold bg-slate-100 px-2 py-1 rounded">
                        {lang.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Professional Certifications */}
          {certifications.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-600">
                CERTIFICATIONS
              </h2>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-slate-500">
                    <div className="font-medium text-slate-900 text-sm mb-1">{cert.name}</div>
                    <div className="text-slate-700 text-xs font-medium mb-1">{cert.organization}</div>
                    <div className="text-gray-600 text-xs">{cert.issueDate}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Executive Summary Box */}
          <div className="bg-gradient-to-b from-slate-800 to-gray-900 text-white p-6 rounded-lg">
            <h3 className="font-bold mb-3 text-center">EXECUTIVE PROFILE</h3>
            <div className="text-xs text-gray-300 text-center leading-relaxed">
              Senior executive with proven track record of driving organizational growth and strategic initiatives.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
