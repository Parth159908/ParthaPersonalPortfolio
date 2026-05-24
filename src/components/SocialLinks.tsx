import { Github, Instagram, Linkedin, Mail, Phone, Globe } from 'lucide-react'
import type { Social } from '../types/portfolio'

interface SocialLinksProps {
  social: Social
  className?: string
  iconSize?: number
  variant?: 'pill' | 'icon'
}

const SOCIAL_CONFIG = [
  { key: 'github' as const, Icon: Github, label: 'GitHub' },
  { key: 'linkedin' as const, Icon: Linkedin, label: 'LinkedIn' },
  { key: 'instagram' as const, Icon: Instagram, label: 'Instagram' },
  { key: 'email' as const, Icon: Mail, label: 'Email', hrefPrefix: 'mailto:' },
  { key: 'phone' as const, Icon: Phone, label: 'Phone', hrefPrefix: 'tel:' },
  { key: 'website' as const, Icon: Globe, label: 'Website' },
]

export default function SocialLinks({
  social,
  className = '',
  iconSize = 16,
  variant = 'pill',
}: SocialLinksProps) {
  const links = SOCIAL_CONFIG.filter(({ key }) => {
    const val = social[key]
    return val && val.trim() !== ''
  })

  if (links.length === 0) return null

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ key, Icon, label, hrefPrefix = '' }) => {
        const value = social[key]!
        const href = hrefPrefix ? `${hrefPrefix}${value}` : value

        if (variant === 'pill') {
          return (
            <a
              key={key}
              href={href}
              target={hrefPrefix ? undefined : '_blank'}
              rel={hrefPrefix ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2a2a2a] bg-[#111] text-gray-400 hover:text-white hover:border-[#444] transition-all duration-200 text-sm"
            >
              <Icon size={iconSize} />
              <span>{label}</span>
            </a>
          )
        }

        return (
          <a
            key={key}
            href={href}
            target={hrefPrefix ? undefined : '_blank'}
            rel={hrefPrefix ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Icon size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
