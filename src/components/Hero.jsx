import Spline from '@splinetool/react-spline';
import { ArrowRight, Code, Server, Database, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-32 pb-24 sm:pt-40 sm:pb-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-lg">
              <p className="text-sm font-medium tracking-wider text-indigo-600 uppercase">MERN Stack Developer</p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Hi, I’m <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">Rohit Solanki</span>
              </h1>
              <p className="mt-4 text-gray-700 text-base sm:text-lg">
                I craft modern, scalable web apps with beautiful interfaces and robust backends. I love building interactive 3D, real‑time experiences, and performant APIs.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-indigo-700 transition">
                  View Projects
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 font-semibold shadow hover:shadow-md border border-gray-200">
                  Contact Me
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Feature icon={<Code size={18} />} label="React / Next" />
                <Feature icon={<Server size={18} />} label="Node / Express" />
                <Feature icon={<Database size={18} />} label="MongoDB" />
                <Feature icon={<Rocket size={18} />} label="3D & Animations" />
              </div>
            </div>

            <div className="pointer-events-none relative">
              <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-rose-500/10 rounded-[2rem] blur-2xl pointer-events-none" />
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white/70 backdrop-blur px-3 py-2 border border-white/40 shadow-sm">
      <span className="text-indigo-600">{icon}</span>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
}
