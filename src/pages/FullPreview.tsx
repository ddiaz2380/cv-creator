
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Save, Share2 } from "lucide-react";
import CVPreview from "@/components/CVPreview";
import { CVData } from "@/types/cv";

const FullPreview = () => {
  const location = useLocation();
  const { cvData, template } = location.state || { 
    cvData: {
      personalInfo: {
        fullName: '',
        email: '',
        phones: [],
        addresses: [],
        socialNetworks: [],
        website: '',
        summary: '',
        customFields: []
      },
      experience: [],
      education: [],
      skills: [],
      languages: [],
      certifications: [],
      projects: [],
      awards: [],
      volunteer: [],
      publications: [],
      references: []
    }, 
    template: 'modern-professional' 
  };

  const handleDownloadPDF = () => {
    console.log('Descargando PDF desde vista completa...');
    // Aquí implementarías la lógica real de descarga de PDF
    // Por ejemplo, usando jsPDF o html2canvas
  };

  const handleSaveDraft = () => {
    console.log('Guardando borrador desde vista completa...');
    localStorage.setItem('cv-draft', JSON.stringify({ cvData, template }));
  };

  const handleShare = () => {
    console.log('Compartiendo CV...');
    if (navigator.share) {
      navigator.share({
        title: 'Mi CV Profesional',
        text: 'Mira mi CV profesional',
        url: window.location.href,
      });
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href);
      console.log('URL copiada al portapapeles');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/editor">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al editor
              </Link>
            </Button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-xl font-bold text-gray-900">Vista Completa del CV</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleSaveDraft}>
              <Save className="w-4 h-4 mr-2" />
              Guardar
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>
            <Button size="sm" onClick={handleDownloadPDF} className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Descargar PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
            <CVPreview data={cvData as CVData} template={template} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPreview;
