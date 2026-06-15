"use client";

import {
  Heart,
  Briefcase,
  ShieldCheck,
  Users,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Heart size={40} />,
      title: "Care Services",
      description:
        "Community welfare programs, support services, and assistance initiatives.",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Employment",
      description:
        "Connecting skilled professionals with trusted opportunities.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Security Services",
      description: "Reliable security personnel and protection solutions.",
    },
    {
      icon: <Users size={40} />,
      title: "Homecare",
      description: "Professional caregivers and personalized home support.",
    },
    {
      icon: <Settings size={40} />,
      title: "Professional Services",
      description: "Business, resource, and operational support solutions.",
    },
    {
      icon: <Heart size={40} />,
      title: "Community Support",
      description:
        "Programs focused on social welfare and community development.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4A017] font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0A2A66]">
            Comprehensive Support For Communities
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            FORCE delivers a wide range of services designed to empower
            individuals, families, businesses, and communities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-[#D4A017] mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold text-[#0A2A66]">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-6 flex items-center gap-2 text-[#0A2A66] font-semibold group-hover:gap-4 transition-all">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
