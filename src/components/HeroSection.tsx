import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-purple-100 via-gray-100 to-gray-200 pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="text-purple-600">Code.</span>
            <span className="text-gray-400">Compete.</span>
            <br />
            <span className="text-purple-600">Conquer</span>
          </h1>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              Elevate Your Programming Skills With Coding Hustlers. Dive Into Challenging Coding Quests And Join A Vibrant Community Of Coding Enthusiasts.
            </p>
            <p className="text-lg font-semibold">
              Are You Ready For The Hustle?
            </p>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
            Create Account
          </button>
        </div>

        <div className="relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400 rounded-full opacity-30 blur-2xl"></div>
          <img
            src="/hero-person.png"
            alt="Coding enthusiast"
            className="relative z-10 w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
