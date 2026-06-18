import React from 'react';
import { Link } from 'react-scroll';
import { Cpu, Rocket, Star, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 text-yellow-400 animate-bounce" style={{ animationDuration: '3s' }}>
        <Star size={40} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 text-blue-300 animate-pulse">
        <Cpu size={60} />
      </div>
      <div className="absolute top-40 right-20 text-orange-400 animate-bounce" style={{ animationDuration: '4s' }}>
        <Sparkles size={30} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex gap-2 flex-wrap justify-center lg:justify-start">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Age 8–14 Years</span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">4 Weeks</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Online</span>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">₹2,999</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Unleash Your Child's <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Inner Inventor
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Join our exclusive AI & Robotics Summer Workshop! A fun, interactive, and hands-on experience designed to spark curiosity and build future-ready skills in a playful environment.
            </p>
            
            <div className="pt-4">
              <Link to="register" smooth={true} duration={500} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1 cursor-pointer">
                Secure Your Spot Now
                <Rocket className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-blue-100 aspect-video flex items-center justify-center">
              {/* Fallback illustration since we don't have images */}
              <div className="text-center p-8">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" style={{ animationDuration: '2s' }}></div>
                    <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-6 rounded-full relative z-10 shadow-lg">
                      <Cpu className="w-20 h-20 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Build Your First Robot!</h3>
                <p className="text-blue-600 mt-2">Interactive online sessions</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
