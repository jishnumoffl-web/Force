"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "about", href: "/about" },
  { name: "Leadership", href: "/leadership" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-[#D4A017] transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Button */}
            <Link href="/contact">
              <button className="hidden lg:block bg-[#0A2A66] text-white px-6 py-3 rounded-xl hover:bg-[#D4A017] transition">
                Join FORCE
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="lg:hidden " onClick={() => setOpen(!open)}>
              {open ? (
                <X size={28} className="text-black" />
              ) : (
                <Menu size={28} className="text-black" />
              )}
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

              <Link href="/contact">
                <button className="hidden lg:block bg-[#0A2A66] text-white px-6 py-3 rounded-xl hover:bg-[#D4A017] transition">
                  Join FORCE
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
