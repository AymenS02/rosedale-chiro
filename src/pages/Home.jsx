import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";

const services = [
  {
    icon: <Icon icon="material-symbols:foot-bones-outline" />,
    title: 'Chiropractic Adjustments',
    desc: 'Precise spinal manipulations to restore alignment, relieve pain, and improve nervous system function.',
  },
  {
    icon: <Icon icon="material-symbols:massage" />,
    title: 'Massage Therapy',
    desc: 'Registered massage therapy to release tension, reduce inflammation, and complement chiropractic care.',
  },
  {
    icon: <Icon icon="material-symbols:shoe-cleats-outline" />,
    title: 'Custom Orthotics',
    desc: "Individually designed foot orthotics to correct imbalances and support your whole body's alignment.",
  },
  {
    icon: <Icon icon="material-symbols:acupuncture" />,
    title: 'Acupuncture',
    desc: "Traditional acupuncture techniques to manage pain, stress, and support the body's natural healing.",
  },
  {
    icon: <Icon icon="material-symbols:science" />,
    title: 'Active Release Therapy',
    desc: 'Targeted soft-tissue treatment to break down scar tissue and restore full range of motion.',
  },
  {
    icon: <Icon icon="material-symbols:fitness-center" />,
    title: 'Rehabilitation',
    desc: 'Personalised exercise programs to rebuild strength, stability, and prevent future injury.',
  },
];

const testimonials = [
  {
    name: 'Gisele W.',
    quote:
      'This is a full service therapy office with top notch chiropractic and fabulous physiotherapy... they saved my trip to Scotland this year with intense, effective physio on my hip! I love the massage therapist. Not a spa massage, but the real therapeutic one that addresses your discomforts. Love this place!!!',
  },
  {
    name: 'Diane M.',
    quote:
      'I had major shoulder and neck pain. I looked up the clinic and made the call. They fit me in within an hour. This was my first visit and it wouldnt be my last. The staff is so friendly and so amazing. I will recommend the Rosedale Chiropractic Clinic to all my friends.',
  },
  {
    name: 'Kenzie M.',
    quote:
      'Rosedale chiropractic is one of the best clinics I’ve been too for treatment. The staff is always so kind and friendly! Dr. Di Filippo is so helpful and pleasant. He is willing to try all treatments to find what works for you. His compassion and interests in his patients makes this clinic even better. My partner and I love coming here for adjustments.'
  },
];

function ServiceCard({ icon, title, desc }) {
  return (
    <div
      className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{ backgroundColor: 'white', boxShadow: '0 2px 20px rgba(27,58,75,0.07)' }}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3
        className="font-serif text-lg font-semibold mb-2"
        style={{ color: 'var(--color-primary)' }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
        {desc}
      </p>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.querySelectorAll('.hero-anim').forEach((child, i) => {
      child.style.animationDelay = `${i * 0.15}s`;
    });
  }, []);

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, #2a5470 60%, #1a4a60 100%)',
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
          <div className="max-w-2xl">
            <p
              className="hero-anim animate-fade-up text-xs uppercase tracking-[0.3em] font-medium mb-6"
              style={{ color: 'var(--color-accent)' }}
            >
              Hamilton · Rosedale
            </p>
            <h1
              className="hero-anim animate-fade-up font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white mb-6"
            >
              Your Health,
              <br />
              <em className="font-light not-italic" style={{ color: 'var(--color-accent)' }}>
                Restored.
              </em>
            </h1>
            <p className="hero-anim animate-fade-up text-lg text-white/75 leading-relaxed mb-10 max-w-lg">
              Evidence-based chiropractic care designed around you. We treat the
              root cause — not just the symptoms — so you can move, live, and feel
              your best.
            </p>
            <div className="hero-anim animate-fade-up flex flex-wrap gap-4">
              <Link
                to="https://rosedale.aspire.clinic/portal/app/components/booking/#!/"
                className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-primary)',
                  boxShadow: '0 4px 24px rgba(201,169,110,0.35)',
                }}
              >
                Book an Appointment
              </Link>
              <Link
                to="/about"
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Meet the Team
              </Link>
            </div>
          </div>

          {/* Floating stats */}
          <div className="hero-anim animate-fade-up mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: '15+', label: 'Years of Experience' },
              { value: '5,000+', label: 'Patients Helped' },
              { value: '6', label: 'Services Offered' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-3xl font-semibold text-white">{s.value}</p>
                <p className="text-xs text-white/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 40V60Z" fill="#F8F5F0" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="py-24 px-6" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.3em] font-medium mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              What We Offer
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl font-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              Comprehensive Care
            </h2>
            <p
              className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              From your first visit to long-term wellness, we offer a full range of
              therapies tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Image placeholder */}
          <div
            className="rounded-3xl overflow-hidden aspect-[4/5] flex items-center justify-center"
            style={{
              background: 'linear-gradient(160deg, var(--color-primary) 0%, #2a5470 100%)',
            }}
          >
            <img src="/front.png" alt="Rosedale Chiropractic Clinic" className="w-full h-full object-cover border-10 border-accent rounded-3xl" />
          </div>
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] font-medium mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              About the Practice
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl font-semibold mb-6 leading-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              Healing Rooted in
              <br />
              <em className="font-light">Science &amp; Compassion</em>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--color-text-muted)' }}>
              At Rosedale Chiropractic, we believe true health is more than the
              absence of pain. Our approach combines clinical expertise with
              personalised attention — we listen first, then create a care plan
              built specifically for you.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Whether you're recovering from an injury, managing chronic pain, or
              simply striving for better health, our experienced team is here to
              guide every step of your journey.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: 'var(--color-primary)' }}
            >
              Meet Our Team
              <span className="text-[var(--color-accent)]">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.3em] font-medium mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              Why Choose Us
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl font-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              The Rosedale Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Icon icon="material-symbols:verified" />,
                title: 'Expert Practitioners',
                desc: 'Our team holds advanced certifications and stays current with the latest evidence in chiropractic care.',
              },
              {
                icon: <Icon icon="material-symbols:handshake" />,
                title: 'Patient-Centred',
                desc: 'Every treatment plan is tailored to your unique goals, lifestyle, and medical history.',
              },
              {
                icon: <Icon icon="material-symbols:local-hospital" />,
                title: 'Modern Facility',
                desc: 'State-of-the-art equipment in a calm, welcoming environment in the heart of Rosedale.',
              },
              {
                icon: <Icon icon="material-symbols:assignment" />,
                title: 'Direct Billing',
                desc: 'We direct-bill most major insurance providers so you can focus on healing, not paperwork.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center px-4">
                <div className="text-4xl mb-4 items-center justify-center flex">{item.icon}</div>
                <h3
                  className="font-serif text-lg font-semibold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.3em] font-medium mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              Patient Stories
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
              >
                <p className="text-4xl mb-5" style={{ color: 'var(--color-accent)' }}>
                  "
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: 'var(--color-bg-alt)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Ready to Feel Better?
          </h2>
          <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            Book your appointment today and take the first step toward a pain-free,
            healthier life.
          </p>
          <Link
            to="https://rosedale.aspire.clinic/portal/app/components/booking/#!/"
            className="inline-block px-10 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              boxShadow: '0 4px 24px rgba(27,58,75,0.25)',
            }}
          >
            Book an Appointment
          </Link>
          <p className="mt-5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Or call us at{' '}
            <a
              href="tel:+19055457570"
              className="font-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              (905) 545-7570
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
