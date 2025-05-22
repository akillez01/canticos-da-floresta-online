
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedVideos from '@/components/FeaturedVideos';
import Mission from '@/components/Mission';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import AccessibilityMenu from '@/components/AccessibilityMenu';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeaturedVideos />
        <Mission />
        <Newsletter />
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
};

export default Index;
