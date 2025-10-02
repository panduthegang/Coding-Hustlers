import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden" style={{
      background: `
        radial-gradient(circle at 78% 30%, rgba(255, 228, 196, 0.3) 0%, transparent 100%),
        radial-gradient(circle at 55% 90%, rgba(140, 188, 254, 0.4) 0%, transparent 100%),
        radial-gradient(circle at 0% 0%, rgba(142, 73, 255, 0.5) 0%, transparent 100%),
        radial-gradient(circle at 100% 100%, rgba(251, 255, 73, 0.3) 0%, transparent 100%),
        #F5F5F5
      `
    }}>
      <div className="absolute inset-0 bg-[rgba(245,245,245,0.65)] backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-['Syne']">
            <span className="bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text text-transparent">Code.</span>
            <span className="text-gray-400">Compete.</span>
            <br />
            <span className="bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text text-transparent">Conquer</span>
          </h1>

          <div className="space-y-4 text-gray-700 font-['Syne']">
            <p className="text-xl md:text-2xl leading-relaxed">
              Elevate Your Programming Skills With Coding Hustlers. Dive Into Challenging Coding Quests And Join A Vibrant Community Of Coding Enthusiasts.
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              Are You Ready For The Hustle?
            </p>
          </div>

          <button onClick={() => navigate('/signup')} className="bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] hover:opacity-90 text-white px-10 py-5 rounded-full text-xl font-['Syne'] transition-all shadow-lg hover:shadow-xl">
            Create Account
          </button>
        </div>

        <div className="relative">
          <div className="absolute top-20 right-0 w-32 h-32 bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] rounded-full opacity-60 blur-3xl animate-pulse"></div>
          <div className="absolute top-72 left-20 w-32 h-32 bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] rounded-full opacity-60 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <img
            src="/hero-person.png"
            alt="Coding enthusiast"
            className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
