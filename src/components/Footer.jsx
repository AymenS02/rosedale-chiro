import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-serif text-2xl font-semibold tracking-wide">Rosedale</p>
          <p
            className="text-xs uppercase tracking-[0.2em] font-light mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            Chiropractic
          </p>
          <p className="text-sm text-white/70 leading-relaxed">
            Compassionate, evidence-based chiropractic care in the heart of
            Toronto's Rosedale neighbourhood.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-xs uppercase tracking-[0.18em] font-semibold mb-5"
            style={{ color: 'var(--color-accent)' }}
          >
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Services', to: '/#services' },
              { label: 'FAQ', to: '/faq' },
              { label: 'Contact', to: '/contact' },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-xs uppercase tracking-[0.18em] font-semibold mb-5"
            style={{ color: 'var(--color-accent)' }}
          >
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3 items-start">
              <span className="mt-0.5 shrink-0">📍</span>
              <span>
                1472 Yonge St, Suite 100
                <br />
                Toronto, ON M4T 1Y5
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>📞</span>
              <a href="tel:+14165551234" className="hover:text-white transition-colors">
                (416) 555-1234
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span>✉️</span>
              <a
                href="mailto:info@rosedalechiropractic.ca"
                className="hover:text-white transition-colors"
              >
                info@rosedalechiropractic.ca
              </a>
            </li>
          </ul>

          <h4
            className="text-xs uppercase tracking-[0.18em] font-semibold mt-7 mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            Hours
          </h4>
          <ul className="space-y-1 text-sm text-white/70">
            <li className="flex justify-between gap-8">
              <span>Mon – Fri</span>
              <span>8:00 am – 7:00 pm</span>
            </li>
            <li className="flex justify-between gap-8">
              <span>Saturday</span>
              <span>9:00 am – 3:00 pm</span>
            </li>
            <li className="flex justify-between gap-8">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Rosedale Chiropractic. All rights reserved.</span>
          <span>Toronto, Ontario, Canada</span>
        </div>
      </div>
    </footer>
  );
}
