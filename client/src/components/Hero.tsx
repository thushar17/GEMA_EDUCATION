import React from 'react';
import { Bot, Sparkles, Cpu, Zap } from 'lucide-react';
import bgVideo from '../assets/bg vdo.mp4';

const Hero: React.FC = () => {
  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOutcomes = () => {
    document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#F8FAFC] flex items-center">

      {/* ── Background Blobs & Floating Decorative Elements ── */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/50 rounded-l-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-100/50 rounded-tr-full blur-3xl opacity-60 pointer-events-none" />

      {/* Floating Icons */}
      <div className="absolute top-32 left-10 text-cyan-300 animate-bounce opacity-70" style={{ animationDuration: '4s' }}>
        <Bot size={48} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-32 right-10 lg:right-auto lg:left-1/2 text-orange-300 animate-pulse opacity-60" style={{ animationDuration: '5s' }}>
        <Cpu size={56} strokeWidth={1.5} />
      </div>
      <div className="absolute top-40 right-20 text-yellow-300 animate-bounce opacity-80" style={{ animationDuration: '3.5s' }}>
        <Sparkles size={32} />
      </div>
      <div className="absolute bottom-40 left-20 text-purple-300 opacity-50" style={{ animation: 'bounce-slow 6s infinite' }}>
        <Zap size={40} strokeWidth={1.5} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left Content (Text) ── */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-800 leading-[1.1] mb-6 tracking-tight">
              What If Your Child Built Their First <span className="text-blue-600">Robot</span> This Summer?
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 font-semibold max-w-lg mb-10 leading-relaxed">
              A fun 4-week online workshop where kids learn robotics, coding, and AI by creating real projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={scrollToRegister}
                className="bg-[#8B5CF6] hover:bg-[#00c2ea] text-white font-black px-8 py-4 rounded-full shadow-xl shadow-[#00D4FF]/20 transition-transform hover:-translate-y-1 text-lg flex justify-center items-center gap-2"
              >
                Reserve Your Seat
              </button>
              <button
                onClick={scrollToOutcomes}
                className="bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-bold px-8 py-4 rounded-full transition-transform hover:-translate-y-1 text-lg flex justify-center items-center"
              >
                See Projects
              </button>
            </div>
          </div>

          {/* ── Right Content (Video) ── */}
          <div className="w-full lg:w-3/5 relative mt-8 lg:mt-0">

            {/* Playful curved container for the video */}
            <div className="relative aspect-square lg:aspect-[4/3] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-200 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
                src={bgVideo}
              />
            </div>

            {/* Fun overlay card */}
            <div className="absolute -bottom-6 -left-4 lg:-left-12 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-yellow-100 p-2 rounded-full">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold leading-none">Learning</p>
                <p className="text-lg text-slate-800 font-black leading-tight">Made Fun!</p>
              </div>
            </div>

            {/* Fun dot pattern behind the video */}
            <div className="absolute -top-8 -right-8 w-32 h-32 text-blue-200 -z-10">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2"></circle>
                </pattern>
                <rect width="100" height="100" fill="url(#dots)"></rect>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
