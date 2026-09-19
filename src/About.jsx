// import your photos from the assets folder
import hero from "../src/assets/home.webp";
import nail6 from "../src/assets/nail6.jpg";
import nail5 from "../src/assets/nil5.jpg";
import nail3 from "../src/assets/nail3.webp";
import nail4 from "../src/assets/nail4.webp";
import { Link } from "react-router-dom";

// About page for Demo Nail Studio
export default function About() {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "1200+", label: "Happy Clients" },
    { number: "8", label: "Nail Artists" },
    { number: "4.9", label: "Average Rating" },
  ];

  const team = [
    { name: "Ava Turner", role: "Founder & Lead Nail Artist", img: nail6 },
    { name: "Maya Lopez", role: "Senior Nail Technician", img: nail5 },
    { name: "Priya Sharma", role: "Nail Art Specialist", img: nail4 },
  ];
  return (
    <div className="bg-white text-[#362A4D] font-sans">
      {/* ---------- NAVBAR ---------- */}
      <nav className="flex items-center justify-between px-26 md:px-20 py-16">
        <h1 className="font-serif text-2xl text-[#7C5CBF]">Demo Nail Studio</h1>
        <ul className="hidden md:flex gap-8 text-sm">
          <li>
            <Link to="/" className="text-[#7C5CBF] transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#7C5CBF] transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-[#7C5CBF] transition-colors duration-200">
              Service
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#7C5CBF] transition-colors duration-200">
              Contact
            </Link>
          </li>
        </ul>

      </nav>

      {/* ---------- INTRO ---------- */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 pt-10 pb-20">
        <div className="animate-[fadeInUp_0.8s_ease-out]">
          <h2 className="font-serif text-5xl leading-tight mb-6">About Us</h2>
          <p className="text-[#6E6180] mb-4 max-w-md">
            Demo Nail Studio started as a small home setup and grew into a
            full studio because we never stopped caring about the little
            details - the shape, the shine, the finish.
          </p>
          <p className="text-[#6E6180] max-w-md">
            Every artist on our team trains constantly so the trends you see
            online are the ones we can actually put on your hands.
          </p>
        </div>

        <div className="h-80 md:h-96 rounded-3xl overflow-hidden">
          <img
            src={hero}
            alt="Demo Nail Studio interior"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="px-6 md:px-16 py-16 border-t border-[#EDE7F9] bg-[#F3EFFA]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="hover:scale-105 transition-transform duration-300 border-4 border-[#9783b6] p-4 rounded-2xl">
              <p className="font-serif text-4xl mb-2 text-[#7C5CBF]">{stat.number}</p>
              <p className="text-sm text-[#6E6180]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section className="px-6 md:px-16 py-16">
        <h3 className="font-serif text-3xl mb-10 text-center">Meet the Team</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-[#6E6180]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="px-6 md:px-16 py-10 border-t border-[#EDE7F9] flex flex-col md:flex-row justify-between items-center gap-4">
        <h4 className="font-serif text-xl text-[#7C5CBF]">Demo Nail Studio</h4>
        <p className="text-sm text-[#6E6180]">© 2026 Demo Nail Studio. All rights reserved.</p>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}