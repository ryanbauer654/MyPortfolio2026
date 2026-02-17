
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
  icon: string;
  category: 'Microsoft' | 'Adobe' | 'AutoCAD' | 'Technical';
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Creative/Business';
}

export interface EducationEvent {
  year: string;
  degree: string;
  institution: string;
  details: string;
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}
