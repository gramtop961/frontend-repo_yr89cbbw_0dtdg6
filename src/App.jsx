import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Me</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  I’m Rohit Solanki, a MERN Stack Developer passionate about building delightful user experiences and reliable systems.
                  I focus on clean architecture, type‑safe code, and thoughtful UI that balances aesthetics with usability. I enjoy
                  working across the stack: crafting smooth interfaces, orchestrating APIs, and optimizing databases for performance.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  When I’m not coding, I explore new 3D/animation techniques, contribute to open source, and mentor budding developers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-rose-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold">Skills Snapshot</h3>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <li className="rounded-lg bg-white px-3 py-2 border">React</li>
                  <li className="rounded-lg bg-white px-3 py-2 border">Next.js</li>
                  <li className="rounded-lg bg-white px-3 py-2 border">Node.js</li>
                  <li className="rounded-lg bg-white px-3 py-2 border">Express</li>
                  <li className="rounded-lg bg-white px-3 py-2 border">MongoDB</li>
                  <li className="rounded-lg bg-white px-3 py-2 border">Tailwind</li>
                  <li className="rounded-lg bg-white px-3 py-2 border">TypeScript</li>
                  <li className="rounded-lg bg-white px-3 py-2 border">Spline / Three</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Rohit Solanki. All rights reserved.</p>
          <a href="#home" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
