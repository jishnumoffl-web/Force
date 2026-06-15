"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Heart,
  ShieldCheck,
  Briefcase,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Heart size={28} />,
      title: "Care",
      desc: "Community welfare and support services",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Employment",
      desc: "Connecting people with opportunities",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Security",
      desc: "Trusted protection and safety solutions",
    },
    {
      icon: <Users size={28} />,
      title: "Homecare",
      desc: "Professional care for families and individuals",
    },
    {
      icon: <Settings size={28} />,
      title: "Services",
      desc: "Resources and professional assistance",
    },
  ];

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.webp"
                alt="FORCE"
                className="h-12 w-12 object-contain"
              />

              <div>
                <h2 className="font-bold text-xl text-[#0A2A66]">FORCE</h2>
                <p className="text-xs text-gray-500 hidden sm:block">
                  Care & Employment
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-[#D4A017] transition"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Button */}
            <button className="hidden lg:block bg-[#0A2A66] text-white px-6 py-3 rounded-xl hover:bg-[#D4A017] transition">
              Join FORCE
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t">
            <div className="flex flex-col p-6 gap-4">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <button className="bg-[#0A2A66] text-white py-3 rounded-xl">
                Join FORCE
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="min-h-screen bg-white overflow-hidden pt-4">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50" />

          <div className="">
            {/* Keep your existing hero content here */}
            <main className="min-h-screen bg-white overflow-hidden">
              {/* Hero Section */}
              <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                      <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                        Federation of Owners for Resources, Care & Employment
                      </span>

                      <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                        Empowering Communities Through
                        <span className="text-[#D4A017]">
                          {" "}
                          Care & Employment
                        </span>
                      </h1>

                      <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        FORCE brings together resources, care services,
                        employment opportunities, and community support to
                        create a stronger and more inclusive society.
                      </p>

                      <div className="flex flex-wrap gap-4 mt-8">
                        <button className="px-8 py-4 rounded-xl bg-[#0A2A66] text-white font-semibold hover:scale-105 transition">
                          Join FORCE
                        </button>

                        <button className="px-8 py-4 rounded-xl border-2 border-[#0A2A66] text-[#0A2A66] font-semibold hover:bg-[#0A2A66] hover:text-white transition">
                          Explore Services
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        <div>
                          <h3 className="text-3xl font-bold text-[#0A2A66]">
                            5000+
                          </h3>
                          <p className="text-gray-600">People Supported</p>
                        </div>

                        <div>
                          <h3 className="text-3xl font-bold text-[#0A2A66]">
                            1000+
                          </h3>
                          <p className="text-gray-600">Employment</p>
                        </div>

                        <div>
                          <h3 className="text-3xl font-bold text-[#0A2A66]">
                            100+
                          </h3>
                          <p className="text-gray-600">Partners</p>
                        </div>

                        <div>
                          <h3 className="text-3xl font-bold text-[#0A2A66]">
                            24/7
                          </h3>
                          <p className="text-gray-600">Support</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative">
                      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-yellow-200 blur-3xl opacity-40" />
                      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-200 blur-3xl opacity-40" />

                      <div className="relative bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-8">
                        <img
                          src="/images/logo.webp"
                          alt="FORCE"
                          className="w-56 mx-auto"
                        />

                        <div className="grid grid-cols-2 gap-4 mt-8">
                          {services.map((item, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-2xl p-4 shadow-lg hover:-translate-y-2 transition duration-300"
                            >
                              <div className="text-[#D4A017] mb-3">
                                {item.icon}
                              </div>

                              <h3 className="font-bold text-[#0A2A66]">
                                {item.title}
                              </h3>

                              <p className="text-sm text-gray-600 mt-1">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </section>
      </main>
    </>
  );
}
