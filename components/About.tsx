import React from 'react';

const About: React.FC = () => {
  const details = [
    { label: 'Full Name', value: 'SUJON AHMED' },
    { label: 'City', value: 'Rangpur, Bangladesh' },
    { label: 'Age', value: '19 Years Old' },
    { label: 'Email', value: 'bdsujonndm@gmail.com' },
    { label: 'Nationality', value: 'Bangladeshi' },
    { label: 'Specialization', value: 'YouTube Promotion & SEO Expert' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-5/12 relative group cursor-pointer">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-yellow-500/20 rounded-3xl -z-10 group-hover:-top-6 group-hover:-left-6 transition-all duration-500"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://imagehttps://https://t.me/c/3109939256/146.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi25LTz1sL9E8Q3K7UnFAqp9qiGoT1gnO6K4dZTkhyJJtmcGG2dbavHzvtMge6f2cuj0D93F5_SZ3KV3XOthi3591vT89nJO5jAzTN_2I4cXdhIGTzy7bt_v-0Z75rgDiYTm0RpkLJw74d-jviHjkWra2ig2QXX8q248q5njt0OD8AUMQi1R2AT7jsrD3M/s320/Screenshot_10.pngs.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="sujon Working" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl hidden md:block transition-all duration-500 group-hover:translate-y-[-10px] group-hover:translate-x-[10px]">
            <div className="text-yellow-400 text-3xl font-black">4+</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Years Exp.</div>
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          <div className="mb-10">
            <h2 className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs mb-4">Discovery</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 italic underline decoration-yellow-500 decoration-2 underline-offset-[12px]">
              About Me!
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
              As a dedicated <span className="text-white font-medium">Professional Digital Marketer</span>,  I’m Sujon Ahmed, a professional digital marketer with a wealth of experience in SEO technical skills, social media management, and Google Ads campaigns. I specialize in helping businesses like yours attract more customers, increase visibility, and achieve measurable growth through strategic, data-driven marketing. With advanced SEO techniques, I can boost your website’s ranking on search engines, driving high-quality, organic traffic. My social media strategies are designed to engage your audience, build brand loyalty, and foster lasting connections. And with targeted Google Ads, I ensure every dollar you spend is maximized for the best possible ROI. Let’s collaborate to make your brand shine online and drive the results that matter most to you. I’m ready to turn your digital marketing goals into reality! Looking forward to working together! Best, Sujon Ahmed, Digital Marketing Specialist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
            {details.map((detail, idx) => (
              <div key={idx} className="flex flex-col border-b border-white/5 pb-4 group cursor-default">
                <span className="text-yellow-400 font-black text-[10px] uppercase tracking-[0.2em] mb-1 group-hover:translate-x-2 transition-transform duration-300">{detail.label}</span>
                <span className="text-white font-bold text-lg transition-colors group-hover:text-yellow-500/80">{detail.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-10 py-4 gold-gradient text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest shadow-xl">
              Hire Me Now
            </a>
            <button className="px-10 py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest glass">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
