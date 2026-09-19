
// import your photos from the assets folder
// import manicureImg from "../src/assets/manicure.jpg";
// import gelImg from "../src/assets/gel-extensions.jpg";
// import nailArtImg from "../src/assets/nail-art.jpg";
// import pedicureImg from "../src/assets/pedicure.jpg";
// import acrylicImg from "../src/assets/acrylic-set.jpg";
// import repairImg from "../src/assets/nail-repair.jpg";

import hero from "../src/assets/home.webp";
import nail1 from "../src/assets/nail1.webp";
import nail2 from "../src/assets/nail2.jpg";
import nail3 from "../src/assets/nail3.webp";
import nail4 from "../src/assets/nail4.webp";
import nail6 from "../src/assets/nail6.jpg";
import nail5 from "../src/assets/nil5.jpg";
import { Link } from "react-router-dom";

// Service page for Demo Nail Studio
export default function Service() {
  const services = [
    {
      name: "Classic Manicure",
      desc: "Shaping, cuticle care, and polish for clean everyday hands.",
      price: "$25",
      img: hero,
    },
    {
      name: "Gel Extensions",
      desc: "Long-lasting length and shape with a chip-free gel finish.",
      price: "$45",
      img: nail1,
    },
    {
      name: "Nail Art",
      desc: "Custom hand-painted designs, from minimal to statement.",
      price: "$15+",
      img: nail2,
    },
    {
      name: "Spa Pedicure",
      desc: "Soak, scrub, massage, and polish for tired feet.",
      price: "$35",
      img: nail3,
    },
    {
      name: "Acrylic Full Set",
      desc: "Durable acrylic nails built and shaped from scratch.",
      price: "$50",
      img: nail4,
    },
    {
      name: "Nail Repair",
      desc: "Fix a chip or break without redoing the whole set.",
      price: "$8",
      img:nail5 ,
    },
  ];

  return (
    <div className="bg-white text-[#362A4D] font-sans">
      {/* ---------- NAVBAR ---------- */}
      <nav className="flex items-center justify-between px-16 md:px-26 py-16">
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

      {/* ---------- HEADER ---------- */}
      <section className="px-6 md:px-16 pt-10 pb-12 text-center animate-[fadeInUp_0.8s_ease-out]">
        <h2 className="font-serif text-5xl mb-4">Our Services</h2>
        <p className="text-[#6E6180] max-w-lg mx-auto">
          From a quick shape-and-polish to a full custom set, pick the service
          that fits how you want your hands to feel.
        </p>
      </section>

      {/* ---------- SERVICE GRID ---------- */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif text-xl">{service.name}</h4>
                  <span className="text-[#7C5CBF] font-medium">{service.price}</span>
                </div>
                <p className="text-sm text-[#6E6180] mb-4">{service.desc}</p>
                <button className="text-sm border border-[#7C5CBF] text-[#7C5CBF] rounded-full px-4 py-2 hover:bg-[#7C5CBF] hover:text-white transition-colors duration-300">
                  Book This
                </button>
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