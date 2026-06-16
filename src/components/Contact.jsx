"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    address: "",
    licenseNumber: "",
    aadhaarNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Registration Request*

👤 Name: ${formData.name}
🏢 Company Name: ${formData.companyName}
📍 Address: ${formData.address}
📄 License Number: ${formData.licenseNumber}
🆔 Aadhaar Number: ${formData.aadhaarNumber}
`;

    // Replace with your WhatsApp number (country code without +)
    const whatsappNumber = "919447272000";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#0A2A66] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4A017] uppercase tracking-widest font-semibold">
            Registration
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Apply Now</h2>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white text-black rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0A2A66]">
              Submit Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 mt-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <textarea
                name="address"
                placeholder="Address"
                required
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                name="licenseNumber"
                placeholder="License Number"
                required
                value={formData.licenseNumber}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                name="aadhaarNumber"
                placeholder="Aadhaar Number"
                required
                value={formData.aadhaarNumber}
                onChange={handleChange}
                maxLength={12}
                className="w-full border rounded-xl p-4"
              />

              <button
                type="submit"
                className="w-full bg-[#0A2A66] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#D4A017] hover:text-black transition"
              >
                Send to WhatsApp
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
