// // src/types/idea.updated.ts
// export type ResourceType = 'github' | 'demo' | 'design' | 'documentation' | 'repo' | 'article' | 'video' | 'other';

// export interface Resource {
//   title: string;
//   url: string;
//   type: ResourceType;
//   description?: string;
// }

// export type IdeaStatus = 'idea' | 'draft' | 'ready' | 'in-progress' | 'launched' | 'on-hold' | 'building';

// export interface Idea {
//   // Basic Info
//   id: string;
//   title: string;
//   emoji: string;
//   tagline?: string;
//   status: IdeaStatus;
//   progress?: number;
//   description?: string;
//   short?: string;
//   tags: string[];
//   imageUrl?: string;
//   githubUrl?: string;
//   demoUrl?: string;
  
//   // Core Sections
//   commonMisconception: string;
//   realityPoints: string[];
//   howItWorks: string;
//   coreInnovation: string;
//   userExperience: string;
//   techStack: string[];
//   traditionalSystem: string[];
//   ourSystem: string[];
  
//   similarProjects: Array<{
//     name: string;
//     description: string;
//     url?: string;
//   }>;
  
//   challenges: string[];
//   opportunities: string[];
//   prototypeSteps?: string[];
//   currentStatus?: 'exploring' | 'building' | 'seeking-team' | 'documenting';
  
//   // Resources
//   resources?: Array<{
//     type: ResourceType;
//     title: string;
//     url: string;
//     description?: string;
//   }>;
  
//   // Additional fields
//   targetUsers?: string[];
//   impact?: string[];
//   problem?: string;
//   solution?: string;
  
//   // Timestamps
//   createdAt: string;
//   updatedAt: string;
// }