import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedAvatar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-44 h-44 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Soft ambient 3D shadow beneath the avatar */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-[70%] h-[18px] rounded-[50%]"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.25) 0%, transparent 70%)',
          filter: 'blur(6px)',
        }}
      />

      {/* Outer Glowing Aura (Soft Neon Effect) */}
      <motion.div
        className="absolute inset-[-8px] rounded-full pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, #d946ef, #ff007f, #ff7300, #d946ef)',
          animation: 'spin-slow 12s linear infinite',
        }}
        animate={{
          scale: isHovered ? 1.06 : 1.02,
          opacity: isHovered ? 0.95 : 0.65,
          filter: isHovered ? 'blur(12px)' : 'blur(8px)',
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      />

      {/* Inner Sharp Spinning Ring (Vibrant Glassy Border) */}
      <motion.div
        className="absolute inset-[-3px] rounded-full pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, #d946ef, #ff007f, #ff7300, #d946ef)',
          animation: 'spin-slow 8s linear infinite',
        }}
        animate={{
          scale: isHovered ? 1.03 : 1,
          opacity: isHovered ? 1.0 : 0.85,
          filter: 'blur(0.5px)',
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      />

      {/* Floating Greeting Speech Bubble */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 15, x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, scale: 0.6, y: 15, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute -top-14 left-1/2 z-50 bg-[#8b5cf6] text-white text-xs font-bold px-4 py-2 rounded-full border border-[#d946ef] shadow-lg pointer-events-none whitespace-nowrap"
          >
            HELLO! 👋
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#8b5cf6] border-r border-b border-[#d946ef] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Avatar Container */}
      <motion.div
        whileHover={{ scale: 1.06, y: -3 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative w-full h-full rounded-full overflow-hidden cursor-pointer bg-[#0C0C0C]"
        style={{
          boxShadow: isHovered
            ? '0 20px 50px rgba(0,0,0,0.8), 0 8px 20px rgba(139,92,246,0.2), 0 0 0 1px rgba(255,255,255,0.06)'
            : '0 12px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
          transition: 'box-shadow 0.4s ease',
        }}
      >
        <img
          src="/avatar.png"
          alt="Parth"
          className="w-full h-full object-cover select-none"
          draggable={false}
        />

        {/* Hover highlight glow */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? 'inset 0 0 25px rgba(139, 92, 246, 0.12)'
              : 'inset 0 0 0px rgba(139, 92, 246, 0)',
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </div>
  )
}
