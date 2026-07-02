"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Rajesh",
      role: "President",
      address: "Unnichethu, Erezha (N), Chettikulangara P.O, Mavelikara",
      company: "Mythri Group",
      image: "/images/p.webp",
      about:
        "Provides strategic leadership for FORCE, promoting community development, employment opportunities, and social welfare initiatives.",
    },
    {
      name: "Mahesh Kumar",
      role: "General Secretary",
      address: "Elavakkattu, Vetticode, Mavelikara",
      company: "B-Secure",
      image: "/images/s.webp",
      about:
        "Coordinates organizational activities, member communication, and ensures smooth execution of FORCE programs.",
    },
    {
      name: "Mathew Abraham",
      role: "Treasurer",
      address: "Kambusseril, Harippad",
      company: "Sevanadhara Home Care",
      image: "/images/t.webp",
      about:
        "Manages financial planning, budgeting, transparency, and responsible fund utilization for the organization.",
    },
  ];

  const committee = [
    "Community Welfare Coordinator",
    "Employment Coordinator",
    "Security Services Coordinator",
    "Home Care Coordinator",
    "Membership Coordinator",
    "Operations Manager",
    "Youth Development Coordinator",
    "Training Coordinator",
    "Women's Welfare Coordinator",
  ];

  const values = [
    {
      title: "Integrity",
      desc: "We maintain honesty, transparency, and accountability in every initiative.",
    },
    {
      title: "Leadership",
      desc: "Empowering members through strong leadership and collective responsibility.",
    },
    {
      title: "Community",
      desc: "Serving society with compassion and creating meaningful opportunities.",
    },
    {
      title: "Innovation",
      desc: "Encouraging new ideas to improve employment and social services.",
    },
  ];
  const districts = [
    {
      district: "Alappuzha",
      leaders: [
        {
          name: "Ratheesh Kumar",
          role: "President",
          image: "/images/alpp.webp",
        },
        {
          name: "Jayakumar",
          role: "Secretary",
          image: "/images/alpj.webp",
        },
        {
          name: "Kala Karunakaran",
          role: "Treasurer",
          image: "/images/alpt.webp",
        },
      ],
    },

    {
      district: "Kollam",
      leaders: [
        {
          name: "",
          role: "President",
          image: "/images/default-user.webp",
        },
        {
          name: "",
          role: "Secretary",
          image: "/images/default-user.webp",
        },
        {
          name: "",
          role: "Treasurer",
          image: "/images/default-user.webp",
        },
      ],
    },

    {
      district: "Pathanamthitta",
      leaders: [
        {
          name: "",
          role: "President",
          image: "/images/default-user.webp",
        },
        {
          name: "",
          role: "Secretary",
          image: "/images/default-user.webp",
        },
        {
          name: "",
          role: "Treasurer",
          image: "/images/default-user.webp",
        },
      ],
    },

    // Continue for the remaining districts...
  ];

  return (
    <main className="bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0A2A66] to-[#103B8A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Our Leadership</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">
            Meet the dedicated leaders guiding FORCE with integrity,
            professionalism, and a shared vision of community development,
            employment generation, and quality social service.
          </p>
        </div>
      </section>

      {/* Introduction */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span className="uppercase tracking-widest text-[#D4A017] font-semibold">
              Leadership Team
            </span>

            <h2 className="text-4xl font-bold text-[#0A2A66] mt-4">
              Guiding FORCE Towards Excellence
            </h2>

            <p className="mt-6 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
              Our leadership team consists of experienced professionals,
              entrepreneurs, and community leaders committed to strengthening
              security services, home care, employment opportunities, and social
              welfare initiatives across Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* President Message */}

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-[#0A2A66]">
              President's Message
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Welcome to FORCE. Our organization was established with a clear
              vision of creating opportunities, supporting professionals, and
              serving society through unity and dedication. Together, we strive
              to build a stronger community by encouraging employment,
              maintaining professional standards, and promoting social welfare
              initiatives.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Every member of FORCE contributes towards building a better future
              through teamwork, integrity, and compassionate service. We invite
              you to join our journey of growth and community development.
            </p>

            <div className="mt-8">
              <h3 className="font-bold text-xl text-[#0A2A66]">Rajesh</h3>

              <p className="text-[#D4A017] font-semibold">President, FORCE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaders */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0A2A66]">
              Meet Our Leaders
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-[450px] object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A2A66]">
                    {leader.name}
                  </h3>

                  <p className="text-[#D4A017] font-semibold mt-2">
                    {leader.role}
                  </p>

                  <p className="mt-4 text-gray-600">
                    <strong>Address:</strong>
                    <br />
                    {leader.address}
                  </p>

                  <p className="mt-4 text-gray-600">
                    <strong>Organization:</strong>
                    <br />
                    {leader.company}
                  </p>

                  <p className="mt-5 text-gray-600 leading-7">{leader.about}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* District Leadership */}

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2A66]">
              District Leadership
            </h2>
            <p className="mt-4 text-gray-600">
              District-wise President, Secretary and Treasurer
            </p>
          </div>

          <div className="space-y-16">
            {districts.map((district, districtIndex) => (
              <div key={districtIndex}>
                <h3 className="text-3xl font-bold text-[#0A2A66] mb-8 border-l-4 border-[#D4A017] pl-4">
                  {district.district}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {district.leaders.map((leader, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
                    >
                      <img
                        src={leader.image}
                        alt={leader.name || leader.role}
                        className="w-full h-80 object-cover"
                      />

                      <div className="p-6 text-center">
                        <h4 className="text-2xl font-bold text-[#0A2A66]">
                          {leader.name || "Vacant"}
                        </h4>

                        <p className="text-[#D4A017] font-semibold mt-2">
                          {leader.role}
                        </p>

                        {/* <p className="mt-3 text-gray-500">
                          {leader.company || "Not Assigned"}
                        </p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-[#0A2A66]">Our Vision</h2>

              <p className="mt-6 text-gray-600 leading-8">
                To build a strong network of professionals dedicated to
                employment generation, quality care services, security
                excellence, and sustainable community development.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#0A2A66]">
                Leadership Responsibilities
              </h2>

              <ul className="mt-6 space-y-4 text-gray-600">
                <li>✔ Strategic planning and policy implementation</li>
                <li>✔ Member welfare and engagement</li>
                <li>✔ Employment support initiatives</li>
                <li>✔ Financial transparency</li>
                <li>✔ Community outreach programs</li>
                <li>✔ Partnership development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0A2A66]">
            Executive Committee
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {committee.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg text-[#0A2A66]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}

      <section className="bg-[#0A2A66] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold">
            Our Leadership Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-5 text-gray-200 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#0A2A66]">
            Together We Build Strong Communities
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our leadership is committed to creating opportunities, strengthening
            professional networks, and serving society through unity, integrity,
            and excellence.
          </p>

          <button className="mt-10 bg-[#0A2A66] hover:bg-[#08204d] text-white px-10 py-4 rounded-xl font-semibold transition">
            Become a Member
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
