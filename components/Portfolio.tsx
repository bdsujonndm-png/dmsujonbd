import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [itemsToShow, setItemsToShow] = useState(5);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  const categories = ['All', 'YouTube', 'SEO', 'Ads', 'Dashboards'];
  
  const works = [
    { title: 'YouTube Video SEO', category: 'YouTube', img: 'https://picsum.photos/seed/yt1/800/600' },
    { title: 'Google Ads Campaign Success', category: 'Ads', img: 'https://picsum.photos/seed/ads1/800/600' },
    { title: 'Channel views and engagement.', category: 'YouTube', img: 'https://picsum.photos/seed/yt2/800/600' },
    { title: 'YouTube Video SEO', category: 'YouTube', img: 'https://picsum.photos/seed/yt3/800/600' },
    { title: 'Payment Proof', category: 'Dashboards', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9sjLEJadTm9VMaC-vKXg8zpAX-HAckO4Prl_qpD7EEP8cHAHOjtmsj9DQdVwXLglU3qgYif2CyQb8kekxHOj8i03JYHMwCVWHEsnMJPDbpKM_bpXRkCQFSJAI4-id84MyViqCR4BOEdw-R8sZq9GW8G4b3aKoVu83vVUsr5gd0PidY9ph-gMm7EAOTsE/s1600/Screenshot_1.png' },
    { title: 'Extra SEO Project', category: 'SEO', img: 'https://picsum.photos/seed/seo1/800/600' },
  ];

  const filteredWorks = filter === 'All' ? works : works.filter(w => w.category === filter);

  return (
    /* py-20 muche pt-0 kora hoyeche jate uporer gap chole jay */
    <div className="max-w-7xl mx-auto px-6 pt-0 pb-20 bg-[#050505] min-h-screen text-white font-sans">
      
      {/* mb-16 ke mb-8 kora hoyeche jate Title er upore-niche faka kome */}
      <div className="text-center mb-10 pt-4">
        <h2 className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Portfolio</h2>
        <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">Result Showcase</h3>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setItemsToShow(5); }}
            className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'bg-[#111] text-gray-400 border border-white/5 hover:border-yellow-500'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Smart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {filteredWorks.slice(0, itemsToShow).map((work, idx) => (
          <div 
            key={idx} 
            className={`group flex flex-col bg-[#0d0d0d] rounded-[2rem] p-4 border border-white/10 hover:border-yellow-500/40 transition-all duration-500 ${idx < 2 ? 'md:col-span-3' : 'md:col-span-2'}`}
          >
            {/* Image Box */}
            <div 
              onClick={() => setSelectedImg(work.img)}
              className="relative h-[280px] w-full rounded-2xl overflow-hidden bg-black cursor-pointer"
            >
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                 <div className="bg-yellow-500 text-black p-3 rounded-full">
                    <span className="text-xl font-bold">🔍</span>
                 </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 px-1">
              <span className="text-[10px] text-yellow-500 font-black uppercase tracking-widest">{work.category}</span>
              <h4 className="text-lg font-bold text-white mt-1 group-hover:text-yellow-500 transition-colors line-clamp-1">{work.title}</h4>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-60">
                 <button className="text-[10px] font-bold uppercase tracking-widest">View Full Case</button>
                 <span className="text-yellow-500">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {itemsToShow < filteredWorks.length && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setItemsToShow(works.length)}
            className="px-12 py-4 bg-yellow-500 rounded-2xl font-black text-[11px] uppercase tracking-widest text-black hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20"
          >
            Explore More Results ↗
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[999] bg-black/98 flex items-center justify-center p-4 backdrop-blur-md" onClick={() => setSelectedImg(null)}>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img src={selectedImg} alt="Preview" className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
