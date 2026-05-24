import { motion } from 'framer-motion'
import { usePortfolio } from '../hooks/usePortfolio'

// Decorative emoji-like icons that don't require icon libraries
const DECO = ['✦', '◆', '★', '●', '▲']

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  avatarColor: string
  deco: string
}

function TestimonialCard({ quote, name, role, avatarColor, deco }: TestimonialCardProps) {
  const initial = name.charAt(0).toUpperCase()
  return (
    <div className="marquee-card flex-shrink-0 w-80 sm:w-96 dark-card rounded-2xl p-6 mx-3 flex flex-col gap-5">
      {/* Decorative icon */}
      <span className="text-2xl" style={{ color: avatarColor }} aria-hidden="true">
        {deco}
      </span>

      {/* Quote */}
      <p className="text-sm text-gray-400 leading-relaxed italic flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
          aria-label={name}
        >
          {initial}
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest text-white uppercase">{name}</p>
          <p className="text-xs text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const { testimonials } = usePortfolio()

  // Duplicate list to create seamless loop
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4"
        >
          Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-4xl sm:text-5xl font-black tracking-tight mb-16"
        >
          <span className="hero-heading">What people</span>{' '}
          <span className="text-white">say.</span>
        </motion.h2>
      </div>

      {/* Marquee container — extends beyond viewport */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10" />

        <div className="marquee-track py-2" aria-label="Testimonials carousel">
          {doubled.map((t, i) => (
            <TestimonialCard
              key={`${t.id}-${i}`}
              quote={t.quote}
              name={t.name}
              role={t.role}
              avatarColor={t.avatarColor}
              deco={DECO[i % DECO.length]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
