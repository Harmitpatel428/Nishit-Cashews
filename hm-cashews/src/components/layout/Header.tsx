'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { navigationLinks } from '../../config/site';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        backgroundColor: isScrolled ? '#10100E' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isScrolled]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6"
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <span className="text-2xl font-display font-bold tracking-tight text-ivory">
              HM CASHEWS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-ivory hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-obsidian text-sm font-medium uppercase tracking-wider hover:bg-cream transition-colors duration-300"
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-6 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''} bg-ivory`} />
              <span className={`block h-0.5 w-6 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} bg-ivory`} />
              <span className={`block h-0.5 w-6 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''} bg-ivory`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display text-cream hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 px-8 py-4 bg-gold text-obsidian text-lg font-medium uppercase tracking-wider"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
