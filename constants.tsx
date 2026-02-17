
import React from 'react';
import { 
  FileSpreadsheet, 
  FileText, 
  Presentation, 
  Mail, 
  Monitor, 
  Layout, 
  Image as ImageIcon, 
  PenTool, 
  Video, 
  Award, 
  Shield, 
  Database, 
  Network, 
  Cpu, 
  Search,
  Users
} from 'lucide-react';
import { Certification, Skill, EducationEvent } from './types';

export const CERTIFICATIONS: Certification[] = [
  { id: '1', name: 'MOS: Excel', issuer: 'Certiport', year: 2020, icon: 'spreadsheet', category: 'Microsoft' },
  { id: '2', name: 'MOS: Word', issuer: 'Certiport', year: 2020, icon: 'text', category: 'Microsoft' },
  { id: '3', name: 'MOS: PowerPoint', issuer: 'Certiport', year: 2020, icon: 'presentation', category: 'Microsoft' },
  { id: '4', name: 'MOS: Outlook', issuer: 'Certiport', year: 2021, icon: 'mail', category: 'Microsoft' },
  { id: '5', name: 'Windows OS Fundamentals', issuer: 'Certiport', year: 2021, icon: 'monitor', category: 'Technical' },
  { id: '6', name: 'Autodesk Certified User: AutoCAD', issuer: 'Certiport', year: 2021, icon: 'layout', category: 'AutoCAD' },
  { id: '7', name: 'Visual Design (Photoshop)', issuer: 'Certiport', year: 2021, icon: 'image', category: 'Adobe' },
  { id: '8', name: 'Graphic Design (Illustrator)', issuer: 'Certiport', year: 2022, icon: 'pen', category: 'Adobe' },
  { id: '9', name: 'Digital Video (Premiere Pro)', issuer: 'Certiport', year: 2022, icon: 'video', category: 'Adobe' },
];

export const SKILLS: Skill[] = [
  { name: 'Cybersecurity Fundamentals', category: 'Technical' },
  { name: 'Network Security', category: 'Technical' },
  { name: 'Database Management Systems', category: 'Technical' },
  { name: 'Computer Forensics', category: 'Technical' },
  { name: 'Information Assurance', category: 'Technical' },
  { name: 'Adobe Creative Suite', category: 'Creative/Business' },
  { name: 'Analytical Thinking', category: 'Creative/Business' },
  { name: 'Problem-solving', category: 'Creative/Business' },
  { name: 'Team Collaboration', category: 'Creative/Business' },
  { name: 'Project Management', category: 'Creative/Business' },
];

export const EDUCATION: EducationEvent[] = [
  { 
    year: 'May 2026', 
    degree: 'B.B.A. Management Information Systems', 
    institution: 'Florida Atlantic University', 
    details: 'Concentration in Cybersecurity. Cumulative GPA: 3.622/4.0'
  },
  { 
    year: 'May 2027', 
    degree: 'M.S. Information Technology and Management', 
    institution: 'Florida Atlantic University', 
    details: 'Advanced focus on strategic systems and information assurance.'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  spreadsheet: <FileSpreadsheet className="w-6 h-6" />,
  text: <FileText className="w-6 h-6" />,
  presentation: <Presentation className="w-6 h-6" />,
  mail: <Mail className="w-6 h-6" />,
  monitor: <Monitor className="w-6 h-6" />,
  layout: <Layout className="w-6 h-6" />,
  image: <ImageIcon className="w-6 h-6" />,
  pen: <PenTool className="w-6 h-6" />,
  video: <Video className="w-6 h-6" />,
};
