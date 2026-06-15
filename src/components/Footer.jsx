"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-[#D4A017]">FORCE</h3>

            <p className="mt-4 text-slate-400">
              Federation of Owners for Resources, Care & Employment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3 text-slate-400">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>

            <ul className="space-y-3 text-slate-400">
              <li>Homecare</li>
              <li>Employment</li>
              <li>Security</li>
              <li>Community Welfare</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>

            {/* <div className="flex gap-4">
              <Facebook />
              <Instagram />
              <Linkedin />
              <Mail />
            </div> */}
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
          © 2026 FORCE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
