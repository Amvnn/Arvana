import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Tag as TagIcon } from 'lucide-react';
import { Idea } from '../../types/idea';

interface IdeaCardProps {
  idea: Idea;
  onClick: () => void;
}

const statusConfig = {
  'idea': { label: 'Idea Phase', emoji: '💡', color: 'from-yellow-500 to-amber-500' },
  'draft': { label: 'Draft', emoji: '📝', color: 'from-gray-500 to-gray-600' },
  'ready': { label: 'Ready', emoji: '✅', color: 'from-green-500 to-emerald-600' },
  'in-progress': { label: 'In Progress', emoji: '🚧', color: 'from-blue-500 to-cyan-500' },
  'launched': { label: 'Launched', emoji: '🚀', color: 'from-purple-500 to-pink-500' },
  'on-hold': { label: 'On Hold', emoji: '⏸️', color: 'from-gray-400 to-gray-500' },
} as const;

const gradientColors = [
  'from-purple-500 to-pink-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-yellow-500 to-amber-500',
  'from-red-500 to-pink-500',
  'from-indigo-500 to-purple-500',
  'from-cyan-500 to-blue-500',
  'from-pink-500 to-rose-500',
];

const getRandomGradient = (id: string) => {
  const index = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradientColors.length;
  return gradientColors[index];
};

const getRandomImageUrl = (idea: Idea) => {
  const baseUrl = 'https://source.unsplash.com/random/400x200/?';
  const searchTerms = idea.tags?.join(',') || 'technology';
  return `${baseUrl}${searchTerms}&sig=${idea.id}`;
};

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onClick }) => {
  const [showPreviewCue, setShowPreviewCue] = useState(true);
  const status = statusConfig[idea.status] || statusConfig.idea;
  const [imageLoaded, setImageLoaded] = useState(false);
  const gradient = getRandomGradient(idea.id);
  const imageUrl = getRandomImageUrl(idea);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreviewCue(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="relative group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 border-2 border-white/50 rounded-2xl opacity-0 group-hover:opacity-50 blur-md transition-all duration-300 group-hover:duration-200" />
      {/* Card container */}
      <div 
        className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden flex flex-col h-full cursor-pointer 
                 transition-all duration-300 hover:bg-white/9 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
        onClick={onClick}
      >
        {/* Thumbnail Section */}
        <div className={`h-40 relative overflow-hidden ${!imageLoaded ? gradient : ''}`}>
          {!imageLoaded && (
            <div className={`absolute inset-0 bg-gradient-to-r ${gradient} animate-pulse`} />
          )}
          <img
            src={imageUrl}
            alt={idea.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
          />
          <span className="absolute top-2 right-2 text-4xl opacity-80">{idea.emoji}</span>
        </div>
        
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title & Subtitle */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white">
              {idea.emoji} {idea.title.toUpperCase()}
            </h3>
            <p className="text-gray-400 italic mt-1">
              {idea.short}
            </p>
          </div>

          {/* Key Points */}
          {idea.keyPoints && idea.keyPoints.length > 0 && (
            <div className="mb-4">
              <ul className="space-y-2">
                {idea.keyPoints.slice(0, 3).map((point, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start group"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.05 * index,
                      type: "spring",
                      stiffness: 500,
                      damping: 25
                    }}
                  >
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500/10 text-blue-300 mr-2 mt-0.5 flex-shrink-0 transform group-hover:scale-110 transition-transform">
                      <span className="text-xs font-medium">{index + 1}</span>
                    </span>
                    <span className="text-sm text-gray-300 leading-tight group-hover:text-white transition-colors">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Benefits */}
          <div className="space-y-2.5 mb-6">
            {idea.keyBenefits?.slice(0, 3).map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Check className="text-green-400 mt-0.5 mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Status & Tags */}
          <div className="mt-auto space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center text-sm text-gray-400">
              <Clock size={16} className="mr-2" />
              <span>Status: <span className="font-medium text-white">{status.label}</span></span>
            </div>
            
            {idea.tags?.length > 0 && (
              <div className="flex items-center flex-wrap gap-1.5">
                <TagIcon size={16} className="text-gray-400 mr-1" />
                <span className="text-xs text-gray-400">Tags: </span>
                {idea.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-300"
                  >
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Interactive Cues */}
          <div className="mt-6 space-y-2">
            {showPreviewCue && (
              <div className="text-center text-xs text-gray-500 flex items-center justify-center">
                <span className="mr-1">🔍</span> Hold to preview
              </div>
            )}
            
            <div className="text-center text-xs text-gray-500/50 group-hover:text-gray-400/80 transition-colors">
              Click to view detailed idea
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IdeaCard;
