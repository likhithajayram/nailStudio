import { useState } from "react";
import { Link } from "react-router-dom";

// small decorative lavender sprig, reused a few times on the page
function LavenderSprig({ className }) {
  return (
    <svg
      viewBox="0 0 60 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30 140 C30 90 30 60 30 20" stroke="#8E7AA8" strokeWidth="2" />
      <path d="M30 60 C20 55 12 48 10 38" stroke="#8E7AA8" strokeWidth="1.5" />
      <path d="M30 80 C40 75 48 68 50 58" stroke="#8E7AA8" strokeWidth="1.5" />
      {[18, 26, 34, 42, 50].map((y, i) => (
        <g key={i}>
          <ellipse cx={22 - (i % 2)} cy={y} rx="5" ry="7" fill="#B79CE0" opacity="0.85" />
          <ellipse cx={38 + (i % 2)} cy={y + 4} rx="5" ry="7" fill="#A084D1" opacity="0.85" />
        </g>
      ))}
    </svg>
  );
}

// Contact page for Demo Nail Studio
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // hook this up to your backend / email service
    console.log(form);
    setSent(true);
  };

  return (
    <div className="bg-white text-[#362A4D] font-sans">
      {/* ---------- NAVBAR ---------- */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-6">
        <h1 className="font-serif text-2xl text-[#7C5CBF]">Demo Nail Studio</h1>
        <ul className="hidden md:flex gap-8 text-sm">
          <li>
            <Link to="/" className="hover:text-[#7C5CBF] transition-colors duration-200">
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
            <Link to="/contact" className="text-[#7C5CBF] transition-colors duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* ---------- HEADER ---------- */}
      <section className="relative px-6 md:px-16 pt-10 pb-12 text-center animate-[fadeInUp_0.8s_ease-out] overflow-hidden">
        <LavenderSprig className="hidden md:block absolute left-6 top-0 w-10 opacity-70 -rotate-12" />
        <LavenderSprig className="hidden md:block absolute right-6 top-0 w-10 opacity-70 rotate-12 scale-x-[-1]" />

        <h2 className="font-serif text-5xl mb-4">Get In Touch</h2>
        <p className="text-[#6E6180] max-w-lg mx-auto">
          Questions, custom requests, or ready to book? Send us a message and
          we'll get back to you the same day.
        </p>
      </section>

      {/* ---------- FORM + INFO ---------- */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-16 pb-20">
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-sm border border-[#EDE7F9] space-y-5"
        >
          <div>
            <label className="text-sm block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-[#EDE7F9] rounded-lg px-4 py-2 focus:outline-none focus:border-[#7C5CBF] transition-colors duration-200"
            />
          </div>

          <div>
            <label className="text-sm block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-[#EDE7F9] rounded-lg px-4 py-2 focus:outline-none focus:border-[#7C5CBF] transition-colors duration-200"
            />
          </div>

          <div>
            <label className="text-sm block mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border border-[#EDE7F9] rounded-lg px-4 py-2 focus:outline-none focus:border-[#7C5CBF] transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            className="bg-[#7C5CBF] text-white px-6 py-3 rounded-full text-sm hover:bg-[#5F3FA0] transition-colors duration-300"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-sm text-[#7C5CBF]">
              Thanks! We'll be in touch soon.
            </p>
          )}
        </form>

        {/* info + map placeholder */}
        <div className="space-y-6">
          <div>
            <h4 className="font-serif text-xl mb-2">Visit The Studio</h4>
            <p className="text-sm text-[#6E6180]">123 Blossom Street, Bengaluru</p>
            <p className="text-sm text-[#6E6180]">Open Tue - Sun, 10am - 7pm</p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-2">Contact</h4>
            <p className="text-sm text-[#6E6180]">hello@demonailstudio.com</p>
            <p className="text-sm text-[#6E6180]">+91 98765 43210</p>
          </div>

          {/* space for an embedded map, framed with a lavender sprig on each side */}
          <div className="relative h-64 rounded-2xl border-2 border-dashed border-[#B79CE0]/60 bg-[#F3EFFA] flex items-center justify-center overflow-hidden">
            <LavenderSprig className="absolute left-2 bottom-0 w-8 opacity-60" />
            <LavenderSprig className="absolute right-2 bottom-0 w-8 opacity-60 scale-x-[-1]" />
            <span className="text-[#7C5CBF] text-sm">Add map embed here</span>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="relative px-6 md:px-16 py-10 border-t border-[#EDE7F9] flex flex-col md:flex-row justify-between items-center gap-4 overflow-hidden">
        <LavenderSprig className="hidden md:block absolute right-10 -top-6 w-8 opacity-40" />
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