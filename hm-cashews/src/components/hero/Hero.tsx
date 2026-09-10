'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Suspense, lazy } from 'react';

// Dynamic import for WebGL - progressive enhancement
const HeroScene = lazy(() => import('./HeroScene'));

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Staggered reveal animation
      tl.from('.hero-kicker', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
      .from('.hero-title-line', {
        yPercent: 110,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.25')
      .from('.hero-copy', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from('.hero-actions', {
        y: 16,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3')
      .from('.scroll-indicator', {
        y: 10,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full bg-cocoa overflow-hidden"
    >
      {/* Background grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* WebGL Scene - Progressive Enhancement */}
      <div className="hidden lg:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container flex flex-col justify-center pt-20">
        {/* Kicker */}
        <p className="hero-kicker text-gold uppercase tracking-widest text-sm mb-6">
          FROM ORCHARD TO GLOBAL TABLE
        </p>

        {/* Main Headline */}
        <h1 className="text-hero font-display font-bold text-ivory mb-8 leading-[0.95]">
          <span className="block overflow-hidden">
            <span className="hero-title-line block">FROM ORIGIN</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-title-line block text-gold">TO EVERY TABLE.</span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="hero-copy text-cream/80 text-lg md:text-xl max-w-md mb-10">
          Precision processing. Exceptional cashews. Global reach.
        </p>

        {/* CTA Actions */}
        <div className="hero-actions flex flex-wrap gap-4">
          <a
            href="#story"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian font-medium uppercase tracking-wider hover:bg-cream transition-colors duration-300"
          >
            Explore the journey
            <svg
              className="w-5 h-5 transform group-hover:translate-y-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-cream/30 text-cream font-medium uppercase tracking-wider hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Request a Quote
            <svg
              className="w-4 h-4 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
