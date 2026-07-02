"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Building2,
  User,
  FileBadge,
  CreditCard,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    address: "",
    licenseNumber: "",
    aadhaarNumber: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*FORCE Registration Request*

👤 Full Name:
${formData.name}

🏢 Company Name:
${formData.companyName}

📍 Address:
${formData.address}

📄 License Number:
${formData.licenseNumber}

🆔 Aadhaar Number:
${formData.aadhaarNumber}
`;

    const whatsappNumber = "919447272000";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    alert("Redirecting to WhatsApp...");

    setFormData({
      name: "",
      companyName: "",
      address: "",
      licenseNumber: "",
      aadhaarNumber: "",
    });
  };

  return (
    <main className="bg-gray-50">
      <Navbar />
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0A2A66] to-[#15408f] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[6px] text-[#D4A017] font-semibold">
            FORCE
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-5">Registration</h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-200 leading-8">
            Join FORCE by submitting your registration details. Our team will
            review your application and contact you shortly.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-4xl font-bold text-[#0A2A66]">Get In Touch</h2>

            <p className="mt-5 text-gray-600 leading-8">
              Have questions regarding registration or membership? Reach out to
              us through the following contact details.
            </p>

            <div className="space-y-6 mt-10">
              <div className="bg-white rounded-2xl shadow-md p-6 flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#0A2A66] text-white flex items-center justify-center">
                  <Phone size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#000000]">Phone</h4>
                  <p className="text-gray-600">+91 94472 72000</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6 flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#0A2A66] text-white flex items-center justify-center">
                  <Mail size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#000000]">Email</h4>
                  <p className="text-gray-600">info@forcekerala.org</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6 flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#0A2A66] text-white flex items-center justify-center">
                  <MapPin size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#000000]">
                    Office Address
                  </h4>

                  <p className="text-[#000000]">
                    FORCE Kerala Office
                    <br />
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}

          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-[#0A2A66]">Apply Now</h2>

            <p className="text-[#000000] mt-2">Fill in your details below.</p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 mt-8 text-[#000000]"
            >
              <div className="relative">
                <User
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name text-[#000000]"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A2A66]"
                />
              </div>

              <div className="relative">
                <Building2
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A2A66]"
                />
              </div>

              <textarea
                name="address"
                placeholder="Complete Address"
                rows={4}
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#0A2A66]"
              />

              <div className="relative">
                <FileBadge
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="licenseNumber"
                  placeholder="License Number"
                  required
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A2A66]"
                />
              </div>

              <div className="relative">
                <CreditCard
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="aadhaarNumber"
                  placeholder="Aadhaar Number"
                  maxLength={12}
                  pattern="[0-9]{12}"
                  required
                  value={formData.aadhaarNumber}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A2A66]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0A2A66] hover:bg-[#D4A017] hover:text-black transition-all duration-300 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-3"
              >
                Send to WhatsApp
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}

      <section className="bg-[#0A2A66] py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold">Become a Member of FORCE</h2>

          <p className="mt-5 text-gray-200 leading-8">
            Together we build a stronger professional community by supporting
            ethical practices, collaboration, and organizational growth.
          </p>
        </div>
      </section>
    </main>
  );
}
