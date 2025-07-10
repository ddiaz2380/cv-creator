
import { CVData, CVSettings } from '@/types/cv';

export interface CVDraft {
  cvData: CVData;
  settings: CVSettings;
  lastModified: string;
  name?: string;
}

export const saveDraft = (cvData: CVData, settings: CVSettings, name?: string): void => {
  const draft: CVDraft = {
    cvData,
    settings,
    lastModified: new Date().toISOString(),
    name: name || `Borrador ${new Date().toLocaleDateString()}`
  };

  try {
    localStorage.setItem('cv-current-draft', JSON.stringify(draft));
    
    // También guardamos en el historial de borradores
    const drafts = getSavedDrafts();
    const draftId = `draft-${Date.now()}`;
    const updatedDrafts = { ...drafts, [draftId]: draft };
    
    localStorage.setItem('cv-drafts-history', JSON.stringify(updatedDrafts));
    
    console.log('Borrador guardado exitosamente');
  } catch (error) {
    console.error('Error al guardar borrador:', error);
  }
};

export const loadDraft = (): CVDraft | null => {
  try {
    const draft = localStorage.getItem('cv-current-draft');
    return draft ? JSON.parse(draft) : null;
  } catch (error) {
    console.error('Error al cargar borrador:', error);
    return null;
  }
};

export const getSavedDrafts = (): Record<string, CVDraft> => {
  try {
    const drafts = localStorage.getItem('cv-drafts-history');
    return drafts ? JSON.parse(drafts) : {};
  } catch (error) {
    console.error('Error al obtener borradores guardados:', error);
    return {};
  }
};

export const deleteDraft = (draftId: string): void => {
  try {
    const drafts = getSavedDrafts();
    delete drafts[draftId];
    localStorage.setItem('cv-drafts-history', JSON.stringify(drafts));
    console.log('Borrador eliminado');
  } catch (error) {
    console.error('Error al eliminar borrador:', error);
  }
};
