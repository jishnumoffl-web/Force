"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arun Kumar",
      role: "Member",
      review:
        "FORCE helped me connect with employment opportunities and expand my professional network.",
    },
    {
      name: "Priya Nair",
      role: "Homecare Beneficiary",
      review:
        "The support and care services provided by FORCE made a real difference for our family.",
    },
    {
      name: "Rahul Thomas",
      role: "Business Partner",
      review:
        "A professional organization committed to community growth and meaningful impact.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4A017] font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0A2A66]">
            What People Say About FORCE
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Hear from members, partners, and beneficiaries who have experienced
            the positive impact of our initiatives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex gap-1 text-[#D4A017] mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">"{item.review}"</p>

              <div className="mt-6">
                <h3 className="font-bold text-[#0A2A66]">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#0A2A66]">5000+</h3>
            <p className="text-gray-600 mt-2">Members</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#0A2A66]">1000+</h3>
            <p className="text-gray-600 mt-2">Jobs Created</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#0A2A66]">100+</h3>
            <p className="text-gray-600 mt-2">Partners</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#0A2A66]">98%</h3>
            <p className="text-gray-600 mt-2">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
