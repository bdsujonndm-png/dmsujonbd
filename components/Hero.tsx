
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Professional Digital Marketer',
    'YouTube Expert',
    'Google Ads Expert',
    'Facebook Ads Expert',
    'Social Media Manager'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative mb-12 group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#0a0a0a] shadow-2xl bg-[#111]">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhr5E3Opd8Ia9Zm6T-3z7VBAeS-BInMVkxkrTtXvB1fY5cmI7oxlmlc8yWf-G2Mnfp91RPB7GHeOiPmn_SVQxypqKPbdZbs1RPwkQAoSAD7OMk308Q0gqBTnD7aZNKlwuvzk2EPojvCWFvs-yZ5Ug77PHGASJloTJN7zmmdR3lY2OlYfwJYoGg8yQ5gJuc/w275-h318/photo_2025-10-27_00-48-57.jpg" 
            alt="Sujon Ahmed" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 rounded-full border-4 border-[#050505] animate-pulse"></div>
      </div>

      <div className="max-w-4xl text-center relative z-10">
        <span className="inline-block py-1 px-4 mb-6 rounded-full border border-yellow-500/30 text-yellow-400 text-[10px] font-bold uppercase tracking-[0.4em] glass transition-all hover:bg-yellow-400/10 cursor-default min-h-[28px]">
          {text}<span className="animate-pulse">|</span>
        </span>
        
        <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Hi, <span className="text-gold-gradient italic font-serif">I'm Sujon Ahmed</span>
          <br className="hidden md:block" /> 
          <span className="block mt-2">A {text}<span className="text-yellow-400 animate-pulse">|</span></span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          A professional Freelancer passionate about digital marketing. My services, from YouTube SEO to Google Ads, are designed to elevate your brand's presence and drive exceptional results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#portfolio" className="px-10 py-4 gold-gradient text-black font-extrabold rounded-full hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
            Explore Portfolio
          </a>
          <a href="#contact" className="px-10 py-4 border border-white/10 hover:border-yellow-400 text-white hover:text-yellow-400 font-bold rounded-full transition-all glass transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
