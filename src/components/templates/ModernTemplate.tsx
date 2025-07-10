
import React from 'react';
import { CVData } from '@/types/cv';

interface ModernTemplateProps {
  data: CVData;
}

const ModernTemplate = ({ data }: ModernTemplateProps) => {
  const { personalInfo, experience, education, skills, languages, certifications } = data;

  return (
    <div className="bg-white shadow-2xl min-h-[297mm] mx-auto max-w-[210mm] font-sans overflow-hidden">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-800 text-white relative">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 p-8">
          <div className="flex items-center gap-8">
            {/* Profile Circle */}
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white border-opacity-30">
              <div className="w-24 h-24 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {personalInfo.fullName ? personalInfo.fullName.split(' ').map(n => n[0]).join('').slice(0, 2) : 'CV'}
                </span>
              </div>
            </div>
            
            {/* Name and Title */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-3 tracking-wide">
                {personalInfo.fullName || 'NOMBRE COMPLETO'}
              </h1>
              <div className="text-xl text-teal-100 font-light mb-4">PROFESIONAL</div>
              
              {/* Contact Info in Header */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  {personalInfo.email && (
                    <div className="flex items-center text-teal-100">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {personalInfo.email}
                    </div>
                  )}
                  {personalInfo.phones.length > 0 && (
                    <div className="flex items-center text-teal-100">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {personalInfo.phones[0].number}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  {personalInfo.addresses.length > 0 && (
                    <div className="flex items-center text-teal-100">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {personalInfo.addresses[0].city}, {personalInfo.addresses[0].country}
                    </div>
                  )}
                  {personalInfo.website && (
                    <div className="flex items-center text-teal-100">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {personalInfo.website}
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
        <div className="w-80 bg-gray-50 min-h-full p-6 space-y-8">
          {/* Professional Summary */}
          {personalInfo.summary && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-600">
                PERFIL PROFESIONAL
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed text-justify">
                {personalInfo.summary}
              </p>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-600">
                COMPETENCIAS
              </h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                      <span className="text-xs text-teal-600 font-bold">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-teal-500 to-cyan-600 h-2 rounded-full transition-all duration-300" 
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
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-600">
                IDIOMAS
              </h2>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 text-sm">{lang.name}</span>
                    <span className="text-xs text-teal-600 font-bold bg-teal-50 px-2 py-1 rounded">
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
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-600">
                CERTIFICACIONES
              </h2>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-teal-500">
                    <div className="font-medium text-gray-900 text-sm mb-1">{cert.name}</div>
                    <div className="text-teal-700 text-xs font-medium mb-1">{cert.organization}</div>
                    <div className="text-gray-600 text-xs">{cert.issueDate}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 space-y-8">
          {/* Experience */}
          {experience.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-teal-600">
                EXPERIENCIA PROFESIONAL
              </h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-8 border-l-2 border-teal-200">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-gray-900 text-xl">{exp.position}</h3>
                        <span className="text-sm text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full">
                          {exp.startDate} - {exp.current ? 'Presente' : exp.endDate}
                        </span>
                      </div>
                      <div className="text-teal-700 font-semibold mb-3 text-lg">
                        {exp.company} {exp.location && `• ${exp.location}`}
                      </div>
                      {exp.description && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-4 text-justify">{exp.description}</p>
                      )}
                      {exp.achievements.length > 0 && (
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-start text-sm text-gray-700">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </div>
                          ))}
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-teal-600">
                FORMACIÓN ACADÉMICA
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{edu.degree}</h3>
                        <div className="text-teal-700 font-medium text-base">{edu.institution}</div>
                        {edu.location && <div className="text-gray-600 text-sm">{edu.location}</div>}
                        {edu.honors && <div className="text-teal-600 text-sm font-medium mt-1">{edu.honors}</div>}
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
      </div>
    </div>
  );
};

export default ModernTemplate;
