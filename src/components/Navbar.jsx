import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const LinkItem = ({ href, children }) => (
    <a
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      onClick={() => setOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
          <span className="text-base sm:text-lg font-bold tracking-tight">Rohit Solanki</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <LinkItem key={item.href} href={item.href}>{item.label}</LinkItem>
          ))}
          <div className="h-6 w-px bg-gray-200" />
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-gray-900"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-gray-900"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 grid gap-4">
            {navItems.map((item) => (
              <LinkItem key={item.href} href={item.href}>{item.label}</LinkItem>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-gray-900" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-gray-900" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
