import { Idea } from './idea';

export const internet3Idea: Idea = {
  id: 'internet-3',
  title: 'Internet 3.0',
  emoji: '',
  description: 'A decentralized internet infrastructure that puts control back in the hands of users.',
  short: 'Decentralized internet beyond ISPs',
  status: 'in-progress',
  progress: 30,
  tags: ['web3', 'decentralization', 'blockchain'],
  imageUrl: '/images/internet3.jpg',
  githubUrl: 'https://github.com/yourusername/internet3',
  demoUrl: 'https://demo.internet3.example',
  tagline: 'You\'re not buying data. You\'re renting control.',
  commonMisconception: 'Most people think they are buying 2GB of "data," but they\'re really just paying to access infrastructure controlled by ISPs.',
  realityPoints: [
    'Data is just access to centralized servers controlled by a few large corporations',
    'Users have no real ownership or control over their data',
    'ISPs can throttle speeds, block content, or sell user data',
    'The current system is vulnerable to censorship and single points of failure'
  ],
  howItWorks: 'A peer-to-peer network where users contribute bandwidth and storage in exchange for tokens, creating a decentralized internet infrastructure.',
  coreInnovation: 'Token-incentivized mesh networking that rewards participants and removes centralized control points.',
  userExperience: 'Seamless browsing experience with improved privacy and potentially lower costs for users.',
  techStack: ['Blockchain', 'IPFS', 'WebRTC', 'Libp2p'],
  traditionalSystem: [
    'Centralized servers',
    'Single points of failure',
    'Limited by ISP policies',
    'Vulnerable to censorship'
  ],
  ourSystem: [
    'Decentralized nodes',
    'Censorship-resistant',
    'User-controlled infrastructure',
    'Incentivized participation'
  ],
  similarProjects: [
    {
      name: 'IPFS',
      description: 'Decentralized file storage and sharing',
      url: 'https://ipfs.io/'
    },
    {
      name: 'Helium',
      description: 'Decentralized wireless network',
      url: 'https://www.helium.com/'
    }
  ],
  challenges: [
    'Network Speed: Decentralized networks can be slower than traditional CDNs for some use cases',
    'Adoption: Convincing users to switch from existing solutions will be challenging',
    'Regulation: Potential legal challenges in some jurisdictions',
    'Security: Ensuring network security in a decentralized environment'
  ],
  opportunities: [
    'Enable internet access in censored regions',
    'Lower costs by removing middlemen',
    'Create new economic models for content delivery',
    'Improve privacy and data ownership'
  ],
  prototypeSteps: [
    'Build a basic proof-of-concept with WebRTC',
    'Create tokenomics model',
    'Launch testnet with early adopters',
    'Develop browser extension for easy access'
  ],
  currentStatus: 'building',
  createdAt: '2023-01-15T00:00:00.000Z',
  updatedAt: '2023-06-10T14:30:00.000Z',
  resources: [
    {
      type: 'article',
      title: 'The Case for a Decentralized Web',
      url: 'https://example.com/decentralized-web',
      description: 'An in-depth look at the benefits of decentralized internet infrastructure'
    }
  ],
  targetUsers: [
    'Privacy-conscious individuals',
    'People in censored regions',
    'Content creators',
    'Decentralization advocates'
  ],
  impact: [
    'Democratize internet access',
    'Reduce costs for end users',
    'Increase privacy and security',
    'Enable free speech'
  ],
  keyPoints: [
    "Decentralized web infrastructure",
    "User-owned data and identity",
    "Censorship-resistant platforms"
  ],
  problem: 'Centralized control of internet infrastructure leads to privacy issues, censorship, and high costs.',
  solution: 'A decentralized network where users collectively own and operate the infrastructure.'
};

