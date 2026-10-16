'use client'

import { useState } from 'react'
import { Home, Menu, Phone, X } from 'lucide-react'

const navItems = [
  { label: 'Accueil', href: '/#accueil' },
  { label: 'Acheter', href: '/#biens' },
  { label: 'Louer', href: '/#biens' },
  { label: 'Nos biens', href: '/#biens' },
  { label: 'À propos', href: '/#contact' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="/" className="flex items-center gap-3" aria-label="Maison & Co accueil">
          <span className="flex size-10 items-center justify-center rounded-full border border-[#c9a96e] text-[#c9a96e]">
            <Home size={19} />
          </span>
          <span className="font-serif text-xl tracking-wide">
            Maison <i className="font-normal text-[#c9a96e]">&</i> Co
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium transition-colors hover:text-[#d6b87b]">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="tel:+21670123456" className="hidden items-center gap-2 text-sm lg:flex">
          <Phone size={15} /> +216 70 123 456
        </a>
        <button
          className="lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label={mobileMenu ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>
      {mobileMenu && (
        <nav className="flex flex-col gap-5 bg-[#232321] px-6 py-6 lg:hidden">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileMenu(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
