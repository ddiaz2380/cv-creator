
import React, { forwardRef } from 'react';
import { CVData } from '@/types/cv';
import TemplateRenderer from './templates/TemplateRenderer';

interface CVPreviewProps {
  data: CVData;
  template: string;
}

const CVPreview = forwardRef<HTMLDivElement, CVPreviewProps>(({ data, template }, ref) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div ref={ref} className="transform scale-75 origin-top">
        <TemplateRenderer template={template} data={data} />
      </div>
    </div>
  );
});

CVPreview.displayName = 'CVPreview';

export default CVPreview;
