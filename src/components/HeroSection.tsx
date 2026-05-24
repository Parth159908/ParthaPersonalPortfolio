import { motion } from 'framer-motion'
import { MapPin, Briefcase } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'
import SocialLinks from './SocialLinks'
import AnimatedAvatar from './AnimatedAvatar'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function HeroSection() {
  const { profile } = usePortfolio()

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-pink-900/8 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Role pill */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2a2a2a] bg-[#111] text-xs font-semibold tracking-widest text-gray-400 mb-8">
            <Briefcase size={12} className="text-purple-400" />
            {profile.role}
          </span>
        </motion.div>

        {/* Animated 3D Avatar */}
        <motion.div
          {...fadeUp(0.1)}
          className="mb-8 relative"
        >
          <AnimatedAvatar />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-2"
        >
          <span className="text-gray-500 text-3xl sm:text-4xl md:text-5xl block mb-2 font-light tracking-widest">
            Hi, I'm
          </span>
          <span className="hero-heading">{profile.shortName}</span>
        </motion.h1>

        {/* Specialization */}
        <motion.p
          {...fadeUp(0.2)}
          className="mt-4 text-sm sm:text-base font-semibold tracking-widest text-gray-500 uppercase"
        >
          {profile.specialization}
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.25)}
          className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* Location */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-4 flex items-center gap-1.5 text-sm text-gray-600"
        >
          <MapPin size={13} className="text-purple-500" />
          <span>{profile.location}</span>
          <span className="mx-2 text-gray-700">·</span>
          <span>{profile.yearsOfExperience}+ years experience</span>
        </motion.div>

        {/* Social pills */}
        <motion.div {...fadeUp(0.35)} className="mt-8">
          <SocialLinks social={profile.social} variant="pill" iconSize={14} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="gradient-btn text-white text-sm font-semibold tracking-widest px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            VIEW MY WORK
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-sm font-semibold tracking-widest px-8 py-3 rounded-full border border-[#2a2a2a] text-gray-400 hover:text-white hover:border-[#444] transition-all duration-200"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </div>

    </section>
  )
}
