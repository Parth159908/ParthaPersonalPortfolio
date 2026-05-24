import { motion } from 'framer-motion'
import { usePortfolio } from '../hooks/usePortfolio'

export default function AboutSection() {
  const { profile, skills } = usePortfolio()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4"
        >
          About
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: headline + bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-8">
              <span className="hero-heading">Engineering that</span>
              <br />
              <span className="text-white">scales and lasts.</span>
            </h2>

            <p className="bio-text text-gray-400 text-base sm:text-lg leading-relaxed">
              {profile.bio}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="dark-card rounded-2xl p-5">
                <p className="text-3xl font-black gradient-text">{profile.yearsOfExperience}+</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">Years Experience</p>
              </div>
              <div className="dark-card rounded-2xl p-5">
                <p className="text-3xl font-black gradient-text">3+</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">Companies</p>
              </div>
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {skills.categories.map((cat, i) => (
              <div key={i} className="dark-card rounded-2xl p-5">
                <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-3">
                  {cat.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-gray-300 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
