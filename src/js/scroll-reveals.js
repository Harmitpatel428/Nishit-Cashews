/* ============================================================
   ADITYA NUTS — Scroll Reveals
   ============================================================ */

export function initScrollReveals(prefersReducedMotion = false) {
  if (prefersReducedMotion) {
    // Make everything visible immediately
    document.querySelectorAll('.reveal, .text-reveal, .line-draw, .fade-in, .img-reveal').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  // Use Intersection Observer for performant scroll detection
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Unobserve after revealing (one-time animation)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all revealable elements
  const revealElements = document.querySelectorAll(
    '.reveal, .text-reveal, .line-draw, .fade-in, .img-reveal, .counter-line'
  );

  revealElements.forEach(el => {
    observer.observe(el);
  });
}
