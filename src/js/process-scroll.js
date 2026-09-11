/* ============================================================
   ADITYA NUTS — Process Horizontal Scroll
   ============================================================
   On desktop (>768px), creates a horizontal scroll effect
   for the process cards using GSAP ScrollTrigger.
   On mobile, cards stack vertically naturally.
   ============================================================ */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initProcessScroll() {
  // Only apply horizontal scroll on desktop
  const mm = gsap.matchMedia();
  
  mm.add('(min-width: 769px)', () => {
    const track = document.querySelector('.process__track');
    const wrapper = document.querySelector('.process__track-wrapper');
    
    if (!track || !wrapper) return;
    
    // Calculate how much to scroll horizontally
    const getScrollAmount = () => {
      return track.scrollWidth - wrapper.clientWidth;
    };
    
    const tween = gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 30%',
        end: () => `+=${getScrollAmount()}`,
        scrub: 0.8,
        invalidateOnRefresh: true,
      }
    });
    
    // Return cleanup function
    return () => {
      tween.kill();
    };
  });
}
