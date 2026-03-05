import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'What should I expect on my first visit?',
        a: 'Your initial appointment typically lasts 45–60 minutes. We\'ll start with a detailed health history and a thorough physical assessment, including posture analysis, range-of-motion testing, and any relevant orthopaedic or neurological exams. If appropriate, your first treatment will begin that same day. We\'ll also outline a personalised care plan and timeline for your recovery.',
      },
      {
        q: 'Do I need a referral to see a chiropractor?',
        a: 'No referral is required. You can book directly with us at any time. However, some extended health insurance plans may require a physician\'s referral for coverage, so we recommend checking your policy beforehand.',
      },
      {
        q: 'What should I wear to my appointment?',
        a: 'Comfortable, loose-fitting clothing is ideal so the practitioner can assess and treat your spine and joints easily. Athletic wear or yoga clothing works perfectly. You are welcome to change in our private changing rooms.',
      },
    ],
  },
  {
    category: 'Treatments',
    items: [
      {
        q: 'Is chiropractic adjustment safe?',
        a: 'Chiropractic adjustments are one of the safest drug-free treatments for musculoskeletal pain. Serious complications are extremely rare. Our practitioners perform thorough health screenings before treatment to ensure every technique used is appropriate and safe for your specific condition.',
      },
      {
        q: 'Will I hear a "crack" during my adjustment?',
        a: 'The sound (called a cavitation) is the release of gas from the joint capsule — similar to cracking your knuckles. It is harmless and does not indicate the success or intensity of the adjustment. Not all techniques produce an audible sound, and we offer low-force options for patients who prefer them.',
      },
      {
        q: 'How many visits will I need?',
        a: 'The number of visits varies based on your condition, its duration, and your overall health goals. Acute conditions may resolve in a few visits, while chronic or complex issues may benefit from ongoing care. After your initial assessment, we\'ll provide a clear estimate and check in with you regularly to reassess progress.',
      },
      {
        q: 'Do you treat children?',
        a: 'Yes. We offer gentle, age-appropriate chiropractic care for infants, children, and teenagers. Childhood is a period of rapid growth and physical activity, making it an excellent time to address postural and developmental concerns.',
      },
    ],
  },
  {
    category: 'Insurance & Billing',
    items: [
      {
        q: 'Do you direct-bill insurance?',
        a: 'Yes, we direct-bill most major extended health benefit providers, including Sun Life, Manulife, Great-West Life, Green Shield, Blue Cross, and many others. We\'ll verify your coverage before your first appointment so there are no surprises.',
      },
      {
        q: 'Is chiropractic covered by OHIP?',
        a: 'Chiropractic care is not currently covered under OHIP (Ontario\'s public health insurance). However, most extended health benefit plans include chiropractic coverage. We also offer competitive self-pay rates and treatment packages for patients without insurance.',
      },
      {
        q: 'What are your fees?',
        a: 'An initial chiropractic assessment is $120. Follow-up treatment sessions are $90. Registered massage therapy sessions start at $100 for 60 minutes. Please contact us for full pricing on acupuncture, orthotics, and other services.',
      },
    ],
  },
  {
    category: 'Clinic & Booking',
    items: [
      {
        q: 'Where are you located and where can I park?',
        a: 'We are located at 1472 Yonge Street, Suite 100, in the heart of Rosedale, Toronto. Street parking is available on adjacent side streets. The clinic is a short walk from Summerhill or St. Clair subway stations on the Yonge-University line.',
      },
      {
        q: 'What are your hours?',
        a: 'We are open Monday to Friday 8:00 am – 7:00 pm and Saturday 9:00 am – 3:00 pm. We are closed on Sundays and statutory holidays.',
      },
      {
        q: 'How do I book or cancel an appointment?',
        a: 'You can book online through our contact page, call us at (416) 555-1234, or email info@rosedalechiropractic.ca. We ask for at least 24 hours\' notice for cancellations or rescheduling to avoid a late-cancellation fee.',
      },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b last:border-0"
      style={{ borderColor: 'var(--color-bg-alt)' }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span
          className="text-base font-medium leading-snug"
          style={{ color: 'var(--color-primary)' }}
        >
          {q}
        </span>
        <span
          className={`shrink-0 mt-0.5 text-lg transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          style={{ color: 'var(--color-accent)' }}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
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
            Common Questions
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-6">
            Frequently Asked
            <br />
            <em className="font-light" style={{ color: 'var(--color-accent)' }}>
              Questions
            </em>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Everything you need to know before your first visit — and beyond.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTIONS ─────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2
                className="font-serif text-2xl font-semibold mb-6 pb-3 border-b"
                style={{
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-bg-alt)',
                }}
              >
                {section.category}
              </h2>
              <div
                className="rounded-2xl bg-white px-6"
                style={{ boxShadow: '0 2px 20px rgba(27,58,75,0.07)' }}
              >
                {section.items.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ─────────────────────────── */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: 'var(--color-bg-alt)' }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="font-serif text-3xl font-semibold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Still Have Questions?
          </h2>
          <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            Our friendly team is happy to answer any questions you have. Get in
            touch and we'll respond as soon as possible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+14165551234"
              className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
              }}
            >
              Call (416) 555-1234
            </a>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200"
              style={{
                borderColor: 'var(--color-primary)',
                color: 'var(--color-primary)',
              }}
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
