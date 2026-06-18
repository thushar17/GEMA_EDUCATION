import React, { useState, useEffect } from 'react';
import { Rocket, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide if scrolling down and past the navbar height, else show
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="relative w-8 h-8 flex items-end justify-center">
            <BookOpen className="w-6 h-6 text-blue-600 absolute bottom-0" strokeWidth={2.5} />
            <Rocket className="w-5 h-5 text-orange-500 absolute -top-1" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black text-slate-800 tracking-tight">
            Launchpad
          </span>
        </div>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: 'programs', label: 'Programs' },
            { to: 'workshops', label: 'Workshops' },
            { to: 'about', label: 'About' },
            { to: 'faq', label: 'FAQ' },
          ].map(({ to, label }) => (
            <a
              key={to}
              href={`#${to}`}
              className="text-slate-600 hover:text-blue-600 font-bold text-sm transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#register"
          className="bg-[#8B5CF6] hover:bg-orange-400 text-white font-bold px-5 py-2 rounded-full text-sm shadow-md hover:shadow-orange-400/40 transition-all cursor-pointer"
        >
          Enroll Now
        </a>
      </div>
    </header>
  );
};

export default Navbar;
