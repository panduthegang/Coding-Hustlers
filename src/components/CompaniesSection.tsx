import React from 'react';

const CompaniesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-200 to-purple-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="/coding-illustration.png"
            alt="Developer working"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-purple-600">
            Companies & Candidates
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Not only does CodingHustlers prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
            Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
