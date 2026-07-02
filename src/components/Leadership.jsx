"use client";

import Navbar from "./Navbar";
import Header from "./Navbar";

export default function Leadership() {
  const team = [
    {
      name: "Rajesh",
      role: "President",
      ad: "Unnichethu, Erezha (N) Chettikulagara PO, MAVALIKARA",
      cp: "Mythri group",
      image: "/images/p.webp",
    },
    {
      name: "Mahesh Kumar",
      role: "general secretary",
      ad: "ELAVAKKATTU VETTICODE MAVELIKKARA",
      cp: "B-secure",

      image: "/images/s.webp",
    },
    {
      name: "Mathew Abraham",
      role: "treasurer",
      ad: "Kambusseril Harippad. ",
      cp: "Sevanadhara Home Care",

      image: "/images/t.webp",
    },
  ];

  return (
    <div>
      <section id="leadership" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <Navbar />

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#D4A017] uppercase tracking-widest font-semibold">
              Leadership Team
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0A2A66]">
              Meet Our Leaders
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Dedicated professionals guiding FORCE towards community
              empowerment, employment growth, and quality care services.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-92 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A2A66]">
                    {member.name}
                  </h3>

                  <p className="text-[#D4A017] font-medium mt-2">
                    {member.role}
                  </p>
                  <p className="text-[#D4A017] font-medium mt-2">{member.ad}</p>
                  <p className="text-[#D4A017] font-medium mt-2">{member.cp}</p>

                  {/* <div className="flex gap-4 mt-5">
                  <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200">
                    <Mail size={18} />
                  </button>

                  <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200">
                    <Linkedin size={18} />
                  </button>
                </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Executive Committee */}
          <div className="mt-20 bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-[#0A2A66] text-center">
              Executive Committee
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                "Community Welfare Coordinator",
                "Employment Coordinator",
                "Security Services Coordinator",
                "Homecare Coordinator",
                "Membership Coordinator",
                "Operations Manager",
              ].map((role, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-5 text-center"
                >
                  <p className="font-semibold text-gray-700">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