export const biohashIdea: Idea = {
  id: 'biohash',
  title: 'BioHash',
  emoji: '',
  description: 'Irreversible biometric hashes to prove media authenticity and combat deepfakes.',
  short: 'Proof of authenticity in an AI-generated world.',
  status: 'idea',
  progress: 15,
  tags: ['biometrics', 'cybersecurity', 'deepfakes', 'identity', 'media verification'],
  imageUrl: '/images/biohash.jpg',
  githubUrl: 'https://github.com/yourusername/biohash',
  demoUrl: 'https://biohash-demo.example',
  tagline: 'Because seeing is no longer believing.',
  commonMisconception: 'If you see a video or hear a voice recording, it must be real.',
  realityPoints: [
    'Deepfakes are indistinguishable to the human eye and spreading fast.',
    'Minimal data is needed to replicate someone\'s face or voice.',
    'There\'s no common system to verify media authenticity today.',
    'Fake videos can go viral before truth can catch up, causing irreversible damage.'
  ],
  howItWorks: 'Generate a cryptographic BioHash using facial/body metrics during trusted media capture and attach it to the content as a proof of authenticity.',
  coreInnovation: 'Biometric feature-based irreversible hashing to verify real human presence in media.',
  userExperience: 'Content creators and journalists embed BioHash at creation time; platforms and viewers can instantly verify authenticity without exposing raw biometric data.',
  techStack: ['FaceMesh', 'TensorFlow.js', 'SHA-256', 'IPFS', 'Zero-Knowledge Proofs'],
  traditionalSystem: [
    'No identity proof in media',
    'Hard-to-detect deepfakes',
    'Manual fact-checking',
    'Delayed or no response to fake content'
  ],
  ourSystem: [
    'Embedded authenticity proofs',
    'Human-verified presence in content',
    'Fast, cryptographic verification',
    'Decentralized biometric hash registry'
  ],
  similarProjects: [
    {
      name: 'Truepic',
      description: 'Secures image authenticity at capture time.',
      url: 'https://truepic.com/'
    },
    {
      name: 'Project Origin (Microsoft)',
      description: 'Uses metadata and origin tracking for content.',
      url: 'https://www.microsoft.com/en-us/research/project/project-origin/'
    }
  ],
  challenges: [
    'Privacy: Ensuring biometric data cannot be reverse-engineered.',
    'Adoption: Needs integration into journalism, media, and court workflows.',
    'Performance: Real-time hashing and storage could be compute-intensive.',
    'Regulation: Legal implications of biometric tracking and verification.'
  ],
  opportunities: [
    'Set a new standard for media authenticity on social and legal platforms.',
    'Empower citizens and journalists in authoritarian or fake news-prone regions.',
    'Enable legal-grade verification of videos and interviews.',
    'Reduce misinformation and viral manipulation of public opinion.'
  ],
  prototypeSteps: [
    'Build a prototype that captures facial data from video in real-time using Mediapipe.',
    'Hash key metrics into a one-way fingerprint and store on IPFS.',
    'Build a web viewer to check if future content matches the original BioHash.',
    'Design privacy-respecting UX around hash consent and public visibility.'
  ],
  currentStatus: 'documenting',
  createdAt: '2025-06-04T00:00:00.000Z',
  updatedAt: '2025-06-04T12:00:00.000Z',
  resources: [
    {
      type: 'article',
      title: 'The Deepfake Dilemma: How AI Is Manipulating Reality',
      url: 'https://example.com/deepfake-dilemma',
      description: 'A look into how generative AI is threatening truth in media.'
    }
  ],
  targetUsers: [
    'Journalists',
    'Media platforms',
    'Court systems',
    'Cybersecurity researchers',
    'Human rights activists'
  ],
  impact: [
    'Reinstate trust in digital media',
    'Create standard for verifying media originality',
    'Prevent fake arrests or reputational attacks',
    'Empower ethical AI use'
  ],
  problem: 'AI-generated media is indistinguishable from real, making misinformation nearly impossible to stop.',
  solution: 'Attach cryptographically verifiable biometric signatures to authentic content — proof of truth at the point of creation.',
  keyPoints: [
    "Decentralized biometric verification",
    "Zero-knowledge proof integration",
    "Blockchain-based timestamping"
  ]
};

// Export all ideas as an array
export const allIdeas: Idea[] = [internet3Idea, biohashIdea];

// Helper function to get an idea by ID
export const getIdeaById = (id: string): Idea | undefined => {
  return allIdeas.find(idea => idea.id === id);
};

// Export default for backward compatibility
export default allIdeas;