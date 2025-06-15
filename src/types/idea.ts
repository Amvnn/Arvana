// src/types/idea.ts
export interface Idea {
  // Core fields
  id: string;
  title: string;
  emoji: string;
  description: string;
  short: string;
  status: 'idea' | 'draft' | 'ready' | 'in-progress' | 'launched' | 'on-hold';
  progress: number;
  tags: string[];
  
  // Optional fields
  full?: string;
  keyBenefits?: string[];
  keyPoints?: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  currentStatus?: string;
  
  // Detailed view
  tagline?: string;
  commonMisconception?: string;
  realityPoints?: string[];
  howItWorks?: string;
  coreInnovation?: string;
  userExperience?: string;
  techStack?: string[];
  traditionalSystem?: string[];
  ourSystem?: string[];
  similarProjects?: Array<{ 
    name: string; 
    description: string; 
    url?: string 
  }>;
  challenges?: string[];
  opportunities?: string[];
  prototypeSteps?: string[];
  resources?: Array<{
    type: 'article' | 'video' | 'code' | 'design';
    title: string;
    url: string;
    description?: string;
  }>;
  targetUsers?: string[];
  impact?: string | string[];
  problem?: string;
  solution?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Helper type for creating new ideas
export type NewIdea = Omit<Idea, 'id' | 'createdAt' | 'updatedAt'> & {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
};