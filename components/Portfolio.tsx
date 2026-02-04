import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'YouTube', 'SEO', 'Ads', 'Dashboards'];
  
  const works = [
    { title: 'YouTube Channel Growth', category: 'YouTube', img: 'https://picsum.photos/seed/work1/600/450' },
    { title: 'Payment Confirmation Proofs', category: 'Dashboards', img: 'https://picsum.photos/seed/work2/600/450' },
    { title: 'Google Ads ROI Analysis', category: 'Ads', img: 'https://picsum.photos/seed/work3/600/450' },
    { title: 'Site Traffic Analytics', category: 'SEO', img: 'https://picsum.photos/seed/work4/600/450' },
    { title: 'E-commerce Meta Ads Scaling', category: 'Ads', img: 'https://picsum.photos/seed/work5/600/450' },
    { title: 'Technical SEO Audit Result', category: 'SEO', img: 'https://picsum.photos/seed/work6/600/450' },
  ];

  const filteredWorks = filter === 'All' ? works : works.filter(w => w.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-yellow-400 font-bold uppercase tracking-[0.3em] mb-4">Portfolio</h2>
        <h3 className="text-4xl font-extrabold">Result Showcase</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-90 ${filter === cat ? 'gold-gradient text-black shadow-lg shadow-yellow-500/10' : 'border border-white/10 text-gray-500 hover:border-yellow-400 hover:text-yellow-400'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorks.map((work, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl glass aspect-square lg:aspect-video cursor-pointer transition-all duration-500 hover:translate-y-[-8px]">
            <img 
              src={work.img} 
              alt={work.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{work.category}</span>
              <h4 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{work.title}</h4>
              <button className="mt-4 w-10 h-10 rounded-full gold-gradient text-black flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-150 active:scale-90">
                ↗
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;