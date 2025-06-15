import React from 'react';
import Hero from '../components/Hero';
import MissionSection from '../components/MissionSection';
import FeaturedProducts from '../components/ProductCard';
import ProblemSolutionTimeline from '../components/ProblemSolutionTimeline';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <MissionSection />
      <FeaturedProducts />
      <ProblemSolutionTimeline />
      <CallToAction />
    </>
  );
};

export default Home;