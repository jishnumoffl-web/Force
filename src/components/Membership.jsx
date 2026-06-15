"use client";

import {
  Users,
  Briefcase,
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  Network,
} from "lucide-react";

export default function Membership() {
  const benefits = [
    {
      icon: <Briefcase size={36} />,
      title: "Employment Opportunities",
      desc: "Access verified job opportunities and career support.",
    },
    {
      icon: <HeartHandshake size={36} />,
      title: "Care & Welfare Support",
      desc: "Benefit from community care and welfare programs.",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Trusted Security Network",
      desc: "Connect with reliable security professionals and services.",
    },
    {
      icon: <Network size={36} />,
      title: "Professional Networking",
      desc: "Build valuable connections with industry professionals.",
    },
    {
      icon: <BadgeCheck size={36} />,
      title: "Member Recognition",
      desc: "Become part of a recognized and trusted organization.",
    },
    {
      icon: <Users size={36} />,
      title: "Community Growth",
      desc: "Contribute to initiatives that strengthen communities.",
    },
  ];

  return (
    <section
      id="membership"
      className="py-24 bg-gradient-to-br from-[#0A2A66] to-[#153d8f] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4A017] uppercase tracking-widest font-semibold">
            Membership Benefits
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Why Join FORCE?
          </h2>

          <p className="mt-6 text-lg text-slate-200">
            Become part of a growing network dedicated to care, employment,
            professional development, and community welfare.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition duration-300"
            >
              <div className="text-[#D4A017] mb-5">{benefit.icon}</div>

              <h3 className="text-2xl font-bold">{benefit.title}</h3>

              <p className="mt-4 text-slate-200">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold">Join the FORCE Community Today</h3>

          <p className="mt-4 text-slate-300">
            Together we can create opportunities, provide support, and build
            stronger communities.
          </p>

          <button className="mt-8 bg-[#D4A017] text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition">
            Become a Member
          </button>
        </div>
      </div>
    </section>
  );
}
