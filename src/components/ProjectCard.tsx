import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import type { Project } from '../types/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

const PLACEHOLDER_COLORS = [
  { a: '#3b0764', b: '#500724' },
  { a: '#500724', b: '#431407' },
  { a: '#2e1065', b: '#1e1b4b' },
  { a: '#1e1b4b', b: '#3b0764' },
  { a: '#431407', b: '#500724' },
  { a: '#052e16', b: '#1e1b4b' },
]

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, '0')
  const hasImage = project.image && project.image.trim() !== ''
  const colors = PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="sticky-card dark-card rounded-3xl overflow-hidden mb-6"
    >
      {/* Image / Placeholder */}
      <div className="relative h-48 overflow-hidden">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${colors.a} 0%, ${colors.b} 100%)`,
            }}
          />
        )}

        {/* Number badge */}
        <span className="absolute top-4 left-4 text-xs font-black text-white/20 select-none">
          {num}
        </span>

        {/* Year badge */}
        <span className="absolute top-4 right-4 font-mono text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-gray-400">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 font-medium">{project.subtitle}</p>
          </div>

          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            {project.highlight && (
              <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1.5 rounded-full gradient-btn text-white leading-none">
                Featured
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#161616] border border-[#2a2a2a] text-gray-500 text-[10px] font-semibold tracking-wider">
              <Lock size={10} className="text-purple-500" />
              NDA PROTECTED
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.description}</p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-gray-400 text-[11px] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="text-xs text-gray-600 font-medium">{project.role}</span>
      </div>
    </motion.article>
  )
}
