import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg bg-black/90 border-b border-border' : 'backdrop-blur-md bg-black/70'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-accent hover:text-accent-dim transition-colors">
          Chetan Malage<span className="text-text">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.to ? 'page' : undefined}
              className={`text-sm transition-colors ${
                pathname === item.to ? 'text-accent font-medium' : 'text-muted hover:text-text'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen((isOpen) => !isOpen)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-2xl text-text hover:bg-white/5"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="md:hidden bg-card border-t border-border">
          <div className="px-4 sm:px-6 py-3 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={pathname === item.to ? 'page' : undefined}
                className={`flex min-h-11 items-center rounded-lg px-3 text-sm ${
                  pathname === item.to ? 'text-accent font-medium' : 'text-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}