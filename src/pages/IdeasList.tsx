import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { ideas } from '../data/ideas';
import { IdeaCard, ProgressIndicator } from '../components/ideas';
import { Idea } from '../types/idea';
import ParticlesBackground from '../components/ParticlesBackground';
import { allIdeas } from '../types/sampleIdea';

const IdeasList: React.FC = () => {
  const ideas = allIdeas;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSwipe = useCallback((dir: 'left' | 'right') => {
    if (isLoading) return;
    
    setIsLoading(true);
    setDirection(dir === 'right' ? 1 : -1);
    
    setTimeout(() => {
      setCurrentIndex(prev => {
        if (dir === 'right' && prev < ideas.length - 1) return prev + 1;
        if (dir === 'left' && prev > 0) return prev - 1;
        return prev;
      });
      setIsLoading(false);
    }, 200);
  }, [isLoading]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleSwipe('right');
      } else if (e.key === 'ArrowLeft') {
        handleSwipe('left');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSwipe]);

  const handleCardClick = (idea: Idea) => {
    navigate(`/idea/${idea.id}`);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('right'),
    onSwipedRight: () => handleSwipe('left'),
    trackMouse: true,
    preventScrollOnSwipe: true,
    delta: 10, // Minimum distance to trigger swipe
  });

  const currentIdea = ideas[currentIndex];

  if (!currentIdea) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-navy to-navy-dark text-white p-4 pt-24">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold mb-4">All Caught Up! </h2>
          <p className="text-gray-300 mb-8">You've gone through all the ideas. Check back later for more or add your own!</p>
          <button 
            onClick={() => setCurrentIndex(0)}
            className="px-6 py-3 bg-skyblue hover:bg-skyblue-dark text-navy font-medium rounded-full transition-colors flex items-center mx-auto"
          >
            Reload Ideas
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-dark text-white p-4 pb-20 pt-24">
      <ParticlesBackground />
      <div className="container mx-auto max-w-md h-full flex flex-col">
        <header className="py-6 mb-4">
          <h1 className="text-3xl font-bold text-center mb-2">Explore Ideas</h1>
          <ProgressIndicator current={currentIndex + 1} total={ideas.length} />
        </header>

        <div className="relative w-full flex-1 flex items-center justify-center">
          {/* Left Arrow - Desktop Only */}
          <button
            onClick={() => handleSwipe('left')}
            disabled={currentIndex === 0 || isLoading}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Previous idea"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <main className="w-full h-full" {...handlers}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -direction * 100, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-full h-full"
                onClick={() => handleCardClick(currentIdea)}
              >
                <IdeaCard 
                  idea={currentIdea} 
                  onClick={() => handleCardClick(currentIdea)} 
                />              
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Right Arrow - Desktop Only */}
          <button
            onClick={() => handleSwipe('right')}
            disabled={currentIndex === ideas.length - 1 || isLoading}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Next idea"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
              <Loader2 className="animate-spin text-skyblue" size={32} />
            </div>
          )}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2 md:hidden">
          {ideas.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-skyblue w-6' : 'bg-white/30'
              }`}
              aria-label={`Go to idea ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Hints */}
        <div className="mt-6 text-center text-sm text-gray-400 md:hidden">
          <p>Swipe left/right to browse • Tap to view details</p>
        </div>

        {/* Desktop Navigation Hints */}
        <div className="hidden md:block mt-6 text-center text-sm text-gray-400">
          <p>Use arrow keys or click the arrows to browse • Click to view details</p>
        </div>
      </div>
    </div>
  );
};

export default IdeasList;