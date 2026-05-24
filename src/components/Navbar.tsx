import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'

const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const { profile } = usePortfolio()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0C0C]/90 backdrop-blur-md border-b border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="text-xl font-bold tracking-tight gradient-text"
        >
          {profile.shortName}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                className="text-xs font-semibold tracking-widest text-gray-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${profile.social.email || ''}`}
          className="hidden md:inline-flex items-center gap-2 gradient-btn text-white text-xs font-semibold tracking-widest px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          HIRE ME
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#0C0C0C]/95 backdrop-blur-md border-b border-[#1a1a1a] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  className="text-sm font-semibold tracking-widest text-gray-400 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.social.email || ''}`}
            className="mt-6 inline-flex items-center gap-2 gradient-btn text-white text-xs font-semibold tracking-widest px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            HIRE ME
          </a>
        </div>
      )}
    </header>
  )
}
