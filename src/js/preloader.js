/* ============================================================
   ADITYA NUTS — Preloader
   ============================================================ */

export function initPreloader(onComplete) {
  const preloader = document.getElementById('preloader');
  const body = document.body;
  
  if (!preloader) {
    body.classList.remove('is-loading');
    if (onComplete) onComplete();
    return;
  }

  // Fast preloader — max 1.2s, skip on cached visits
  const minDuration = 800;
  const maxDuration = 1200;
  const startTime = performance.now();

  function hidePreloader() {
    const elapsed = performance.now() - startTime;
    const remaining = Math.max(0, minDuration - elapsed);

    setTimeout(() => {
      preloader.classList.add('is-hidden');
      body.classList.remove('is-loading');
      
      // Remove from DOM after transition
      preloader.addEventListener('transitionend', () => {
        preloader.remove();
      }, { once: true });
      
      if (onComplete) onComplete();
    }, remaining);
  }

  // Wait for critical resources or timeout
  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', hidePreloader, { once: true });
    
    // Safety timeout — never make users wait
    setTimeout(hidePreloader, maxDuration);
  }
}
