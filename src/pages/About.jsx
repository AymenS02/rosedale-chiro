import { Link } from 'react-router-dom';

const team = [
  {
    name: "Dr. John Misale",
    title: "Doctor of Chiropractic",
    credentials: "DC, FRCCSS(C)",
    image:
      "/team/Misale.avif",
    bio: "Dr. John Misale has been practicing at Rosedale Chiropractic Clinic for 25 years. He also serves on the review committee of the Ensign-Chaney fund as a volunteer with the Hamilton Community Foundation.",
    bookingUrl:
      "https://rosedale.oca-aspire.com/ocaportal/app/components/booking/#!/",
  },
  {
    name: "Dr. Philip Di Filippo",
    title: "Doctor of Chiropractic",
    credentials: "",
    image:
      "https://static.wixstatic.com/media/6c29de_6ff1331de10b4b4dbdb4265dffbfbff2~mv2.jpg/v1/fill/w_229,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/RosedaleChiro-4.jpg",
    bio: "Dr. Philip Di Filippo was born and raised in Hamilton and has been practicing at Rosedale Chiropractic Clinic since 2020. He mixes both traditional and contemporary techniques to ensure success in care plans and results for his patients.",
    bookingUrl:
      "https://rosedale.oca-aspire.com/ocaportal/app/components/booking/#!/",
  },
  {
    name: "Jose Ercia",
    title: "Physiotherapist",
    credentials: "R.Ac, CSCS",
    image:
      "https://static.wixstatic.com/media/6c29de_81ef578f6b26423b9c4258453abd0301~mv2.jpg/v1/fill/w_229,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/RosedaleChiro-6.jpg",
    bio: "Jose emphasizes in manual therapy techniques to treat a variety of musculoskeletal conditions. Committed to helping patients achieve optimal mobility and pain relief, he takes a holistic approach to rehabilitation, combining hands-on techniques with individualized treatment plans.",
    bookingUrl:
      "https://rosedale.oca-aspire.com/ocaportal/app/components/booking/#!/",
  },
  {
    name: "Dhvani Vidadoriya",
    title: "Physiotherapist Assistant",
    credentials: "",
    image:
      "https://static.wixstatic.com/media/6c29de_22090134e8fb4ca885e6536476165eb4~mv2.jpg/v1/fill/w_229,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/RosedaleChiro-16.jpg",
    bio: "Dhvani is a dedicated PTA working with us while she completes her licensing exams for Physiotherapy. She brings a unique perspective as she supports our team to deliver a truly hands-on, personal approach to care.",
    bookingUrl:
      "https://rosedale.oca-aspire.com/ocaportal/app/components/booking/#!/",
  },
  {
    name: "Brennan Patrick",
    title: "Registered Massage Therapist",
    credentials: "RMT",
    image:
      "https://static.wixstatic.com/media/6c29de_179b6af0cd1f4b4999c7e1a100be2e0d~mv2.jpg/v1/fill/w_229,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/RosedaleChiro-13.jpg",
    bio: "Brennan Patrick RMT graduated from Everest School of Massage Therapy and has over 10 years of real-world and clinical experience. Brennan has worked with pregnant patients, children and the elderly. He utilizes various techniques like cupping and taping to assist his patients in their rehabilitative process.",
    bookingUrl:
      "https://rosedale.oca-aspire.com/ocaportal/app/components/booking/#!/",
  },
  {
    name: "Taylor Price",
    title: "Registered Massage Therapist",
    credentials: "RMT",
    image:
      "https://static.wixstatic.com/media/6c29de_13bae8c3805c406aaaa01861fbd80e01~mv2.png/v1/fill/w_229,h_344,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/taylor%20price.png",
    bio: "Taylor Price, RMT graduated from Mohawk College and brings four years of clinical experience to massage therapy, with a focus on providing personalized treatments tailored to each client.",
    bookingUrl:
      "https://rosedale.oca-aspire.com/ocaportal/app/components/booking/#!/",
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
            A trusted healthcare practice serving Hamilton for over 70 years. Our team of dedicated professionals is committed to helping you achieve optimal health and wellness through personalized treatment plans and a holistic approach to care.
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
              
              {/* Avatar / Profile Image */}
              <div
                className={`md:col-span-2 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="group relative h-[420px] overflow-hidden rounded-[2rem] sm:h-[500px]">
                  {/* Profile image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Subtle image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                  {/* Profile info */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="mb-3 h-px w-10 bg-white/70" />

                    <p className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                      {member.name}
                    </p>

                    {member.credentials && (
                      <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                        {member.credentials}
                      </p>
                    )}
                  </div>
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
            to="https://rosedale.aspire.clinic/portal/app/components/booking/#!/"
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
