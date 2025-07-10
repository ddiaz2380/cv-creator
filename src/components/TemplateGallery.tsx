
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Star, Download, Palette, Check } from "lucide-react";
import { Template } from "@/types/cv";

interface TemplateGalleryProps {
  selectedTemplate: string;
  onTemplateChange: (template: string) => void;
}

const TemplateGallery = ({ selectedTemplate, onTemplateChange }: TemplateGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const templates: Template[] = [
    {
      id: 'modern-professional',
      name: 'Modern Professional',
      description: 'Diseño moderno con colores vibrantes y layout en dos columnas',
      category: 'modern',
      industry: ['Tecnología', 'Marketing', 'Consultoría', 'Diseño'],
      preview: 'bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-l-blue-600',
      features: ['Layout en dos columnas', 'Barras de progreso', 'Iconos modernos', 'Colores vibrantes'],
      colorSchemes: [
        { id: 'blue', name: 'Azul', primary: '#2563eb', secondary: '#60a5fa', accent: '#3b82f6', background: '#f8fafc', text: '#0f172a' },
        { id: 'green', name: 'Verde', primary: '#059669', secondary: '#10b981', accent: '#34d399', background: '#f8fafc', text: '#0f172a' }
      ]
    },
    {
      id: 'classic',
      name: 'Classic Elegance',
      description: 'Diseño clásico y elegante con tipografía serif',
      category: 'classic',
      industry: ['Legal', 'Académico', 'Gobierno', 'Finanzas'],
      preview: 'bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-l-gray-600',
      features: ['Tipografía serif', 'Layout tradicional', 'Espaciado amplio', 'Colores neutros'],
      colorSchemes: [
        { id: 'gray', name: 'Gris', primary: '#4b5563', secondary: '#6b7280', accent: '#9ca3af', background: '#f8fafc', text: '#0f172a' },
        { id: 'navy', name: 'Azul Marino', primary: '#1e3a8a', secondary: '#3b82f6', accent: '#60a5fa', background: '#f8fafc', text: '#0f172a' }
      ]
    },
    {
      id: 'executive-pro',
      name: 'Executive Pro',
      description: 'Diseño ejecutivo sofisticado para altos cargos',
      category: 'executive',
      industry: ['Dirección', 'Consultoría', 'C-Level', 'Negocios'],
      preview: 'bg-gradient-to-br from-slate-100 to-slate-200 border-l-4 border-l-slate-800',
      features: ['Header oscuro', 'Secciones destacadas', 'Logros prominentes', 'Diseño premium'],
      colorSchemes: [
        { id: 'slate', name: 'Pizarra', primary: '#1e293b', secondary: '#64748b', accent: '#3b82f6', background: '#f8fafc', text: '#0f172a' },
        { id: 'emerald', name: 'Esmeralda', primary: '#059669', secondary: '#10b981', accent: '#34d399', background: '#f8fafc', text: '#0f172a' }
      ]
    },
    {
      id: 'tech-innovator',
      name: 'Tech Innovator',
      description: 'Diseño tecnológico con gradientes y tipografía moderna',
      category: 'technical',
      industry: ['Desarrollo', 'IT', 'Startups', 'Ingeniería'],
      preview: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 border-l-4 border-l-indigo-600',
      features: ['Gradientes coloridos', 'Sección de proyectos', 'Skills técnicos', 'Enlaces a código'],
      colorSchemes: [
        { id: 'tech', name: 'Tech', primary: '#4f46e5', secondary: '#7c3aed', accent: '#8b5cf6', background: '#f8fafc', text: '#0f172a' },
        { id: 'cyber', name: 'Cyber', primary: '#0891b2', secondary: '#06b6d4', accent: '#22d3ee', background: '#f8fafc', text: '#0f172a' }
      ]
    },
    {
      id: 'creative-bold',
      name: 'Creative Bold',
      description: 'Diseño creativo y audaz para profesionales del arte',
      category: 'creative',
      industry: ['Diseño', 'Arte', 'Publicidad', 'Medios'],
      preview: 'bg-gradient-to-br from-pink-50 to-purple-100 border-l-4 border-l-pink-500',
      features: ['Colores vibrantes', 'Layout creativo', 'Sección portfolio', 'Diseño único'],
      colorSchemes: [
        { id: 'creative', name: 'Creativo', primary: '#ec4899', secondary: '#f472b6', accent: '#f9a8d4', background: '#f8fafc', text: '#0f172a' },
        { id: 'artistic', name: 'Artístico', primary: '#7c3aed', secondary: '#a78bfa', accent: '#c4b5fd', background: '#f8fafc', text: '#0f172a' }
      ]
    },
    {
      id: 'minimal-clean',
      name: 'Minimal Clean',
      description: 'Diseño minimalista y limpio con máxima legibilidad',
      category: 'minimal',
      industry: ['Arquitectura', 'Consultoría', 'Salud', 'Educación'],
      preview: 'bg-gradient-to-br from-stone-50 to-stone-100 border-l-4 border-l-stone-500',
      features: ['Espacios amplios', 'Tipografía clara', 'Diseño limpio', 'Fácil lectura'],
      colorSchemes: [
        { id: 'minimal', name: 'Minimal', primary: '#525252', secondary: '#737373', accent: '#a3a3a3', background: '#f8fafc', text: '#0f172a' },
        { id: 'warm', name: 'Cálido', primary: '#92400e', secondary: '#d97706', accent: '#f59e0b', background: '#f8fafc', text: '#0f172a' }
      ]
    }
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'Todas', count: templates.length },
    { id: 'modern', name: 'Moderno', count: templates.filter(t => t.category === 'modern').length },
    { id: 'executive', name: 'Ejecutivo', count: templates.filter(t => t.category === 'executive').length },
    { id: 'technical', name: 'Técnico', count: templates.filter(t => t.category === 'technical').length },
    { id: 'creative', name: 'Creativo', count: templates.filter(t => t.category === 'creative').length },
    { id: 'classic', name: 'Clásico', count: templates.filter(t => t.category === 'classic').length },
    { id: 'minimal', name: 'Minimal', count: templates.filter(t => t.category === 'minimal').length }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Plantillas Profesionales</h2>
        <p className="text-gray-600">Elige la plantilla que mejor se adapte a tu industria y estilo profesional</p>
      </div>

      {/* Categories */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.name}
              <Badge variant="secondary" className="ml-1 text-xs">
                {category.count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedTemplate === template.id
                  ? 'ring-2 ring-blue-500 shadow-xl bg-blue-50/50'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => onTemplateChange(template.id)}
            >
              <CardContent className="p-0">
                {/* Template Preview */}
                <div className={`w-full h-64 rounded-t-lg ${template.preview} border-b relative overflow-hidden`}>
                  {/* Mock CV Layout */}
                  <div className="absolute inset-0 p-4">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-gray-300/60 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-400/60 rounded mb-1 w-3/4"></div>
                          <div className="h-2 bg-gray-300/60 rounded w-1/2"></div>
                        </div>
                      </div>
                      
                      {/* Content Sections */}
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-300/60 rounded w-full"></div>
                        <div className="h-2 bg-gray-300/60 rounded w-5/6"></div>
                        <div className="h-2 bg-gray-300/60 rounded w-4/6"></div>
                      </div>
                      
                      {/* Skills/Progress bars */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-1.5 bg-gray-300/60 rounded w-16"></div>
                          <div className="h-1.5 bg-blue-400/60 rounded w-20"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-1.5 bg-gray-300/60 rounded w-14"></div>
                          <div className="h-1.5 bg-green-400/60 rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Selection Indicator */}
                  {selectedTemplate === template.id && (
                    <div className="absolute top-3 right-3 bg-blue-500 text-white rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="shadow-lg">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">{template.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                  </div>

                  {/* Industries */}
                  <div className="flex flex-wrap gap-1">
                    {template.industry.slice(0, 3).map((industry) => (
                      <Badge key={industry} variant="outline" className="text-xs">
                        {industry}
                      </Badge>
                    ))}
                    {template.industry.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{template.industry.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {template.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center text-xs text-gray-600">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Color Schemes and Actions */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex space-x-1">
                      {template.colorSchemes.slice(0, 3).map((scheme) => (
                        <div
                          key={scheme.id}
                          className="w-5 h-5 rounded-full border-2 border-gray-200 shadow-sm"
                          style={{ backgroundColor: scheme.primary }}
                          title={scheme.name}
                        ></div>
                      ))}
                    </div>
                    <Button 
                      size="sm" 
                      variant={selectedTemplate === template.id ? "default" : "outline"} 
                      className="text-xs"
                    >
                      {selectedTemplate === template.id ? 'Seleccionada' : 'Usar esta'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default TemplateGallery;
