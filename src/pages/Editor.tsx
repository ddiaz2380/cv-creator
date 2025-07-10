
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download, Eye, Save, Settings, FileText, Layout, Palette, Sliders } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CVPreview from "@/components/CVPreview";
import TemplateGallery from "@/components/TemplateGallery";
import AdvancedSectionsManager from "@/components/AdvancedSectionsManager";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import AdvancedSettings from "@/components/AdvancedSettings";
import { CVData, CVSettings, PersonalInfo } from "@/types/cv";
import { saveDraft, loadDraft } from "@/utils/draftUtils";
import { downloadPDF } from "@/utils/pdfUtils";
import { useToast } from "@/hooks/use-toast";

const Editor = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const cvPreviewRef = useRef<HTMLDivElement>(null);

  const [cvData, setCvData] = useState<CVData>({
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
  });

  const [settings, setSettings] = useState<CVSettings>({
    template: 'modern-professional',
    colorScheme: 'blue',
    fontFamily: 'inter',
    fontSize: 14,
    spacing: 1,
    dateFormat: 'DD/MM/YYYY',
    language: 'es',
    showProfileImage: true,
    sectionOrder: [],
    visibleSections: []
  });

  const [activeTab, setActiveTab] = useState('form');

  // Cargar borrador al iniciar
  useEffect(() => {
    const draft = loadDraft();
    if (draft) {
      setCvData(draft.cvData);
      setSettings(draft.settings);
      toast({
        title: "Borrador cargado",
        description: "Se ha cargado tu último borrador guardado",
      });
    }
  }, [toast]);

  const handlePersonalInfoChange = (personalInfo: PersonalInfo) => {
    setCvData(prev => ({ ...prev, personalInfo }));
  };

  const handleSettingsChange = (newSettings: CVSettings) => {
    setSettings(newSettings);
  };

  const handleSaveDraft = () => {
    try {
      saveDraft(cvData, settings);
      toast({
        title: "Borrador guardado",
        description: "Tu CV ha sido guardado exitosamente",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo guardar el borrador",
        variant: "destructive",
      });
    }
  };

  const handleExportPDF = async () => {
    if (!cvPreviewRef.current) {
      toast({
        title: "Error",
        description: "No se pudo generar el PDF",
        variant: "destructive",
      });
      return;
    }

    try {
      toast({
        title: "Generando PDF...",
        description: "Por favor espera mientras se genera tu CV",
      });

      await downloadPDF(cvPreviewRef.current, `cv-${cvData.personalInfo.fullName || 'profesional'}.pdf`);
      
      toast({
        title: "PDF descargado",
        description: "Tu CV ha sido descargado exitosamente",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo descargar el PDF",
        variant: "destructive",
      });
    }
  };

  const handleFullPreview = () => {
    navigate('/full-preview', { 
      state: { cvData, template: settings.template } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild className="hover:bg-gray-100">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Link>
            </Button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-xl font-bold text-gray-900">Editor de CV Profesional</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleSaveDraft} className="hover:bg-gray-50">
              <Save className="w-4 h-4 mr-2" />
              Guardar borrador
            </Button>
            <Button variant="outline" size="sm" onClick={handleExportPDF} className="hover:bg-gray-50">
              <Download className="w-4 h-4 mr-2" />
              Descargar PDF
            </Button>
            <Button size="sm" onClick={handleFullPreview} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              <Eye className="w-4 h-4 mr-2" />
              Vista completa
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-140px)]">
          {/* Panel Izquierdo - Editor */}
          <div className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-sm">
                <TabsTrigger value="form" className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Datos</span>
                </TabsTrigger>
                <TabsTrigger value="sections" className="flex items-center space-x-2">
                  <Layout className="w-4 h-4" />
                  <span className="hidden sm:inline">Secciones</span>
                </TabsTrigger>
                <TabsTrigger value="templates" className="flex items-center space-x-2">
                  <Palette className="w-4 h-4" />
                  <span className="hidden sm:inline">Plantillas</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center space-x-2">
                  <Sliders className="w-4 h-4" />
                  <span className="hidden sm:inline">Ajustes</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="form" className="h-[calc(100vh-240px)] overflow-y-auto mt-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
                    <CardTitle className="flex items-center text-blue-900">
                      <FileText className="w-5 h-5 mr-2" />
                      Información Personal y Profesional
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <PersonalInfoForm 
                      data={cvData.personalInfo} 
                      onChange={handlePersonalInfoChange}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sections" className="h-[calc(100vh-240px)] overflow-y-auto mt-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg">
                    <CardTitle className="flex items-center text-green-900">
                      <Layout className="w-5 h-5 mr-2" />
                      Organizar Secciones del CV
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <AdvancedSectionsManager />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="templates" className="h-[calc(100vh-240px)] overflow-y-auto mt-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-lg">
                    <CardTitle className="flex items-center text-purple-900">
                      <Palette className="w-5 h-5 mr-2" />
                      Galería de Plantillas Profesionales
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <TemplateGallery 
                      selectedTemplate={settings.template}
                      onTemplateChange={(template) => setSettings(prev => ({ ...prev, template }))}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="h-[calc(100vh-240px)] overflow-y-auto mt-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-1">
                  <AdvancedSettings 
                    settings={settings}
                    onSettingsChange={handleSettingsChange}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Panel Derecho - Vista Previa */}
          <div>
            <Card className="h-full shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-t-lg border-b">
                <CardTitle className="flex items-center justify-between text-gray-900">
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Vista Previa en Tiempo Real
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {settings.template.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                    <Button variant="outline" size="sm" onClick={handleFullPreview} className="hover:bg-gray-100">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[calc(100%-80px)] overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                <div className="flex justify-center">
                  <CVPreview ref={cvPreviewRef} data={cvData} template={settings.template} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
