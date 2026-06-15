"use client";

import { ArrowRight } from "lucide-react";

export default function Gallery() {
  const activities = [
    {
      title: "Community Welfare Program",
      image: "/gallery/community.jpg",
    },
    {
      title: "Employment Drive",
      image: "/gallery/employment.jpg",
    },
    {
      title: "Homecare Services",
      image: "/gallery/homecare.jpg",
    },
    {
      title: "Security Training",
      image: "/gallery/security.jpg",
    },
    {
      title: "Care Support Initiative",
      image: "/gallery/care.jpg",
    },
    {
      title: "FORCE Annual Event",
      image: "/gallery/event.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4A017] font-semibold uppercase tracking-widest">
            Gallery & Activities
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0A2A66]">
            Creating Impact Every Day
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Explore our initiatives, events, employment programs, community
            services, and welfare activities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{activity.title}</h3>

                  <button className="mt-3 flex items-center gap-2 text-[#D4A017]">
                    View Details
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#0A2A66] text-white px-8 py-4 rounded-xl hover:bg-[#D4A017] hover:text-black transition">
            View All Activities
          </button>
        </div>
      </div>
    </section>
  );
}
