"use client";

import { Target, Eye, HeartHandshake } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Target size={40} />,
      title: "Our Mission",
      desc: "To empower individuals and organizations through accessible care, employment opportunities, and essential services.",
    },
    {
      icon: <Eye size={40} />,
      title: "Our Vision",
      desc: "To build a society where everyone has access to resources, security, quality care, and sustainable employment.",
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Our Values",
      desc: "Compassion, integrity, professionalism, community support, and long-term impact.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4A017] font-semibold uppercase tracking-wider">
            About FORCE
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0A2A66]">
            Building Stronger Communities Together
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            FORCE (Federation of Owners for Resources, Care & Employment)
            connects resources, employment opportunities, care services, and
            professional support to create meaningful impact across communities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          {/* Left */}
          <div>
            <img src="/images/logo.webp" alt="FORCE" className="w-80 mx-auto" />
          </div>

          {/* Right */}
          <div>
            <h3 className="text-3xl font-bold text-[#0A2A66]">
              Empowering Lives Through Service & Opportunity
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              FORCE is dedicated to bringing together individuals, businesses,
              caregivers, service providers, and employers under one platform.
              We aim to create opportunities, provide support, and improve
              quality of life through collaboration and innovation.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Through our network and services, we help communities access
              employment, homecare, security services, welfare programs, and
              professional resources.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="text-[#D4A017] mb-5">{card.icon}</div>

              <h3 className="text-2xl font-bold text-[#0A2A66]">
                {card.title}
              </h3>

              <p className="mt-4 text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
