/* ============================================================
   ADITYA NUTS — Cashew Shell Opening Animation
   ============================================================
   The signature scroll interaction.
   
   Uses GSAP ScrollTrigger with scrub to create a physically
   believable shell separation driven by scroll position.
   
   Phases:
   1. Shell intact, subtle float
   2. Shell begins rotating
   3. Shell halves separate along natural crack
   4. Kernel revealed with scale + glow
   5. Phase text transitions
   6. Kernel becomes bridge to next section
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
  
  // Master timeline pinned to the opening section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      pin: false, // section already has sticky positioning
    }
  });
  
  // ── PHASE 01: The Shell (0% - 20%) ────────────────────
  // Shell is intact, subtle breathing/float
  tl.fromTo([shellLeft, shellRight], 
    { 
      scale: 0.9,
      rotation: 0 
    },
    { 
      scale: 1,
      rotation: 2,
      duration: 0.2,
      ease: 'none'
    }, 0
  );
  
  // Show phase 1 text
  tl.fromTo(phaseText1,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.02
  );
  tl.to(phaseText1,
    { opacity: 0, y: -15, duration: 0.08, ease: 'power2.in' }, 0.15
  );
  
  // ── PHASE 02: The Rotation (20% - 40%) ────────────────
  // Shell rotates, tension builds
  tl.to(shellLeft, {
    rotation: -5,
    x: -8,
    duration: 0.2,
    ease: 'none'
  }, 0.2);
  
  tl.to(shellRight, {
    rotation: 5,
    x: 8,
    duration: 0.2,
    ease: 'none'
  }, 0.2);
  
  // Show phase 2 text
  tl.fromTo(phaseText2,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.25
  );
  tl.to(phaseText2,
    { opacity: 0, y: -15, duration: 0.08, ease: 'power2.in' }, 0.38
  );
  
  // ── PHASE 03: The Separation (40% - 65%) ──────────────
  // Shell halves separate — the core interaction
  tl.to(shellLeft, {
    x: '-45%',
    rotation: -18,
    scale: 0.85,
    opacity: 0.6,
    duration: 0.25,
    ease: 'none'
  }, 0.4);
  
  tl.to(shellRight, {
    x: '45%',
    rotation: 18,
    scale: 0.85,
    opacity: 0.6,
    duration: 0.25,
    ease: 'none'
  }, 0.4);
  
  // ── PHASE 04: Kernel Reveal (50% - 75%) ───────────────
  tl.to(kernel, {
    opacity: 1,
    scale: 1,
    duration: 0.25,
    ease: 'none'
  }, 0.45);
  
  // Glow intensifies
  if (glow) {
    tl.to(glow, {
      opacity: 1,
      scale: 1.2,
      duration: 0.2,
      ease: 'none'
    }, 0.5);
  }
  
  // Show phase 3 text
  tl.fromTo(phaseText3,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }, 0.55
  );
  
  // ── PHASE 05: Shell fragments fade (65% - 85%) ────────
  tl.to(shellLeft, {
    x: '-80%',
    rotation: -30,
    opacity: 0,
    scale: 0.6,
    duration: 0.2,
    ease: 'none'
  }, 0.65);
  
  tl.to(shellRight, {
    x: '80%',
    rotation: 30,
    opacity: 0,
    scale: 0.6,
    duration: 0.2,
    ease: 'none'
  }, 0.65);
  
  // ── PHASE 06: Kernel hero moment (75% - 100%) ─────────
  tl.to(kernel, {
    scale: 1.15,
    duration: 0.25,
    ease: 'none'
  }, 0.75);
  
  // Fade phase 3 text
  tl.to(phaseText3, {
    opacity: 0,
    duration: 0.1,
    ease: 'none'
  }, 0.85);
  
  // Final: kernel settles
  tl.to(kernel, {
    scale: 1,
    opacity: 0.8,
    y: -30,
    duration: 0.15,
    ease: 'none'
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
