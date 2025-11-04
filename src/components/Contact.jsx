import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-gray-600 max-w-xl">
              I’m open to freelance work, collaborations, or full‑time roles. Reach out and I’ll get back within 24 hours.
            </p>

            <div className="mt-6 grid gap-4">
              <Info icon={<Mail size={18} />} label="Email" value="hello@rohitsolanki.dev" href="mailto:hello@rohitsolanki.dev" />
              <Info icon={<Phone size={18} />} label="Phone" value="+91-00000-00000" href="tel:+910000000000" />
              <Info icon={<MapPin size={18} />} label="Location" value="India (Remote friendly)" />
            </div>
          </div>

          <form className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input className="mt-1 w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="What would you like to build?" />
            </div>
            <button type="submit" className="inline-flex justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700">
              Send Message
            </button>
            <p className="text-xs text-gray-500">This form is a demo. Use the email or phone to reach me directly.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="text-indigo-600">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="rounded-xl border border-gray-200 bg-white p-4 hover:shadow-sm">{content}</a>
  ) : (
    <div className="rounded-xl border border-gray-200 bg-white p-4">{content}</div>
  );
}
