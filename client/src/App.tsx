import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import LearningJourney from './components/LearningJourney';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import RegisterSection from './components/RegisterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Fixed navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero — full-screen video background */}
        <Hero />

        {/* 2. Learning Journey Timeline */}
        <LearningJourney />

        {/* 3. Amazing Projects Grid */}
        <Projects />

        {/* 4. Registration Form Section */}
        <RegisterSection />

        {/* 5. FAQ & Support Hub */}
        <FAQ />
      </main>

      {/* Dark footer */}
      <Footer />
    </div>
  );
}

export default App;
