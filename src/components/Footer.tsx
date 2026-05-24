import { useState } from 'react'
import { Copy, Check, MapPin } from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'
import SocialLinks from './SocialLinks'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard not available
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy email address"
      className="ml-2 p-1 rounded text-gray-600 hover:text-gray-300 transition-colors duration-200"
    >
      {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
    </button>
  )
}

export default function Footer() {
  const { profile } = usePortfolio()
  const year = new Date().getFullYear()

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="border-t border-[#1a1a1a] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight hero-heading mb-2">
              {profile.name}
            </h2>
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
              {profile.specialization}
            </p>
            <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-6">
              <MapPin size={13} className="text-purple-500 flex-shrink-0" />
              <span>{profile.location}</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {profile.tagline}
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Reach Out */}
          <div>
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">
              Reach Out
            </p>

            {/* Email with copy button */}
            {profile.social.email && (
              <div className="flex items-center mb-3">
                <a
                  href={`mailto:${profile.social.email}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 break-all"
                >
                  {profile.social.email}
                </a>
                <CopyButton text={profile.social.email} />
              </div>
            )}

            {/* Phone */}
            {profile.social.phone && (
              <div className="mb-6">
                <a
                  href={`tel:${profile.social.phone}`}
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {profile.social.phone}
                </a>
              </div>
            )}

            {/* Social icons */}
            <SocialLinks social={profile.social} variant="icon" iconSize={18} className="gap-4" />
          </div>
        </div>

        {/* Bottom strip */}
        <div className="h-px bg-[#1a1a1a] mb-8" />

        <div className="flex items-center justify-center text-xs text-gray-700">
          <p>&copy; {year} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
