/* ============================================================
   ADITYA NUTS — Main Entry Point
   ============================================================ */

import './css/main.css';
import { initPreloader } from './js/preloader.js';
import { initNavigation } from './js/navigation.js';
import { initCashewAnimation } from './js/cashew-animation.js';
import { initScrollReveals } from './js/scroll-reveals.js';
import { initProcessScroll } from './js/process-scroll.js';

// Detect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize modules
  initPreloader(() => {
    // After preloader completes, initialize everything
    initNavigation();
    initScrollReveals(prefersReducedMotion);
    
    if (!prefersReducedMotion) {
      initCashewAnimation();
      initProcessScroll();
    } else {
      // Make all elements visible immediately
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      document.querySelectorAll('.text-reveal').forEach(el => el.classList.add('is-visible'));
      document.querySelectorAll('.line-draw').forEach(el => el.classList.add('is-visible'));
      document.querySelectorAll('.fade-in').forEach(el => el.classList.add('is-visible'));
      document.querySelectorAll('.img-reveal').forEach(el => el.classList.add('is-visible'));
    }
  });
});
