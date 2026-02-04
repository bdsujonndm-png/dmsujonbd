import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: 'YouTube Video SEO', desc: 'Keyword research, title optimization, high-ranking tag strategy, and video ranking results.', icon: '📺' },
    { title: 'Google Ads (SEM)', desc: 'Campaign setup, precise audience targeting, and ROI-focused optimization for lead generation.', icon: '🔍' },
    { title: 'Meta (FB/IG) Ads', desc: 'Creative ad architectures and scaling strategies to drive conversions on Facebook and Instagram.', icon: '♾️' },
    { title: 'Website SEO', desc: 'On-page optimization, technical audits, and high-authority link building strategies.', icon: '🌐' },
    { title: 'Social Media Mgmt', desc: 'Professional brand building and organic growth strategies across all major platforms.', icon: '📱' },
    { title: 'Content Strategy', desc: 'Data-driven content planning that aligns with business objectives and search intent.', icon: '✍️' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">
            What I Do For <span className="text-gold-gradient italic font-serif">Clients</span>
          </h3>
        </div>
        <div className="text-gray-500 font-medium max-w-sm text-sm border-l border-white/10 pl-6">
          Providing specialized solutions to scale your digital presence and maximize ROI through expert marketing.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="glass p-10 rounded-3xl neon-border group hover:bg-yellow-400/[0.02] transition-all duration-500 flex flex-col items-start">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-yellow-400/10 transition-all duration-500">
              {service.icon}
            </div>
            <h4 className="text-2xl font-black mb-4 group-hover:text-yellow-400 transition-colors">{service.title}</h4>
            <p className="text-gray-500 leading-relaxed text-sm mb-8">
              {service.desc}
            </p>
            <div className="mt-auto flex items-center text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer group-hover:gap-3 transition-all duration-300">
              Explore Detail <span className="text-lg">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;