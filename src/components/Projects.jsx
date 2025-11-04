import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'Socket-powered chat with rooms, typing indicators, and message persistence.',
    tags: ['React', 'Node', 'Socket.io', 'MongoDB'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive 3D product explorer with Spline and smooth camera controls.',
    tags: ['React', 'Spline', 'Three.js'],
    link: '#',
  },
  {
    title: 'Ecommerce API',
    description: 'Secure, scalable API with auth, payments, and admin analytics.',
    tags: ['Node', 'Express', 'MongoDB'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Projects</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">A selection of work that highlights clean code, performance, and user-focused experiences.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-rose-100" />
              <div className="p-5">
                <h3 className="text-lg font-bold group-hover:text-indigo-600 transition">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={p.link} className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
