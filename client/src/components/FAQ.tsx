import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need any prior coding experience?",
      answer: "Not at all! This workshop is designed for complete beginners. We start from the basics and gradually move to more advanced concepts in a fun and easy way."
    },
    {
      question: "What equipment do I need?",
      answer: "All you need is a laptop or desktop computer with a stable internet connection. We use web-based tools, so there's no heavy software to install."
    },
    {
      question: "Will I get a certificate at the end?",
      answer: "Yes! Every student who successfully completes the 4-week workshop and their capstone project will receive a verified Certificate of Completion."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked <span className="text-blue-500">Questions</span></h2>
          <p className="text-lg text-gray-600">Got questions? We've got answers.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-blue-500 bg-blue-50/30' : 'border-gray-100 bg-white'}`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className={`text-lg font-bold ${openIndex === index ? 'text-blue-600' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
