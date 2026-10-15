export interface Project {
  id: string;
  title: string;
  category: 'Voice AI' | 'Web & Automation' | 'Linux Tooling';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  codeSnippet?: string;
  isFeatured?: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface ToolItem {
  id: string;
  name: string;
  category: string;
  experienceLevel: string;
  description: string;
  keyUseCases: string[];
  sampleCodeOrCommand: {
    language: string;
    code: string;
    explanation: string;
  };
}

export interface StatItem {
  number: string;
  label: string;
  subtext: string;
}
