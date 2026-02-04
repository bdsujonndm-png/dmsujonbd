import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  desc?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, subtitle, desc }) => (
  <div className="relative pl-10 border-l-2 border-yellow-500/20 pb-12 last:pb-0 group">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-yellow-400 shadow-[0_0_15px_rgba(251,191,36,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
    <div className="glass p-8 rounded-2xl hover:translate-x-3 transition-all duration-500 neon-border bg-gradient-to-br from-white/[0.03] to-transparent">
      <span className="inline-block px-3 py-1 rounded-md bg-yellow-400/10 text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-4">
        {year}
      </span>
      <h4 className="text-2xl font-black text-white mb-1">{title}</h4>
      <p className="text-yellow-500/80 font-bold text-sm mb-4">{subtitle}</p>
      {desc && <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>}
    </div>
  </div>
);

const Resume: React.FC = () => {
  const education = [
    { 
      year: '2020 - Present', 
      title: 'MBA (Business Administration)', 
      institution: 'University of Rajshahi',
      desc: 'Focusing on strategic management and digital marketing leadership.'
    },
    { 
      year: '2016 - 2020', 
      title: 'BBA (Business Administration)', 
      institution: 'University of Rajshahi',
      desc: 'Foundation in marketing principles and consumer behavior.'
    },
  ];

  const experience = [
    { 
      year: '2021 - Present', 
      title: 'CEO & Founder', 
      company: 'Milon IT Park',
      desc: 'Leading a team of specialists to deliver high-ROI digital marketing solutions globally.'
    },
    { 
      year: '2019 - 2021', 
      title: 'Professional Digital Marketer', 
      company: 'Freelance Specialist',
      desc: 'Specialized in YouTube SEO, Google Ads, and Meta advertising for 500+ international clients.'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs mb-4">My Pathway</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold underline decoration-yellow-500 decoration-2 underline-offset-[16px]">
          My Resume
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h4 className="text-2xl font-black mb-12 flex items-center gap-4">
            <span className="w-12 h-1 gold-gradient rounded-full"></span>
            Education
          </h4>
          <div className="space-y-0">
            {education.map((item, idx) => (
              <TimelineItem key={idx} year={item.year} title={item.title} subtitle={item.institution} desc={item.desc} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-black mb-12 flex items-center gap-4">
            <span className="w-12 h-1 gold-gradient rounded-full"></span>
            Experience
          </h4>
          <div className="space-y-0">
            {experience.map((item, idx) => (
              <TimelineItem key={idx} year={item.year} title={item.title} subtitle={item.company} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;