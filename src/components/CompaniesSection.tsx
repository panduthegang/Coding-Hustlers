import React from 'react';

const CompaniesSection = () => {
  return (
    <section className="py-20 md:py-32" style={{
      background: `
        radial-gradient(circle at 20% 50%, rgba(140, 188, 254, 0.2) 0%, transparent 100%),
        radial-gradient(circle at 80% 50%, rgba(142, 73, 255, 0.15) 0%, transparent 100%),
        linear-gradient(to right, #F5F5F5, #E8E8E8)
      `
    }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] rounded-full opacity-20 blur-2xl"></div>
          <img
            src="/coding-illustration.png"
            alt="Developer working"
            className="w-full max-w-lg mx-auto drop-shadow-2xl relative z-10"
          />
        </div>

        <div className="space-y-8 order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] bg-clip-text text-transparent font-['Syne'] leading-tight">
            Companies & Candidates
          </h2>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Syne']">
            Not only does CodingHustlers prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.
          </p>

          <button className="bg-gradient-to-r from-[#B33DEB] to-[#DE8FFF] hover:opacity-90 text-white px-10 py-5 rounded-full text-xl font-['Syne'] transition-all shadow-lg hover:shadow-xl">
            Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
