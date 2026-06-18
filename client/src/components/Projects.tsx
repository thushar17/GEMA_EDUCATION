import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "Smart Robot Car",
    icon: "🤖",
    desc: "Learn sensors, movement, and automation to build a car that navigates its environment.",
    skills: ["Sensors", "Motors", "Logic"],
    difficulty: "Beginner",
    color: "from-blue-500 to-cyan-400",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200"
  },
  {
    title: "AI Chat Assistant",
    icon: "🧠",
    desc: "Build a simple chatbot and understand the core logic behind modern AI models.",
    skills: ["NLP Basics", "AI Logic", "API Calls"],
    difficulty: "Intermediate",
    color: "from-purple-500 to-pink-400",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200"
  },
  {
    title: "Smart Traffic System",
    icon: "🚦",
    desc: "Create an intelligent traffic simulation to understand conditionals and systems.",
    skills: ["Conditionals", "Timers", "System Design"],
    difficulty: "Beginner",
    color: "from-red-500 to-orange-400",
    badgeColor: "bg-red-100 text-red-700 border-red-200"
  },
  {
    title: "AI-Powered Game",
    icon: "🎮",
    desc: "Build an interactive game using Scratch concepts and custom variables.",
    skills: ["Game Design", "Variables", "Events"],
    difficulty: "Intermediate",
    color: "from-green-500 to-emerald-400",
    badgeColor: "bg-green-100 text-green-700 border-green-200"
  },
  {
    title: "Eco Robot Challenge",
    icon: "🌱",
    desc: "Design a robot that solves a real-world environmental problem.",
    skills: ["Problem Solving", "Design", "Automation"],
    difficulty: "Advanced",
    color: "from-teal-500 to-cyan-400",
    badgeColor: "bg-teal-100 text-teal-700 border-teal-200"
  },
  {
    title: "Final Innovation Project",
    icon: "🏆",
    desc: "Create and showcase your very own robotics idea from scratch.",
    skills: ["Creativity", "Presentation", "Full Stack"],
    difficulty: "Expert",
    color: "from-yellow-500 to-orange-400",
    badgeColor: "bg-yellow-100 text-yellow-700 border-yellow-200"
  }
];

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollToDot = (index: number) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * index;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="pb-24 pt-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mb-4 tracking-tight">
            🤖 Amazing Projects <span className="text-purple-600">You'll Build</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Real projects that turn learning into creation.
          </p>
        </div>

        {/* Premium Showcase Slider Container */}
        <div className="relative w-full shadow-2xl rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden group">

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((proj, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 snap-start flex flex-col md:flex-row h-auto md:h-[450px]"
              >
                {/* Left Side: Visual Showcase */}
                <div className={`w-full md:w-5/12 h-64 md:h-full bg-gradient-to-br ${proj.color} flex flex-col items-center justify-center p-8 relative overflow-hidden`}>
                  {/* Subtle pattern background */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                  <span className="text-8xl md:text-[140px] drop-shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-700">
                    {proj.icon}
                  </span>
                </div>

                {/* Right Side: Details & Skills */}
                <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col justify-center bg-white">

                  <div className="flex items-center gap-3 mb-5">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border ${proj.badgeColor}`}>
                      {proj.difficulty}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="text-slate-600 font-medium text-lg mb-8 leading-relaxed max-w-xl">
                    {proj.desc}
                  </p>

                  <div>
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">
                      Skills Mastered
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {proj.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-slate-700 font-bold text-sm shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls Overlay */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 right-4 justify-between pointer-events-none">
            <button
              onClick={() => scroll('left')}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-700 hover:text-purple-600 hover:bg-white shadow-lg pointer-events-auto transition-all disabled:opacity-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={activeIndex === projects.length - 1}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-700 hover:text-purple-600 hover:bg-white shadow-lg pointer-events-auto transition-all disabled:opacity-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* Mobile Controls & Dots */}
        <div className="flex flex-col items-center mt-10 gap-6">
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToDot(i)}
                className={`transition-all duration-300 rounded-full h-3 ${i === activeIndex
                    ? 'w-10 bg-purple-600'
                    : 'w-3 bg-slate-300 hover:bg-slate-400'
                  }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4 md:hidden">
            <button
              onClick={() => scroll('left')}
              disabled={activeIndex === 0}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 disabled:opacity-50 shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={activeIndex === projects.length - 1}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 disabled:opacity-50 shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
