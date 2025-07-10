
import React from 'react';
import { CVData } from '@/types/cv';
import ModernTemplate from './ModernTemplate';
import ClassicTemplate from './ClassicTemplate';
import ExecutiveTemplate from './ExecutiveTemplate';
import TechTemplate from './TechTemplate';

interface TemplateRendererProps {
  template: string;
  data: CVData;
}

const TemplateRenderer = ({ template, data }: TemplateRendererProps) => {
  const renderTemplate = () => {
    switch (template) {
      case 'executive-pro':
        return <ExecutiveTemplate data={data} />;
      case 'tech-innovator':
        return <TechTemplate data={data} />;
      case 'classic':
      case 'academic-scholar':
        return <ClassicTemplate data={data} />;
      case 'modern':
      case 'modern-professional':
      case 'creative-bold':
      case 'minimal-clean':
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return renderTemplate();
};

export default TemplateRenderer;
