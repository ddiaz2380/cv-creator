
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  GripVertical, 
  Eye, 
  EyeOff, 
  Plus, 
  Trash2, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award,
  Globe,
  Code,
  Heart,
  FileText,
  Users,
  BookOpen,
  Star,
  Trophy,
  Settings
} from "lucide-react";

interface Section {
  id: string;
  name: string;
  icon: string;
  visible: boolean;
  required: boolean;
  order: number;
  isCustom?: boolean;
}

const AdvancedSectionsManager = () => {
  const [sections, setSections] = useState<Section[]>([
    { id: 'personal', name: 'Información Personal', icon: 'User', visible: true, required: true, order: 1, isCustom: false },
    { id: 'experience', name: 'Experiencia Laboral', icon: 'Briefcase', visible: true, required: false, order: 2, isCustom: false },
    { id: 'education', name: 'Educación', icon: 'GraduationCap', visible: true, required: false, order: 3, isCustom: false },
    { id: 'skills', name: 'Habilidades', icon: 'Award', visible: true, required: false, order: 4, isCustom: false },
    { id: 'languages', name: 'Idiomas', icon: 'Globe', visible: true, required: false, order: 5, isCustom: false },
    { id: 'projects', name: 'Proyectos', icon: 'Code', visible: false, required: false, order: 6, isCustom: false },
    { id: 'volunteer', name: 'Voluntariado', icon: 'Heart', visible: false, required: false, order: 7, isCustom: false },
    { id: 'publications', name: 'Publicaciones', icon: 'FileText', visible: false, required: false, order: 8, isCustom: false },
    { id: 'references', name: 'Referencias', icon: 'Users', visible: false, required: false, order: 9, isCustom: false },
    { id: 'certifications', name: 'Certificaciones', icon: 'BookOpen', visible: false, required: false, order: 10, isCustom: false },
    { id: 'awards', name: 'Premios', icon: 'Trophy', visible: false, required: false, order: 11, isCustom: false }
  ]);

  const [newSectionName, setNewSectionName] = useState('');
  const [activeTab, setActiveTab] = useState('organize');

  const toggleSectionVisibility = (id: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, visible: !section.visible } : section
    ));
  };

  const addCustomSection = () => {
    if (newSectionName.trim()) {
      const newSection: Section = {
        id: `custom-${Date.now()}`,
        name: newSectionName.trim(),
        icon: 'Settings',
        visible: true,
        required: false,
        order: sections.length + 1,
        isCustom: true
      };
      setSections([...sections, newSection]);
      setNewSectionName('');
    }
  };

  const removeCustomSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
  };

  const moveSection = (fromIndex: number, toIndex: number) => {
    const newSections = [...sections];
    const [movedSection] = newSections.splice(fromIndex, 1);
    newSections.splice(toIndex, 0, movedSection);
    
    // Update order numbers
    const updatedSections = newSections.map((section, index) => ({
      ...section,
      order: index + 1
    }));
    
    setSections(updatedSections);
  };

  const getIconComponent = (iconName: string) => {
    const icons = {
      User, Briefcase, GraduationCap, Award, Globe, Code, Heart, 
      FileText, Users, BookOpen, Star, Trophy, Settings
    };
    return icons[iconName as keyof typeof icons] || Settings;
  };

  const visibleSections = sections.filter(s => s.visible);
  const hiddenSections = sections.filter(s => !s.visible);

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="organize">Organizar</TabsTrigger>
          <TabsTrigger value="visibility">Visibilidad</TabsTrigger>
          <TabsTrigger value="custom">Personalizar</TabsTrigger>
        </TabsList>

        <TabsContent value="organize" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Orden de Secciones</CardTitle>
              <p className="text-sm text-gray-600">
                Arrastra las secciones para cambiar el orden en tu CV
              </p>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-2">
                  {sections
                    .sort((a, b) => a.order - b.order)
                    .map((section, index) => {
                      const IconComponent = getIconComponent(section.icon);
                      return (
                        <div
                          key={section.id}
                          className={`flex items-center p-3 rounded-lg border ${
                            section.visible ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-100'
                          }`}
                        >
                          <GripVertical className="w-4 h-4 text-gray-400 mr-3 cursor-move" />
                          <IconComponent className="w-4 h-4 text-blue-600 mr-3" />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className={`font-medium ${section.visible ? 'text-gray-900' : 'text-gray-500'}`}>
                                {section.name}
                              </span>
                              {section.required && (
                                <Badge variant="secondary" className="text-xs">Requerida</Badge>
                              )}
                              {section.isCustom && (
                                <Badge variant="outline" className="text-xs">Personalizada</Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleSectionVisibility(section.id)}
                              disabled={section.required}
                            >
                              {section.visible ? (
                                <Eye className="w-4 h-4" />
                              ) : (
                                <EyeOff className="w-4 h-4" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => moveSection(index, Math.max(0, index - 1))}
                              disabled={index === 0}
                            >
                              ↑
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => moveSection(index, Math.min(sections.length - 1, index + 1))}
                              disabled={index === sections.length - 1}
                            >
                              ↓
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visibility" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-700">Secciones Visibles</CardTitle>
                <p className="text-sm text-gray-600">
                  {visibleSections.length} secciones aparecerán en tu CV
                </p>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-2">
                    {visibleSections.map((section) => {
                      const IconComponent = getIconComponent(section.icon);
                      return (
                        <div key={section.id} className="flex items-center p-2 rounded-lg bg-green-50 border border-green-200">
                          <IconComponent className="w-4 h-4 text-green-600 mr-3" />
                          <span className="flex-1 text-sm font-medium text-green-900">{section.name}</span>
                          <Switch
                            checked={section.visible}
                            onCheckedChange={() => toggleSectionVisibility(section.id)}
                            disabled={section.required}
                          />
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-700">Secciones Ocultas</CardTitle>
                <p className="text-sm text-gray-600">
                  {hiddenSections.length} secciones están desactivadas
                </p>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-2">
                    {hiddenSections.map((section) => {
                      const IconComponent = getIconComponent(section.icon);
                      return (
                        <div key={section.id} className="flex items-center p-2 rounded-lg bg-gray-50 border border-gray-200">
                          <IconComponent className="w-4 h-4 text-gray-400 mr-3" />
                          <span className="flex-1 text-sm font-medium text-gray-500">{section.name}</span>
                          <Switch
                            checked={section.visible}
                            onCheckedChange={() => toggleSectionVisibility(section.id)}
                          />
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Secciones Personalizadas</CardTitle>
              <p className="text-sm text-gray-600">
                Crea secciones adicionales para personalizar tu CV
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <div className="flex-1">
                  <Label htmlFor="section-name">Nombre de la sección</Label>
                  <Input
                    id="section-name"
                    placeholder="Ej: Hobbies, Logros, Cursos..."
                    value={newSectionName}
                    onChange={(e) => setNewSectionName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addCustomSection()}
                  />
                </div>
                <Button onClick={addCustomSection} disabled={!newSectionName.trim()}>
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar
                </Button>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-medium">Secciones Personalizadas Existentes</h4>
                {sections.filter(s => s.isCustom).length === 0 ? (
                  <p className="text-sm text-gray-500 italic">No hay secciones personalizadas</p>
                ) : (
                  <div className="space-y-2">
                    {sections.filter(s => s.isCustom).map((section) => {
                      const IconComponent = getIconComponent(section.icon);
                      return (
                        <div key={section.id} className="flex items-center p-2 rounded-lg bg-blue-50 border border-blue-200">
                          <IconComponent className="w-4 h-4 text-blue-600 mr-3" />
                          <span className="flex-1 text-sm font-medium text-blue-900">{section.name}</span>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={section.visible}
                              onCheckedChange={() => toggleSectionVisibility(section.id)}
                            />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeCustomSection(section.id)}
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdvancedSectionsManager;
