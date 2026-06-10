import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutNarrative from '../components/about/AboutNarrative';
import AboutTimeline from '../components/about/AboutTimeline';
import AboutMissionGoal from '../components/about/AboutMissionGoal';
import AboutCoreValues from '../components/about/AboutCoreValues';
import AboutFounder from '../components/about/AboutFounder';

// Animation Utils
import { killAllScrollTriggers, refreshScrollTriggers } from '../lib/animations';

const AboutUs = () => {

  useEffect(() => {
    // Refresh ScrollTriggers after the page loads and components mount
    // to ensure correct pinning heights
    refreshScrollTriggers();

    return () => {
      // Clean up triggers on unmount to prevent leaks and weird behaviors
      killAllScrollTriggers();
    };
  }, []);

  return (
    <div className="about-page">
      <AboutHero />
      <AboutNarrative />
      <AboutTimeline />
      <AboutFounder />
      <AboutMissionGoal />
      <AboutCoreValues />
    </div>
  );
};

export default AboutUs;
