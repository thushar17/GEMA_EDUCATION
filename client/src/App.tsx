import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningJourney from './components/LearningJourney';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import RegisterSection from './components/RegisterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <LearningJourney />
        <Projects />
        <RegisterSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
