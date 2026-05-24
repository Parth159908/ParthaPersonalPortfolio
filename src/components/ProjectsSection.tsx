import { motion } from 'framer-motion'
import { usePortfolio } from '../hooks/usePortfolio'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const { projects } = usePortfolio()

  // highlight:true sorted first, then by year descending
  const sorted = [...projects].sort((a, b) => {
    if (a.highlight === b.highlight) return Number(b.year) - Number(a.year)
    return a.highlight ? -1 : 1
  })

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-4xl sm:text-5xl font-black tracking-tight mb-16"
        >
          <span className="hero-heading">Things I've</span>{' '}
          <span className="text-white">shipped.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-0 items-start">
          {sorted.map((project, index) => (
            <div key={project.id} className="px-0 md:px-3 xl:px-4">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
