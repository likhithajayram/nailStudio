import { useState } from "react";
import { Link } from "react-router-dom";

// import your photos from the assets folder
import hero from "../src/assets/home.webp";
import nail1 from "../src/assets/nail1.webp";
import nail2 from "../src/assets/nail2.jpg";
import nail3 from "../src/assets/nail3.webp";
import nail4 from "../src/assets/nail4.webp";

// Home page for Demo Nail Studio
// Simple functional component, Tailwind for all the styling.
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const benefits = [
    { title: "Affordable Price", text: "Great nail care that doesn't break the bank." },
    { title: "Easy Payment", text: "Pay online, by card, or in the studio." },
    { title: "Best Service", text: "Trained nail artists with years of experience." },
    { title: "Near You", text: "Conveniently located in the heart of the city." },
  ];

  const services = [
    { name: "Classic Manicure", img: nail1 },
    { name: "Gel Extensions", img: nail2 },
    { name: "Nail Art", img: nail3 },
    { name: "Spa Pedicure", img: nail4 },
  ];

  return (
    <div className="bg-white text-[#362A4D] font-sans">
      {/* ---------- NAVBAR ---------- */}
      <nav className="flex items-center justify-between px-16 md:px-26 py-16">
        <h1 className="font-serif text-2xl text-[#7C5CBF]">Demo Nail Studio</h1>

        {/* desktop links */}
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

        {/* mobile menu button */}
        <button
          className="md:hidden text-2xl text-[#7C5CBF]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}

      {/* ---------- HERO ---------- */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-16 pt-10 pb-20">
        <div className="animate-[fadeInUp_0.8s_ease-out]">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            Creative and <span className="text-[#7C5CBF]">Beautiful</span> Nail Art Designs For You
          </h2>
          <p className="text-[#6E6180] mb-8 max-w-sm">
            Your nails, our passion. Book a session at Demo Nail Studio and
            walk out with hands you'll want to show off.
          </p>
          <button className="bg-[#7C5CBF] text-white px-6 py-3 rounded-full text-sm hover:bg-[#5F3FA0] transition-colors duration-300">
            Enquire Now
          </button>
        </div>

        <div className="h-80 md:h-96 rounded-3xl overflow-hidden">
          <img
            src={hero}
            alt="Hand with painted nails"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ---------- BENEFITS ---------- */}
      <section className="px-6 md:px-16 py-16 border-t border-[#e6e2ec]">
        <h3 className="font-serif text-3xl mb-10 text-center md:text-left">
          We have a lot of benefits you may like
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="hover:-translate-y-1 transition-transform duration-300   border-4 border-[#a797c7] rounded-2xl flex flex-col p-2 items-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#7C5CBF]/15 mb-5" />
              <h4 className="font-medium mb-2">{item.title}</h4>
              <p className="text-sm text-[#6E6180]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES PREVIEW ---------- */}
      <section className="px-6 md:px-16 py-16 bg-[#F3EFFA]">
        <h3 className="font-serif text-3xl mb-10 text-center">Our Services</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center py-4 font-medium">{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h3 className="font-serif text-3xl mb-4">
          Save your time by using our service
        </h3>
        <p className="text-[#6E6180] mb-8 max-w-md mx-auto">
          Book online in under a minute and skip the waiting room.
        </p>
        <button className="bg-[#7C5CBF] text-white px-8 py-3 rounded-full text-sm hover:bg-[#5F3FA0] transition-colors duration-300">
          Book an Appointment
        </button>
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