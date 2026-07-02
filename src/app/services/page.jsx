"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Heart,
  Briefcase,
  ShieldCheck,
  Users,
  Settings,
  GraduationCap,
  Stethoscope,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Heart size={42} />,
      title: "Community Welfare",
      description:
        "Supporting individuals and families through welfare programs, social initiatives, and community development.",
      features: [
        "Community Support",
        "Financial Assistance",
        "Social Welfare Programs",
      ],
    },
    {
      icon: <Users size={42} />,
      title: "Homecare Services",
      description:
        "Professional caregivers providing compassionate home assistance for elderly, patients, and children.",
      features: ["Elder Care", "Patient Care", "Baby Care"],
    },
    {
      icon: <Briefcase size={42} />,
      title: "Employment Services",
      description:
        "Connecting skilled professionals with trusted employers across various industries.",
      features: ["Job Placement", "Career Guidance", "Recruitment Support"],
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Security Services",
      description:
        "Reliable and trained security personnel for residential, commercial, and event protection.",
      features: ["Residential Security", "Office Security", "Event Security"],
    },
    {
      icon: <Settings size={42} />,
      title: "Professional Services",
      description:
        "Business support, project management, administration, and operational consulting.",
      features: ["Business Support", "Documentation", "Consultancy"],
    },
    {
      icon: <GraduationCap size={42} />,
      title: "Training & Skill Development",
      description:
        "Enhancing skills through professional training programs and career development initiatives.",
      features: ["Skill Development", "Workshops", "Career Training"],
    },
    {
      icon: <Stethoscope size={42} />,
      title: "Healthcare Assistance",
      description:
        "Providing quality healthcare support services through trained professionals.",
      features: ["Medical Assistance", "Home Nursing", "Health Support"],
    },
    {
      icon: <Building2 size={42} />,
      title: "Corporate Solutions",
      description:
        "Customized workforce and operational solutions for businesses and organizations.",
      features: ["HR Solutions", "Manpower Supply", "Business Partnerships"],
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Navbar />

      <section className="relative bg-[#0A2A66] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-[#D4A017] text-white px-5 py-2 rounded-full text-sm uppercase tracking-widest font-semibold">
              Our Services
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
              Comprehensive Services
              <br />
              For Better Communities
            </h1>

            <p className="mt-8 text-xl text-blue-100 leading-relaxed">
              FORCE delivers trusted professional services that empower
              individuals, strengthen communities, and support organizations
              through excellence, integrity, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A2A66]">What We Offer</h2>

            <p className="mt-6 text-lg text-gray-600">
              We provide a wide range of services designed to improve quality of
              life, create employment opportunities, and deliver reliable
              support to communities and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0A2A66]/10 flex items-center justify-center text-[#D4A017] mb-6 group-hover:bg-[#0A2A66] group-hover:text-white transition">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#0A2A66]">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3">
                  {service.features.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle size={18} className="text-[#D4A017]" />
                      {item}
                    </div>
                  ))}
                </div>

                <button className="mt-8 flex items-center gap-2 font-semibold text-[#0A2A66] hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0A2A66]">
                Why Choose FORCE?
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                We are committed to delivering reliable, transparent, and
                community-focused services that create meaningful impact and
                lasting value.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Experienced & Professional Team",
                  "Community Focused Approach",
                  "Trusted Service Network",
                  "Quality & Transparency",
                  "Reliable Customer Support",
                  "Innovative Service Solutions",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="text-[#D4A017]" />

                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0A2A66] rounded-3xl text-white p-12">
              <h3 className="text-3xl font-bold">
                Serving Communities With Excellence
              </h3>

              <p className="mt-6 leading-relaxed text-blue-100">
                Our mission is to build stronger communities by delivering
                dependable services, creating employment opportunities, and
                supporting individuals through professional care and innovative
                solutions.
              </p>

              <button className="mt-10 bg-[#D4A017] hover:bg-yellow-500 transition px-8 py-4 rounded-full font-semibold">
                Contact FORCE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#0A2A66] to-[#123D91] rounded-3xl text-center text-white px-10 py-20">
            <h2 className="text-4xl font-bold">Ready to Work With FORCE?</h2>

            <p className="mt-6 text-lg text-blue-100">
              Join hands with us and experience trusted services that empower
              people, strengthen businesses, and build better communities.
            </p>

            <button className="mt-10 bg-[#D4A017] hover:bg-yellow-500 transition px-10 py-4 rounded-full font-semibold text-white">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
