import React from 'react';

const CommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-purple-600">
            Questions, Community & Contests
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Over 2800 questions for you to practice. Come and join one of the largest tech communities with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.
          </p>

          <button className="bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-medium transition-colors">
            View Questions
          </button>
        </div>

        <div className="relative">
          <img
            src="/community-illustration.png"
            alt="Community member"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
