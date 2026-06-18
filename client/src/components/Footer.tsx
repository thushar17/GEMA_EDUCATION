import React from 'react';
import { Rocket, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 flex items-end justify-center">
              <BookOpen className="w-6 h-6 text-blue-400 absolute bottom-0" strokeWidth={2.5} />
              <Rocket className="w-5 h-5 text-orange-400 absolute -top-1" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Launchpad
            </span>
          </div>

          {/* Tagline */}
          <p className="text-slate-400 font-medium max-w-md leading-relaxed">
            Helping curious young minds learn through hands-on experiences, creativity, and technology.
          </p>

          {/* Quick links */}
          <div className="flex gap-8 text-sm font-bold text-slate-400 flex-wrap justify-center mt-2">
            {['Programs', 'Workshops', 'FAQ', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 w-full my-4" />

          {/* Copyright */}
          <p className="text-slate-500 text-sm font-semibold">
            © {new Date().getFullYear()} Launchpad Education Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
