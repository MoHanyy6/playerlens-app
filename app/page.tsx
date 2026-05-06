import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-[0_18px_45px_-30px_rgba(0,0,0,0.75)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <h1 className="text-lg font-semibold uppercase tracking-[0.28em] text-white/90">
            PlayerLens
          </h1>
          <nav className="flex items-center gap-8 text-sm uppercase tracking-[0.26em] text-slate-400 font-medium">
            <a
              href="#services"
              className="group relative inline-flex items-center px-1 py-2 text-sm text-slate-300 transition duration-200 ease-out hover:text-white"
            >
              Services
              <span className="absolute inset-x-0 -bottom-0.5 h-[1.5px] scale-x-0 bg-white transition-transform duration-300 ease-out origin-left group-hover:scale-x-100" />
            </a>
            <a
              href="#about"
              className="group relative inline-flex items-center px-1 py-2 text-sm text-slate-300 transition duration-200 ease-out hover:text-white"
            >
              About
              <span className="absolute inset-x-0 -bottom-0.5 h-[1.5px] scale-x-0 bg-white transition-transform duration-300 ease-out origin-left group-hover:scale-x-100" />
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center px-1 py-2 text-sm text-slate-300 transition duration-200 ease-out hover:text-white"
            >
              Contact
              <span className="absolute inset-x-0 -bottom-0.5 h-[1.5px] scale-x-0 bg-white transition-transform duration-300 ease-out origin-left group-hover:scale-x-100" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-24 md:py-28">
        <h2 className="text-5xl font-semibold tracking-tight leading-tight mb-6 md:text-6xl">
          Capture Your Best Moments
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-8">
          PlayerLens helps athletes and creators showcase their performance through
          high-quality visuals and professional media content.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition duration-200 hover:bg-slate-100"
        >
          Contact Me
        </a>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-20 bg-gray-950">
        <h3 className="text-3xl font-bold text-center mb-12">Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black border border-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Photography</h4>
            <p className="text-gray-400">High-quality sports and personal photography.</p>
          </div>
          <div className="bg-black border border-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Video Editing</h4>
            <p className="text-gray-400">Professional highlight reels and edits.</p>
          </div>
          <div className="bg-black border border-gray-800 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Content Strategy</h4>
            <p className="text-gray-400">Build your personal brand online.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">About</h3>
        <p className="text-gray-400 max-w-3xl mx-auto">
          PlayerLens is a creative media service focused on helping athletes and
          individuals present their skills in a professional and impactful way.
          We combine storytelling with visual excellence.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 bg-gray-950">
        <h3 className="text-3xl font-bold text-center mb-10">Contact</h3>

        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-black border border-gray-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-black border border-gray-800"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded bg-black border border-gray-800"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} PlayerLens. All rights reserved.
      </footer>
    </main>
  );
}