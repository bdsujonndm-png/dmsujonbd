import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'YouTube Video Promotion', level: 100 },
    { name: 'YouTube Video SEO', level: 99 },
    { name: 'Brand Management', level: 95 },
    { name: 'Google Ads', level: 92 },
    { name: 'Meta Ads', level: 88 },
    { name: 'Video Editing', level: 85 },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs mb-4"></h2>
        <h3 className="text-4xl md:text-5xl font-extrabold italic">
          MY <span className="text-gold-gradient">SKILLS...</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
        {skills.map((skill, idx) => (
          <div key={idx} className="space-y-4 group">
            <div className="flex justify-between items-end font-black">
              <span className="uppercase text-[10px] tracking-[0.3em] text-gray-500 group-hover:text-yellow-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-yellow-400 text-lg tracking-tighter">{skill.level}%</span>
            </div>
            <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
              <div 
                className="h-full gold-gradient shadow-[0_0_20px_rgba(251,191,36,0.4)] rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: `${skill.level}%` }}
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-white/40 blur-[2px]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
