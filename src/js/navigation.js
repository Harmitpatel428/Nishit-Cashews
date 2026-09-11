/* ============================================================
   ADITYA NUTS — Navigation
   ============================================================ */

export function initNavigation() {
  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('.nav__link');
  const mobileLinks = document.querySelectorAll('.nav__mobile-link');
  const sections = document.querySelectorAll('section[id]');

  if (!nav) return;

  // ── Scroll state ──────────────────────────────────────
  let lastScrollY = 0;
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Add background after scrolling past hero
        if (scrollY > 80) {
          nav.classList.add('is-scrolled');
        } else {
          nav.classList.remove('is-scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveLink(scrollY);
        
        lastScrollY = scrollY;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Active link tracking ──────────────────────────────
  function updateActiveLink(scrollY) {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      const sectionHeight = section.offsetHeight;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('is-active');
      if (link.getAttribute('data-nav') === current) {
        link.classList.add('is-active');
      }
    });
  }

  // ── Smooth scroll for nav links ───────────────────────
  function smoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    // Close mobile nav if open
    closeMobileNav();
    
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  navLinks.forEach(link => link.addEventListener('click', smoothScroll));
  mobileLinks.forEach(link => link.addEventListener('click', smoothScroll));

  // Also handle footer links
  document.querySelectorAll('.footer__link').forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  // ── Mobile menu ───────────────────────────────────────
  function toggleMobileNav() {
    const isOpen = mobileNav.classList.contains('is-open');
    
    if (isOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  function openMobileNav() {
    mobileNav.classList.add('is-open');
    menuBtn.classList.add('is-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('is-open');
    menuBtn.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', toggleMobileNav);
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeMobileNav();
        menuBtn.focus();
      }
    });
  }

  // Initial state
  onScroll();
}
