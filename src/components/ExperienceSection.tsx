import { motion } from 'framer-motion'
import { usePortfolio } from '../hooks/usePortfolio'

export default function ExperienceSection() {
  const { experience } = usePortfolio()

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-4xl sm:text-5xl font-black tracking-tight mb-16"
        >
          <span className="hero-heading">Where I've</span>{' '}
          <span className="text-white">built things.</span>
        </motion.h2>

        <div className="space-y-0">
          {experience.map((job, index) => {
            const num = String(index + 1).padStart(2, '0')
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                {/* Divider */}
                {index === 0 && (
                  <div className="h-px bg-[#1a1a1a] mb-10" />
                )}

                <div className="grid md:grid-cols-[80px_1fr] gap-6 pb-10">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-black text-[#1f1f1f] select-none">
                      {num}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                          {job.company}
                        </h3>
                        <p className="text-sm font-medium text-gray-500 mt-0.5">
                          {job.role}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#111] border border-[#2a2a2a] text-gray-500">
                          {job.period}
                        </span>
                        {job.location && (
                          <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#111] border border-[#2a2a2a] text-gray-600">
                            {job.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {job.summary}
                    </p>

                    {/* Highlights — first 3 only */}
                    <ul className="space-y-2">
                      {job.highlights.slice(0, 5).map((h, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-500">
                          <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-purple-500" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Divider after each */}
                <div className="h-px bg-[#1a1a1a] mb-10" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
