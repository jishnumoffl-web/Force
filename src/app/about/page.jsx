"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Target,
  Eye,
  HeartHandshake,
  Users,
  Briefcase,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle,
  Building2,
  HandHeart,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={34} />,
      title: "Our Mission",
      desc: "Empowering individuals and organizations through quality care, employment opportunities, professional services, and community development.",
    },
    {
      icon: <Eye size={34} />,
      title: "Our Vision",
      desc: "To become India's most trusted federation connecting people with resources, opportunities, and social welfare initiatives.",
    },
    {
      icon: <HeartHandshake size={34} />,
      title: "Our Values",
      desc: "Integrity, compassion, transparency, professionalism, innovation, and long-term community impact.",
    },
  ];

  const features = [
    "Employment Support",
    "Homecare Services",
    "Security Services",
    "Business Network",
    "Professional Guidance",
    "Community Welfare",
    "Skill Development",
    "Trusted Partnerships",
  ];

  const stats = [
    {
      number: "10+",
      title: "District Presence",
    },
    {
      number: "500+",
      title: "Members",
    },
    {
      number: "100+",
      title: "Employment Opportunities",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  const timeline = [
    {
      year: "Foundation",
      title: "FORCE Established",
      desc: "Started with the vision of connecting communities through employment, care and resources.",
    },
    {
      year: "Expansion",
      title: "District Network",
      desc: "Expanded leadership and membership across multiple districts.",
    },
    {
      year: "Growth",
      title: "Professional Services",
      desc: "Introduced employment support, homecare, security services and welfare initiatives.",
    },
    {
      year: "Future",
      title: "Stronger Together",
      desc: "Continuing our mission to empower every community with better opportunities.",
    },
  ];

  return (
    <main className="bg-white">
      <Navbar />
      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0A2A66] via-[#123b89] to-[#0A2A66] text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm tracking-widest uppercase">
                About FORCE
              </span>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-6">
                Together We Build
                <span className="text-[#D4A017]"> Stronger Communities</span>
              </h1>

              <p className="mt-8 text-lg text-gray-200 leading-relaxed">
                FORCE (Federation of Owners for Resources, Care & Employment) is
                committed to connecting people, organizations, caregivers,
                professionals, and employers through one trusted platform that
                creates meaningful opportunities and social impact.
              </p>

              <button className="mt-10 flex items-center gap-2 bg-[#D4A017] hover:bg-yellow-500 transition px-7 py-4 rounded-full font-semibold">
                Join FORCE
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex justify-center">
              <div className="bg-white backdrop-blur-lg rounded-[40px] p-10 border border-white/20 shadow-2xl">
                <img src="/images/logo.webp" alt="FORCE" className="w-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="/images/logo.webp" className="w-96 mx-auto" alt="" />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#0A2A66]">Who We Are</h2>

              <div className="w-24 h-1 bg-[#D4A017] mt-4 rounded-full"></div>

              <p className="mt-8 text-gray-600 leading-8">
                FORCE is a federation dedicated to creating a strong ecosystem
                where people can access employment, professional services,
                homecare support, business networking, and welfare initiatives
                through one reliable organization.
              </p>

              <p className="mt-6 text-gray-600 leading-8">
                Our mission is to empower individuals, strengthen communities,
                and promote sustainable development by connecting resources with
                opportunities while maintaining the highest standards of
                professionalism and trust.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-[#000000]" size={22} />

                    <span className="font-medium text-[#000000]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#0A2A66]">Our Purpose</h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
              Everything we do is driven by our commitment to serve society and
              create opportunities for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017]">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#0A2A66] mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#0A2A66]">
              Why Choose FORCE?
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
            {[
              {
                icon: <Users size={34} />,
                title: "Community Driven",
              },
              {
                icon: <Briefcase size={34} />,
                title: "Employment Network",
              },
              {
                icon: <ShieldCheck size={34} />,
                title: "Trusted Services",
              },
              {
                icon: <Award size={34} />,
                title: "Professional Excellence",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border rounded-3xl p-10 hover:bg-[#0A2A66] hover:text-white transition duration-300"
              >
                <div className="text-[#D4A017]">{item.icon}</div>

                <h3 className="font-bold text-xl mt-6 text-[#000000]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="bg-[#0A2A66] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {stats.map((item, index) => (
              <div key={index}>
                <h2 className="text-5xl font-bold text-[#D4A017]">
                  {item.number}
                </h2>

                <p className="text-white mt-3 text-lg">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl text-center font-bold text-[#0A2A66] mb-16">
            Our Journey
          </h2>

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-20 h-20 rounded-full bg-[#D4A017] text-white font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </div>

                <div className="bg-white rounded-3xl shadow-md p-8 flex-1">
                  <span className="text-[#D4A017] font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold text-[#0A2A66] mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[40px] bg-gradient-to-r from-[#0A2A66] to-[#133d90] text-white p-16 text-center">
            <HandHeart size={55} className="mx-auto text-[#D4A017]" />

            <h2 className="text-4xl font-bold mt-8">Become a Part of FORCE</h2>

            <p className="mt-6 text-gray-200 max-w-2xl mx-auto leading-8">
              Join us in creating stronger communities through care, employment,
              professional support and social responsibility. Together we can
              make a lasting difference.
            </p>

            <button className="mt-10 bg-[#D4A017] hover:bg-yellow-500 transition px-8 py-4 rounded-full font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
