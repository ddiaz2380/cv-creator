
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Palette, Type, Layout, Globe, Download, Moon, Sun, Monitor, Save } from "lucide-react";
import { CVSettings } from "@/types/cv";

interface AdvancedSettingsProps {
  settings: CVSettings;
  onSettingsChange: (settings: CVSettings) => void;
}

const AdvancedSettings = ({ settings, onSettingsChange }: AdvancedSettingsProps) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');

  const updateSetting = (key: keyof CVSettings, value: any) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const colorSchemes = [
    { id: 'blue', name: 'Azul Profesional', primary: '#2563eb', secondary: '#60a5fa', preview: 'bg-blue-500' },
    { id: 'slate', name: 'Slate Ejecutivo', primary: '#1e293b', secondary: '#64748b', preview: 'bg-slate-700' },
    { id: 'emerald', name: 'Verde Moderno', primary: '#059669', secondary: '#10b981', preview: 'bg-emerald-500' },
    { id: 'purple', name: 'Púrpura Creativo', primary: '#7c3aed', secondary: '#a78bfa', preview: 'bg-purple-500' },
    { id: 'orange', name: 'Naranja Energético', primary: '#ea580c', secondary: '#fb923c', preview: 'bg-orange-500' },
    { id: 'pink', name: 'Rosa Innovador', primary: '#ec4899', secondary: '#f472b6', preview: 'bg-pink-500' },
    { id: 'teal', name: 'Teal Equilibrado', primary: '#0d9488', secondary: '#14b8a6', preview: 'bg-teal-500' },
    { id: 'gray', name: 'Gris Minimalista', primary: '#4b5563', secondary: '#6b7280', preview: 'bg-gray-500' }
  ];

  const fontFamilies = [
    { id: 'inter', name: 'Inter', description: 'Moderno y legible', example: 'font-inter' },
    { id: 'roboto', name: 'Roboto', description: 'Clásico y profesional', example: 'font-roboto' },
    { id: 'opensans', name: 'Open Sans', description: 'Amigable y versátil', example: 'font-opensans' },
    { id: 'lato', name: 'Lato', description: 'Elegante y sofisticado', example: 'font-lato' },
    { id: 'montserrat', name: 'Montserrat', description: 'Creativo y único', example: 'font-montserrat' },
    { id: 'sourceserifpro', name: 'Source Serif Pro', description: 'Académico y tradicional', example: 'font-sourceserifpro' },
    { id: 'playfair', name: 'Playfair Display', description: 'Elegante y distinguido', example: 'font-playfair' },
    { id: 'nunito', name: 'Nunito', description: 'Amigable y accesible', example: 'font-nunito' }
  ];

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' }
  ];

  const dateFormats = [
    { value: 'DD/MM/YYYY', label: '31/12/2024', description: 'Formato europeo' },
    { value: 'MM/DD/YYYY', label: '12/31/2024', description: 'Formato americano' },
    { value: 'YYYY-MM-DD', label: '2024-12-31', description: 'Formato ISO' }
  ];

  const exportSettings = {
    paperSize: 'A4',
    orientation: 'portrait',
    margins: 'normal',
    quality: 'high'
  };

  return (
    <div className="space-y-6">
      {/* Visual Customization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Palette className="w-5 h-5 mr-2" />
            Personalización Visual
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Color Scheme */}
          <div>
            <Label className="text-base font-medium">Esquema de Colores</Label>
            <p className="text-sm text-gray-600 mb-3">Elige la paleta de colores para tu CV</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {colorSchemes.map((scheme) => (
                <div
                  key={scheme.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                    settings.colorScheme === scheme.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => updateSetting('colorScheme', scheme.id)}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-4 h-4 rounded-full ${scheme.preview}`}></div>
                    <span className="text-sm font-medium">{scheme.name}</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: scheme.primary }}></div>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: scheme.secondary }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Typography */}
          <div>
            <Label className="text-base font-medium">Tipografía</Label>
            <p className="text-sm text-gray-600 mb-3">Selecciona la fuente para tu CV</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {fontFamilies.map((font) => (
                <div
                  key={font.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                    settings.fontFamily === font.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => updateSetting('fontFamily', font.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className={`font-medium ${font.example}`}>{font.name}</h4>
                      <p className="text-xs text-gray-600">{font.description}</p>
                    </div>
                    {settings.fontFamily === font.id && (
                      <Badge variant="default" className="text-xs">Activa</Badge>
                    )}
                  </div>
                  <p className={`text-sm ${font.example}`}>
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Font Size */}
          <div>
            <Label className="text-base font-medium">Tamaño de Fuente</Label>
            <p className="text-sm text-gray-600 mb-3">Ajusta el tamaño general del texto</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <span className="text-sm">Pequeño</span>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={(value) => updateSetting('fontSize', value[0])}
                  max={18}
                  min={10}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm">Grande</span>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-600">Tamaño actual: {settings.fontSize}px</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Spacing */}
          <div>
            <Label className="text-base font-medium">Espaciado</Label>
            <p className="text-sm text-gray-600 mb-3">Controla el espaciado entre secciones</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <span className="text-sm">Compacto</span>
                <Slider
                  value={[settings.spacing]}
                  onValueChange={(value) => updateSetting('spacing', value[0])}
                  max={3}
                  min={0.5}
                  step={0.1}
                  className="flex-1"
                />
                <span className="text-sm">Amplio</span>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-600">Espaciado: {settings.spacing}x</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Layout className="w-5 h-5 mr-2" />
            Configuración de Contenido
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Language */}
          <div>
            <Label className="text-base font-medium">Idioma del CV</Label>
            <p className="text-sm text-gray-600 mb-3">Idioma para las etiquetas y formato</p>
            <Select value={settings.language} onValueChange={(value: any) => updateSetting('language', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center space-x-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Format */}
          <div>
            <Label className="text-base font-medium">Formato de Fecha</Label>
            <p className="text-sm text-gray-600 mb-3">Formato para mostrar fechas</p>
            <Select value={settings.dateFormat} onValueChange={(value: any) => updateSetting('dateFormat', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {dateFormats.map((format) => (
                  <SelectItem key={format.value} value={format.value}>
                    <div className="flex items-center justify-between w-full">
                      <span>{format.label}</span>
                      <span className="text-xs text-gray-500">{format.description}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Profile Image */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base font-medium">Mostrar Imagen de Perfil</Label>
              <p className="text-sm text-gray-600">Incluir foto en el CV</p>
            </div>
            <Switch
              checked={settings.showProfileImage}
              onCheckedChange={(checked) => updateSetting('showProfileImage', checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Export Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Configuración de Exportación
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-base font-medium">Tamaño de Papel</Label>
              <Select defaultValue="A4">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A4">A4 (210 × 297 mm)</SelectItem>
                  <SelectItem value="Letter">Letter (8.5 × 11 pulgadas)</SelectItem>
                  <SelectItem value="Legal">Legal (8.5 × 14 pulgadas)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium">Orientación</Label>
              <Select defaultValue="portrait">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="portrait">Vertical</SelectItem>
                  <SelectItem value="landscape">Horizontal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium">Márgenes</Label>
              <Select defaultValue="normal">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="narrow">Estrechos</SelectItem>
                  <SelectItem value="normal">Normales</SelectItem>
                  <SelectItem value="wide">Amplios</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium">Calidad</Label>
              <Select defaultValue="high">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">Alta (Recomendado)</SelectItem>
                  <SelectItem value="medium">Media</SelectItem>
                  <SelectItem value="low">Baja</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interface Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Monitor className="w-5 h-5 mr-2" />
            Configuración de Interfaz
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-base font-medium">Tema de la Interfaz</Label>
            <p className="text-sm text-gray-600 mb-3">Apariencia del editor (no afecta al CV)</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'light', name: 'Claro', icon: Sun },
                { id: 'dark', name: 'Oscuro', icon: Moon },
                { id: 'system', name: 'Sistema', icon: Monitor }
              ].map((themeOption) => (
                <div
                  key={themeOption.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md text-center ${
                    theme === themeOption.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setTheme(themeOption.id as any)}
                >
                  <themeOption.icon className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{themeOption.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base font-medium">Guardado Automático</Label>
              <p className="text-sm text-gray-600">Guardar cambios automáticamente</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base font-medium">Sugerencias de IA</Label>
              <p className="text-sm text-gray-600">Mostrar sugerencias inteligentes</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Save className="w-4 h-4 mr-2" />
          Guardar Configuración
        </Button>
      </div>
    </div>
  );
};

export default AdvancedSettings;
