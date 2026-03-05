import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Dr. Reem Khalil',
    title: 'Doctor of Chiropractic',
    credentials: 'DC, FRCCSS(C)',
    bio: 'Dr. Khalil earned her Doctor of Chiropractic degree from the Canadian Memorial Chiropractic College and has been serving the Rosedale community for over 15 years. Her approach integrates spinal manipulation, soft-tissue therapy, and rehabilitative exercise to deliver lasting results.',
    specialties: ['Spinal Manipulation', 'Sports Injuries', 'Prenatal Care', 'Pediatric Chiropractic'],
  },
  {
    name: 'Sarah Nguyen',
    title: 'Registered Massage Therapist',
    credentials: 'RMT',
    bio: 'Sarah is a Registered Massage Therapist with a deep understanding of musculoskeletal anatomy. She works closely with our chiropractic team to create integrated care plans that accelerate recovery and improve overall well-being.',
    specialties: ['Deep Tissue Massage', 'Myofascial Release', 'Swedish Massage', 'Prenatal Massage'],
  },
  {
    name: 'David Park',
    title: 'Acupuncturist & Rehab Specialist',
    credentials: 'R.Ac, CSCS',
    bio: 'David brings a dual background in traditional Chinese medicine and modern strength & conditioning. His acupuncture and rehabilitation programs have helped hundreds of patients return to the activities they love.',
    specialties: ['Acupuncture', 'Dry Needling', 'Functional Movement', 'Injury Rehabilitation'],
  },
];

const values = [
  {
    icon: '🔬',
    title: 'Evidence-Based',
    desc: 'Our treatments are grounded in the latest clinical research — we never offer care that isn\'t supported by evidence.',
  },
  {
    icon: '💡',
    title: 'Root-Cause Focus',
    desc: 'We dig deeper than surface-level symptoms to find and address the underlying cause of your pain or dysfunction.',
  },
  {
    icon: '🌿',
    title: 'Holistic Approach',
    desc: 'We consider your whole lifestyle — sleep, nutrition, movement, and stress — when building your care plan.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Care',
    desc: 'We work closely with your family physician, specialists, and other healthcare providers when needed.',
  },
];

export default function About() {
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
            Our Story
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">
            About Rosedale
            <br />
            <em className="font-light" style={{ color: 'var(--color-accent)' }}>
              Chiropractic
            </em>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            A trusted healthcare practice serving Toronto's Rosedale neighbourhood
            since 2009 — built on expertise, integrity, and genuine care for our
            patients.
          </p>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-[0.3em] font-medium mb-3"
            style={{ color: 'var(--color-accent)' }}
          >
            Our Mission
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl font-semibold mb-6"
            style={{ color: 'var(--color-primary)' }}
          >
            More Than Pain Relief
          </h2>
          <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
            At Rosedale Chiropractic, we believe that true wellness goes beyond
            simply managing pain. Our mission is to empower every patient with the
            knowledge and tools they need to achieve lasting health — not just
            short-term relief.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            From your very first appointment, you'll experience a warm, attentive
            environment where your concerns are heard and your goals are taken
            seriously. We take pride in building long-term relationships with our
            patients and their families.
          </p>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.3em] font-medium mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              Our Values
            </p>
            <h2
              className="font-serif text-4xl font-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              How We Practise
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 p-6 rounded-2xl bg-white"
                style={{ boxShadow: '0 2px 20px rgba(27,58,75,0.06)' }}
              >
                <span className="text-3xl shrink-0 mt-1">{v.icon}</span>
                <div>
                  <h3
                    className="font-serif text-lg font-semibold mb-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.3em] font-medium mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              Our Team
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl font-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              Meet the Practitioners
            </h2>
          </div>

          <div className="space-y-16">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`grid md:grid-cols-5 gap-10 items-start`}
              >
                {/* Avatar */}
                <div
                  className={`md:col-span-2 rounded-3xl overflow-hidden aspect-square flex items-center justify-center ${
                    i % 2 === 1 ? 'md:order-2' : ''
                  }`}
                  style={{
                    background: `linear-gradient(160deg, var(--color-primary) 0%, ${
                      i === 0 ? '#2a5470' : i === 1 ? '#3d6b5e' : '#4a5568'
                    } 100%)`,
                  }}
                >
                  <div className="text-center text-white p-8">
                    <div className="text-7xl mb-3">
                      {i === 0 ? '👩‍⚕️' : i === 1 ? '🧖' : '🧑‍⚕️'}
                    </div>
                    <p className="font-serif text-xl font-semibold">{member.name}</p>
                    <p className="text-white/60 text-xs mt-1 tracking-widest uppercase">
                      {member.credentials}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className={`md:col-span-3 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p
                    className="text-xs uppercase tracking-[0.2em] font-medium mb-2"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {member.title}
                  </p>
                  <h3
                    className="font-serif text-3xl font-semibold mb-4"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {member.bio}
                  </p>
                  <div>
                    <p
                      className="text-xs uppercase tracking-[0.15em] font-semibold mb-3"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      Specialties
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1.5 rounded-full"
                          style={{
                            backgroundColor: 'var(--color-bg-alt)',
                            color: 'var(--color-primary)',
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-4xl font-semibold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Book a consultation with one of our practitioners today.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-primary)',
              boxShadow: '0 4px 24px rgba(201,169,110,0.3)',
            }}
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
