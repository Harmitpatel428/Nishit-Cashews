/* ============================================================
   ADITYA NUTS — Cashew Shell Opening Animation
   ============================================================
   Scroll interaction representing natural cashew structure.
   
   Phases:
   1. Intact shell with subtle organic rotation and depth
   2. Tension & asymmetric micro-rotation along natural seam
   3. Controlled physical separation revealing kernel
   4. Kernel emergence with subtle shadow & lighting depth
   5. Smooth transition into content
   ============================================================ */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initCashewAnimation() {
  const section = document.querySelector('.opening');
  const shellLeft = document.getElementById('shellLeft');
  const shellRight = document.getElementById('shellRight');
  const kernel = document.getElementById('cashewKernel');
  const phaseText1 = document.getElementById('phaseText1');
  const phaseText2 = document.getElementById('phaseText2');
  const phaseText3 = document.getElementById('phaseText3');
  const glow = document.querySelector('.opening__glow');
  
  if (!section || !shellLeft || !shellRight || !kernel) return;
  
  // Set initial organic positioning
  gsap.set(shellLeft, { transformOrigin: '20% 80%', rotateZ: 0 });
  gsap.set(shellRight, { transformOrigin: '80% 80%', rotateZ: 0 });
  gsap.set(kernel, { scale: 0.85, opacity: 0 });
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      pin: false, // section already has CSS position: sticky
    }
  });
  
  // ── PHASE 01: Raw Shell (0% - 20%) ────────────────────
  // Natural breathing & initial slight tilt
  tl.fromTo([shellLeft, shellRight], 
    { scale: 0.92, rotateZ: 0 },
    { scale: 1, rotateZ: 1.5, duration: 0.2, ease: 'power1.out' }, 0
  );
  
  tl.fromTo(phaseText1,
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.02
  );
  tl.to(phaseText1,
    { opacity: 0, y: -10, duration: 0.08, ease: 'power2.in' }, 0.16
  );
  
  // ── PHASE 02: Crack & Asymmetric Tension (20% - 40%) ──
  // Asymmetric tilt as shell begins splitting
  tl.to(shellLeft, {
    rotateZ: -4,
    x: '-3%',
    y: '-1%',
    duration: 0.2,
    ease: 'sine.inOut'
  }, 0.2);
  
  tl.to(shellRight, {
    rotateZ: 6,
    x: '4%',
    y: '1%',
    duration: 0.2,
    ease: 'sine.inOut'
  }, 0.2);
  
  tl.fromTo(phaseText2,
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.24
  );
  tl.to(phaseText2,
    { opacity: 0, y: -10, duration: 0.08, ease: 'power2.in' }, 0.38
  );
  
  // ── PHASE 03: Controlled Separation (40% - 68%) ───────
  // Shell halves part physically with realistic parallax and rotation
  tl.to(shellLeft, {
    x: '-42%',
    y: '-3%',
    rotateZ: -16,
    scale: 0.88,
    opacity: 0.7,
    duration: 0.28,
    ease: 'power2.out'
  }, 0.4);
  
  tl.to(shellRight, {
    x: '45%',
    y: '4%',
    rotateZ: 14,
    scale: 0.88,
    opacity: 0.7,
    duration: 0.28,
    ease: 'power2.out'
  }, 0.4);
  
  // ── PHASE 04: Kernel Emergence (45% - 75%) ──────────────
  tl.to(kernel, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.25,
    ease: 'power2.out'
  }, 0.45);
  
  if (glow) {
    tl.to(glow, {
      opacity: 0.8,
      scale: 1.15,
      duration: 0.25,
      ease: 'sine.out'
    }, 0.48);
  }
  
  tl.fromTo(phaseText3,
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 0.52
  );
  
  // ── PHASE 05: Shell Halves Clear Scene (68% - 88%) ─────
  tl.to(shellLeft, {
    x: '-75%',
    rotateZ: -25,
    opacity: 0,
    scale: 0.7,
    duration: 0.2,
    ease: 'power2.in'
  }, 0.68);
  
  tl.to(shellRight, {
    x: '75%',
    rotateZ: 22,
    opacity: 0,
    scale: 0.7,
    duration: 0.2,
    ease: 'power2.in'
  }, 0.68);
  
  // ── PHASE 06: Kernel Settles (75% - 100%) ──────────────
  tl.to(kernel, {
    scale: 1.05,
    duration: 0.15,
    ease: 'sine.out'
  }, 0.75);
  
  tl.to(phaseText3, {
    opacity: 0,
    duration: 0.1,
    ease: 'power1.in'
  }, 0.82);
  
  tl.to(kernel, {
    scale: 0.95,
    opacity: 0.85,
    y: -20,
    duration: 0.15,
    ease: 'power2.inOut'
  }, 0.85);
  
  // Refresh on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  });
}

