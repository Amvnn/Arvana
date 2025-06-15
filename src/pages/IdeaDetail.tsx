import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Code2, 
  Server, 
  Database, 
  GitBranch, 
  Cpu, 
  Globe, 
  Lock,
  ChevronDown,
  ChevronUp,
  Smartphone // Use Smartphone instead of Mobile
} from 'lucide-react';
import { Idea } from '../types/idea';
import { getIdeaById } from '../types/sampleIdea';
import ParticlesBackground from '../components/ParticlesBackground';
import BackgroundEffects from '../components/BackgroundEffects';
import AnimatedSection from '../components/AnimatedSection';

const IdeaDetail: React.FC = () => {
  const { ideaId } = useParams<{ ideaId: string }>();
  const navigate = useNavigate();
  const [idea, setIdea] = useState<Idea | null>(null);
  const [loading, setLoading] = useState(true); // Moved this declaration BEFORE useEffect
  const [expandedSections, setExpandedSections] = useState({
    problem: true,
    solution: true,
    innovation: true,
    comparison: true
  });

  useEffect(() => {
    const fetchIdea = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        const foundIdea = getIdeaById(ideaId || '');
        setIdea(foundIdea || null);
      } catch (error) {
        console.error('Error fetching idea:', error);
      } finally {
        setLoading(false);
      }
    };

    if (ideaId) {
      fetchIdea();
    }
  }, [ideaId]);

  const techIcons: Record<string, React.ReactNode> = {
    'React': <Code2 className="text-blue-400" size={20} />,
    'TypeScript': <Code2 className="text-blue-600" size={20} />,
    'Node.js': <Server className="text-green-500" size={20} />,
    'MongoDB': <Database className="text-green-600" size={20} />,
    'GraphQL': <GitBranch className="text-pink-500" size={20} />,
    'Docker': <Cpu className="text-blue-300" size={20} />,
    'AWS': <Globe className="text-orange-500" size={20} />,
    'Jest': <span className="text-red-400 font-bold">J</span>,
    'React Native': <Smartphone className="text-blue-400" size={20} />,  // Changed from Mobile to Smartphone
    'Firebase': <span className="text-yellow-400">F</span>,
    'OAuth': <Lock className="text-gray-400" size={20} />
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <motion.div
          className="text-white text-2xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white p-4">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Idea Not Found
        </motion.h1>
        <motion.button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} />
          Back to Ideas
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 relative overflow-hidden">
      <ParticlesBackground />
      <BackgroundEffects />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4 mb-6">
            <motion.span 
              className="text-5xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {idea.emoji}
            </motion.span>
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {idea.title}
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {idea.tagline}
              </motion.p>
            </div>
          </div>

          {/* Status and Tags */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              idea.status === 'in-progress' 
                ? 'bg-blue-500/20 text-blue-400' 
                : idea.status === 'idea' 
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'bg-green-500/20 text-green-400'
            }`}>
              {idea.status.replace('-', ' ')}
            </span>
            {idea.tags.map((tag, i) => (
              <motion.span 
                key={tag}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Progress Bar */}
          <motion.div 
            className="w-full bg-gray-700 rounded-full h-2.5 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${idea.progress}%` }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </motion.div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 pb-20 max-w-4xl">
        {/* Problem Section */}
        <AnimatedSection 
          className="space-y-6 mb-12"
          delay={0.2}
        >
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('problem')}
          >
            <h2 className="text-2xl font-bold">The Problem</h2>
            {expandedSections.problem ? <ChevronUp /> : <ChevronDown />}
          </div>
          
          <AnimatePresence>
            {expandedSections.problem && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4">
                  <p className="text-gray-300">{idea.problem}</p>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Common Misconception:</h3>
                    <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 rounded-r">
                      <p className="text-yellow-200">{idea.commonMisconception}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Reality Check:</h3>
                    <ul className="space-y-2">
                      {idea.realityPoints?.map((point, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <span className="text-red-400">•</span>
                          <span className="text-gray-300">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>

        {/* Solution Section */}
        <AnimatedSection 
          className="space-y-6 mb-12"
          delay={0.3}
        >
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('solution')}
          >
            <h2 className="text-2xl font-bold">The Solution</h2>
            {expandedSections.solution ? <ChevronUp /> : <ChevronDown />}
          </div>
          
          <AnimatePresence>
            {expandedSections.solution && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4">
                  <p className="text-gray-300">{idea.solution}</p>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">How It Works:</h3>
                    <p className="text-gray-300">{idea.howItWorks}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Core Innovation:</h3>
                    <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r">
                      <p className="text-blue-200">{idea.coreInnovation}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">User Experience:</h3>
                    <p className="text-gray-300">{idea.userExperience}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection 
          className="space-y-6 mb-12"
          delay={0.6}
        >
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {idea.techStack?.map((tech, i) => {
              // Array of color combinations [border, bg, text]
              const colorPalettes = [
                ['border-blue-400/30', 'bg-blue-400/10', 'text-blue-300'],
                ['border-purple-400/30', 'bg-purple-400/10', 'text-purple-300'],
                ['border-green-400/30', 'bg-green-400/10', 'text-green-300'],
                ['border-yellow-400/30', 'bg-yellow-400/10', 'text-yellow-300'],
                ['border-red-400/30', 'bg-red-400/10', 'text-red-300'],
                ['border-pink-400/30', 'bg-pink-400/10', 'text-pink-300'],
                ['border-cyan-400/30', 'bg-cyan-400/10', 'text-cyan-300'],
              ];
              
              // Select color based on index (cycles through the palette)
              const colors = colorPalettes[i % colorPalettes.length];
              
              return (
                <motion.div
                  key={tech}
                  className={`px-4 py-2 rounded-full border backdrop-blur-sm 
                              ${colors[0]} ${colors[1]} ${colors[2]} 
                              transition-all duration-300 hover:scale-105`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: i * 0.05,
                      duration: 0.3
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-2">
                    {techIcons[tech] || <Code2 className="w-4 h-4" />}
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection 
          className="space-y-6 mb-12"
          delay={0.5}
        >
          <h2 className="text-2xl font-bold">Comparison</h2>
          <div className="overflow-hidden rounded-xl border border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800/50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">Traditional System</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">Our Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {idea.traditionalSystem?.map((_, i) => (
                  <tr key={i} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 border-r border-gray-700">
                      {idea.traditionalSystem?.[i]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                      {idea.ourSystem?.[i]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Similar Projects */}
        {idea.similarProjects && idea.similarProjects.length > 0 && (
          <AnimatedSection 
            className="space-y-6 mb-12"
            delay={0.6}
          >
            <h2 className="text-2xl font-bold">Similar Projects</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {idea.similarProjects.map((project, i) => (
                <motion.a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.1 * i,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -2,
                    backgroundColor: 'rgba(255, 255, 255, 0.07)'
                  }}
                >
                  <h3 className="font-medium text-blue-400">{project.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Challenges & Opportunities */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Challenges */}
          {idea.challenges && idea.challenges.length > 0 && (
            <AnimatedSection delay={0.7}>
              <h2 className="text-2xl font-bold mb-4">Challenges</h2>
              <ul className="space-y-3">
                {idea.challenges.map((challenge, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-3 p-4 bg-red-900/10 border border-red-900/30 rounded-lg"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.1 * i,
                        type: "spring",
                        stiffness: 300
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-red-400 mt-0.5">•</span>
                    <span className="text-gray-300">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          )}

          {/* Opportunities */}
          {idea.opportunities && idea.opportunities.length > 0 && (
            <AnimatedSection delay={0.8}>
              <h2 className="text-2xl font-bold mb-4">Opportunities</h2>
              <ul className="space-y-3">
                {idea.opportunities.map((opportunity, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-3 p-4 bg-green-900/10 border border-green-900/30 rounded-lg"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.1 * i,
                        type: "spring",
                        stiffness: 300
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-green-400 mt-0.5">•</span>
                    <span className="text-gray-300">{opportunity}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          )}
        </div>

        {/* Next Steps */}
        {idea.prototypeSteps && idea.prototypeSteps.length > 0 && (
          <AnimatedSection 
            className="space-y-6 mb-12"
            delay={0.9}
          >
            <h2 className="text-2xl font-bold">Next Steps</h2>
            <div className="space-y-4">
              {idea.prototypeSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.1 * i,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                    {i + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </main>
    </div>
  );
};

export default IdeaDetail;