
import React from 'react';
import { CVData } from '@/types/cv';

interface ClassicTemplateProps {
  data: CVData;
}

const ClassicTemplate = ({ data }: ClassicTemplateProps) => {
  const { personalInfo, experience, education, skills, languages } = data;

  return (
    <div className="bg-white shadow-2xl min-h-[297mm] p-8 mx-auto max-w-[210mm] font-serif">
      {/* Elegant Header */}
      <div className="text-center border-b-4 border-amber-600 pb-8 mb-8 bg-gradient-to-r from-amber-50 to-orange-50 -mx-8 px-8 pt-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-widest">
          {personalInfo.fullName || 'NOMBRE COMPLETO'}
        </h1>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
        <div className="text-gray-600 text-lg font-light">
          PROFESIONAL DESTACADO
        </div>
        
        {/* Contact Grid */}
        <div className="grid grid-cols-2 gap-8 mt-6 text-gray-700">
          <div className="space-y-2">
            {personalInfo.email && (
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-sm">{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phones.length > 0 && (
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-sm">{personalInfo.phones[0].number}</span>
              </div>
            )}
          </div>
          <div className="space-y-2">
            {personalInfo.addresses.length > 0 && (
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-sm">{personalInfo.addresses[0].city}, {personalInfo.addresses[0].country}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-sm">{personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      {personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 text-center">
            PERFIL PROFESIONAL
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-justify italic text-lg">
              {personalInfo.summary}
            </p>
          </div>
        </div>
      )}

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-8">
          {/* Experience */}
          {experience.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-amber-700 mb-6 text-center">
                TRAYECTORIA PROFESIONAL
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-4 border-amber-300 pl-6 relative">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-amber-600 rounded-full"></div>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg shadow-sm">
                      <div className="flex justify-between items-baseline mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                        <span className="text-amber-600 italic text-sm font-medium bg-white px-3 py-1 rounded-full shadow-sm">
                          {exp.startDate} - {exp.current ? 'Presente' : exp.endDate}
                        </span>
                      </div>
                      <div className="text-amber-700 font-semibold mb-3 text-lg">
                        {exp.company} {exp.location && `• ${exp.location}`}
                      </div>
                      {exp.description && (
                        <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                          {exp.description}
                        </p>
                      )}
                      {exp.achievements.length > 0 && (
                        <ul className="space-y-2 text-gray-700">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-amber-600 mr-3 mt-1 text-lg">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
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
              <h2 className="text-2xl font-bold text-amber-700 mb-6 text-center">
                FORMACIÓN ACADÉMICA
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-6"></div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg shadow-sm border-l-4 border-amber-600">
                    <div className="flex justify-between items-baseline">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                        <div className="text-amber-700 font-medium text-base">{edu.institution}</div>
                        {edu.location && <div className="text-gray-600">{edu.location}</div>}
                        {edu.honors && <div className="text-amber-600 italic font-medium">{edu.honors}</div>}
                      </div>
                      {edu.graduationDate && (
                        <span className="text-gray-500 italic text-sm bg-white px-3 py-1 rounded-full shadow-sm">
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

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-amber-700 mb-4 text-center">
                COMPETENCIAS
              </h2>
              <div className="w-12 h-1 bg-amber-600 mx-auto mb-4"></div>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="bg-amber-50 p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                      <span className="text-xs text-amber-700 font-bold">{skill.level}</span>
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
                              ? 'bg-amber-600'
                              : 'bg-gray-300'
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
              <h2 className="text-lg font-bold text-amber-700 mb-4 text-center">
                IDIOMAS
              </h2>
              <div className="w-12 h-1 bg-amber-600 mx-auto mb-4"></div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.id} className="bg-amber-50 p-3 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 text-sm">{lang.name}</span>
                      <span className="text-xs text-amber-700 font-bold bg-white px-2 py-1 rounded">
                        {lang.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Info Card */}
          <div className="bg-gradient-to-b from-amber-50 to-orange-50 p-6 rounded-lg shadow-sm border-2 border-amber-200">
            <h2 className="text-lg font-bold text-amber-700 mb-4 text-center">
              CONTACTO
            </h2>
            <div className="w-12 h-1 bg-amber-600 mx-auto mb-4"></div>
            <div className="space-y-3 text-sm text-gray-700">
              {personalInfo.email && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  <div>
                    <strong>Email:</strong><br/>
                    <span className="break-words">{personalInfo.email}</span>
                  </div>
                </div>
              )}
              {personalInfo.phones.length > 0 && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  <div>
                    <strong>Teléfono:</strong><br/>
                    {personalInfo.phones[0].number}
                  </div>
                </div>
              )}
              {personalInfo.addresses.length > 0 && (
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-1"></div>
                  <div>
                    <strong>Dirección:</strong><br/>
                    {personalInfo.addresses[0].street}<br/>
                    {personalInfo.addresses[0].city}, {personalInfo.addresses[0].country}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicTemplate;
