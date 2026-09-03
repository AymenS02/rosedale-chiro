import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span
            className="font-serif text-2xl font-semibold tracking-wide"
            style={{ color: scrolled ? 'var(--color-primary)' : 'white' }}
          >
            Rosedale
          </span>
          <span
            className="text-xs uppercase tracking-[0.2em] font-light"
            style={{ color: scrolled ? 'var(--color-accent)' : 'rgba(201,169,110,0.9)' }}
          >
            Chiropractic
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === link.to
                  ? scrolled
                    ? 'text-[var(--color-primary)]'
                    : 'text-white'
                  : scrolled
                  ? 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-[var(--color-accent)] transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <a
            href="https://rosedale.aspire.clinic/portal/app/components/booking/#!/"
            className="ml-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-primary)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled ? 'bg-[var(--color-primary)]' : 'bg-white'
            } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled ? 'bg-[var(--color-primary)]' : 'bg-white'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              scrolled ? 'bg-[var(--color-primary)]' : 'bg-white'
            } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white shadow-lg`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`text-sm font-medium py-1 border-b border-gray-100 ${
                location.pathname === link.to
                  ? 'text-[var(--color-primary)]'
                  : 'text-[var(--color-text-muted)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://rosedale.aspire.clinic/portal/app/components/booking/#!/"
            onClick={closeMenu}
            className="mt-2 px-5 py-2 rounded-full text-sm font-medium text-center"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
