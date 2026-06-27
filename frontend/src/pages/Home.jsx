import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import API from '../utils/api';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import WorksSection from '../components/WorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
import ProcessSection from '../components/ProcessSection';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <WorksSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Home;
