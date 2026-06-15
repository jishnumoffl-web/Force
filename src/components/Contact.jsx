"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0A2A66] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#D4A017] uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Let's Connect</h2>

          <p className="mt-6 text-slate-300">
            Have questions about membership, employment, homecare, security
            services, or partnerships? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold">Get In Touch</h3>

            <div className="space-y-8 mt-10">
              <div className="flex gap-4">
                <Phone className="text-[#D4A017]" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-slate-300">
                    +918086881277 | +919447272000 | +919567859200
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#D4A017]" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-300">forcekerala@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-[#D4A017]" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-slate-300">Kerala, India</p>
                </div>
              </div>

              {/* <div className="flex gap-4">
                <Clock className="text-[#D4A017]" />
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-slate-300">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-black rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0A2A66]">
              Send a Message
            </h3>

            <form className="space-y-5 mt-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4 outline-none focus:border-[#0A2A66]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 outline-none focus:border-[#0A2A66]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4 outline-none focus:border-[#0A2A66]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl p-4 outline-none focus:border-[#0A2A66]"
              />

              <button
                type="submit"
                className="w-full bg-[#0A2A66] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#D4A017] hover:text-black transition"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
