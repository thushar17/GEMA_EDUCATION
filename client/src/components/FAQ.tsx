import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "Do kids need prior coding experience?",
    answer: "Not at all. We start from the absolute basics and gradually introduce more complex concepts. As long as they know how to use a mouse and keyboard, they'll be fine."
  },
  {
    question: "What equipment do we need?",
    answer: "A laptop or desktop computer with a reliable internet connection. We use web-based tools, so there's no need to install heavy software."
  },
  {
    question: "What are the class timings?",
    answer: "Classes run twice a week for 90 minutes. We offer afternoon and evening batches so you can pick a time that works around school."
  },
  {
    question: "Will my child receive a certificate?",
    answer: "Yes, every student who completes the camp and presents their final project receives a verified Certificate of Completion from Launchpad."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes. If you decide the camp isn't a fit within the first week (after the first two classes), we offer a full, no-questions-asked refund."
  },
  {
    question: "Can parents watch the sessions?",
    answer: "Absolutely. We encourage parents to be involved, especially during the first session. Our instructors are also fully trained to guide kids independently."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

          {/* Left Side - Support Hub */}
          <div className="w-full lg:w-4/12 lg:sticky lg:top-24">
            <h3 className="text-2xl font-black text-slate-900 mb-3">Have questions?</h3>
            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
              We're happy to chat and help you decide if this program is the right fit for your child.
            </p>

            <ul className="space-y-6 mb-8 border-t border-slate-200 pt-8">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Talk to us</p>
                  <p className="text-sm font-medium text-slate-500">Mon-Fri, 9am - 6pm</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Email support</p>
                  <p className="text-sm font-medium text-slate-500">hello@launchpad.edu</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MessageSquare className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Fast response</p>
                  <p className="text-sm font-medium text-slate-500">Usually under 2 hours</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="w-full lg:w-8/12">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                Common questions
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`border transition-all duration-200 rounded-2xl overflow-hidden ${isOpen ? 'border-blue-200 shadow-sm ring-1 ring-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none group transition-all duration-200 ${isOpen ? 'bg-blue-50/50' : 'bg-white hover:bg-slate-50'}`}
                    >
                      <span className={`text-lg font-bold pr-4 transition-colors ${isOpen ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500'}`}>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="bg-white border-t border-blue-100/50"
                        >
                          <div className="p-4 sm:p-6 sm:pt-4">
                            <p className="text-slate-600 font-medium leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
