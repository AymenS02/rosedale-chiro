import { useState } from 'react';

const hours = [
  { day: 'Monday', time: '8:00 am – 7:00 pm' },
  { day: 'Tuesday', time: '8:00 am – 7:00 pm' },
  { day: 'Wednesday', time: '8:00 am – 7:00 pm' },
  { day: 'Thursday', time: '8:00 am – 7:00 pm' },
  { day: 'Friday', time: '8:00 am – 7:00 pm' },
  { day: 'Saturday', time: '9:00 am – 3:00 pm' },
  { day: 'Sunday', time: 'Closed' },
];

const today = new Date().getDay(); // 0 = Sun, 1 = Mon ...

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production this would call an API / email service
    setSubmitted(true);
  };

  return (
    <div>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section
        className="pt-36 pb-20 px-6"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, #2a5470 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-[0.3em] font-medium mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            Get In Touch
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-6">
            Contact &amp;
            <br />
            <em className="font-light" style={{ color: 'var(--color-accent)' }}>
              Appointments
            </em>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Book a visit, ask a question, or find us on the map — we're here to
            help.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          {/* Contact Form */}
          <div>
            <h2
              className="font-serif text-3xl font-semibold mb-6"
              style={{ color: 'var(--color-primary)' }}
            >
              Book an Appointment
            </h2>

            {submitted ? (
              <div
                className="p-8 rounded-2xl text-center"
                style={{ backgroundColor: 'var(--color-bg-alt)' }}
              >
                <div className="text-5xl mb-4">✅</div>
                <h3
                  className="font-serif text-2xl font-semibold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Thank you for reaching out. A member of our team will be in touch
                  within one business day to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      Full Name *
                    </label>
                    <input
                      required
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border"
                      style={{
                        borderColor: '#E2D9CE',
                        backgroundColor: 'white',
                        color: 'var(--color-text)',
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = 'var(--color-accent)')
                      }
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#E2D9CE')}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(416) 555-0000"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border"
                      style={{
                        borderColor: '#E2D9CE',
                        backgroundColor: 'white',
                        color: 'var(--color-text)',
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = 'var(--color-accent)')
                      }
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#E2D9CE')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Email Address *
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border"
                    style={{
                      borderColor: '#E2D9CE',
                      backgroundColor: 'white',
                      color: 'var(--color-text)',
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = 'var(--color-accent)')
                    }
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#E2D9CE')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border"
                    style={{
                      borderColor: '#E2D9CE',
                      backgroundColor: 'white',
                      color: form.service ? 'var(--color-text)' : 'var(--color-text-muted)',
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = 'var(--color-accent)')
                    }
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#E2D9CE')}
                  >
                    <option value="">Select a service…</option>
                    <option>Chiropractic Adjustments</option>
                    <option>Massage Therapy</option>
                    <option>Custom Orthotics</option>
                    <option>Acupuncture</option>
                    <option>Active Release Therapy</option>
                    <option>Rehabilitation</option>
                    <option>New Patient Consultation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Message / Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your concern or any specific requests…"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border resize-none"
                    style={{
                      borderColor: '#E2D9CE',
                      backgroundColor: 'white',
                      color: 'var(--color-text)',
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = 'var(--color-accent)')
                    }
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#E2D9CE')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    boxShadow: '0 4px 20px rgba(27,58,75,0.25)',
                  }}
                >
                  Send Request
                </button>
                <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
                  We'll confirm your appointment within one business day.
                </p>
              </form>
            )}
          </div>

          {/* Info column */}
          <div className="space-y-8">
            {/* Location */}
            <div
              className="p-7 rounded-2xl"
              style={{
                backgroundColor: 'white',
                boxShadow: '0 2px 20px rgba(27,58,75,0.07)',
              }}
            >
              <h3
                className="font-serif text-xl font-semibold mb-5"
                style={{ color: 'var(--color-primary)' }}
              >
                Our Location
              </h3>
              <ul className="space-y-4 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <li className="flex gap-3 items-start">
                  <span className="text-xl shrink-0">📍</span>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--color-text)' }}>
                      1472 Yonge Street, Suite 100
                    </p>
                    <p>Toronto, ON M4T 1Y5</p>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-xl shrink-0">📞</span>
                  <a
                    href="tel:+14165551234"
                    className="hover:underline"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    (416) 555-1234
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="text-xl shrink-0">✉️</span>
                  <a
                    href="mailto:info@rosedalechiropractic.ca"
                    className="hover:underline"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    info@rosedalechiropractic.ca
                  </a>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-xl shrink-0">🚇</span>
                  <p>
                    Short walk from <strong>Summerhill</strong> or{' '}
                    <strong>St. Clair</strong> subway stations
                  </p>
                </li>
              </ul>

              {/* Simple static map placeholder */}
              <div
                className="mt-5 rounded-xl overflow-hidden h-40 flex items-center justify-center text-sm"
                style={{ backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-text-muted)' }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">🗺️</div>
                  <p>1472 Yonge St, Toronto, ON</p>
                  <a
                    href="https://maps.google.com/?q=1472+Yonge+St,+Toronto,+ON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-1 inline-block underline"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              className="p-7 rounded-2xl"
              style={{
                backgroundColor: 'white',
                boxShadow: '0 2px 20px rgba(27,58,75,0.07)',
              }}
            >
              <h3
                className="font-serif text-xl font-semibold mb-5"
                style={{ color: 'var(--color-primary)' }}
              >
                Office Hours
              </h3>
              <ul className="space-y-2">
                {hours.map((h, i) => {
                  // hours array: Mon=0..Sat=5,Sun=6; getDay(): Sun=0,Mon=1..Sat=6
                  const dayIndex = i === 6 ? 0 : i + 1;
                  const isToday = dayIndex === today;
                  return (
                    <li
                      key={h.day}
                      className={`flex justify-between text-sm py-1.5 px-3 rounded-lg transition-colors ${
                        isToday ? 'font-semibold' : ''
                      }`}
                      style={{
                        backgroundColor: isToday ? 'var(--color-bg-alt)' : 'transparent',
                        color: h.time === 'Closed' ? 'var(--color-text-muted)' : 'var(--color-text)',
                      }}
                    >
                      <span>{h.day}</span>
                      <span
                        style={{
                          color:
                            h.time === 'Closed'
                              ? 'var(--color-text-muted)'
                              : 'var(--color-primary)',
                        }}
                      >
                        {h.time}
                        {isToday && (
                          <span
                            className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                            style={{
                              backgroundColor: 'var(--color-accent)',
                              color: 'var(--color-primary)',
                            }}
                          >
                            Today
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
