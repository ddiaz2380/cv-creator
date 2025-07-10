
export interface PersonalInfo {
  fullName: string;
  email: string;
  phones: ContactField[];
  addresses: AddressField[];
  socialNetworks: SocialNetwork[];
  website: string;
  summary: string;
  profileImage?: string;
  customFields: CustomField[];
}

export interface ContactField {
  id: string;
  type: 'mobile' | 'home' | 'work';
  number: string;
  label: string;
}

export interface AddressField {
  id: string;
  type: 'current' | 'work' | 'other';
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  label: string;
}

export interface SocialNetwork {
  id: string;
  platform: 'linkedin' | 'github' | 'twitter' | 'instagram' | 'facebook' | 'behance' | 'dribbble' | 'other';
  url: string;
  username: string;
}

export interface CustomField {
  id: string;
  label: string;
  value: string;
  type: 'text' | 'url' | 'email' | 'date';
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  honors?: string;
  coursework: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';
  category: 'technical' | 'soft' | 'language' | 'other';
  yearsOfExperience?: number;
}

export interface Language {
  id: string;
  name: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Nativo';
  certification?: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  role: string;
  achievements: string[];
}

export interface Award {
  id: string;
  name: string;
  organization: string;
  date: string;
  description: string;
}

export interface Volunteer {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  location: string;
}

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  date: string;
  url?: string;
  description: string;
  authors: string[];
}

export interface Reference {
  id: string;
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
  relationship: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  certifications: Certification[];
  projects: Project[];
  awards: Award[];
  volunteer: Volunteer[];
  publications: Publication[];
  references: Reference[];
}

export interface CVSettings {
  template: string;
  colorScheme: string;
  fontFamily: string;
  fontSize: number;
  spacing: number;
  dateFormat: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD';
  language: 'es' | 'en';
  showProfileImage: boolean;
  sectionOrder: string[];
  visibleSections: string[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: 'executive' | 'creative' | 'technical' | 'academic' | 'modern' | 'classic' | 'minimal';
  industry: string[];
  preview: string;
  features: string[];
  colorSchemes: ColorScheme[];
}

export interface ColorScheme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}
