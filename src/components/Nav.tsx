import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/competences', label: 'Compétences' },
  { to: '/notre-equipe', label: 'Notre équipe' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: '#25282b',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <nav className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="SD Avocats — Accueil">
          <span
            className="w-9 h-9 rounded-[6px] flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#e60000' }}
          >
            <span className="text-white text-sm font-black tracking-tight leading-none">SD</span>
          </span>
          <span
            className="text-white text-sm font-bold tracking-wide uppercase hidden sm:block"
            style={{ letterSpacing: '0.12em' }}
          >
            Avocats
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-white/80 hover:text-white text-sm transition-colors duration-150"
                style={{ fontWeight: 400 }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:contact@sdavocats.fr"
              className="inline-flex items-center px-6 py-2 text-sm font-medium text-white border border-white/30 hover:border-white/70 transition-colors duration-150"
              style={{ borderRadius: '60px' }}
            >
              Nous écrire
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 border-t"
          style={{ backgroundColor: '#25282b', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <ul className="px-8 py-6 flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-white text-lg font-medium block"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="mailto:contact@sdavocats.fr"
                className="text-white/70 text-base block"
              >
                contact@sdavocats.fr
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
