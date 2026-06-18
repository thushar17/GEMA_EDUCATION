import React from 'react';
import { Bot, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 p-1.5 rounded-lg">
              <Bot className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white">
              Kidrove<span className="text-blue-500">.</span>
            </span>
          </div>
          
          <p className="text-sm text-gray-400 flex items-center gap-1">
            &copy; {year} Kidrove Workshops. Made with <Heart className="w-4 h-4 text-red-500" /> for the future.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
