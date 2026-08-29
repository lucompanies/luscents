/**
 * LU Scents — scroll-triggered fade on product imagery (§2).
 * The only scroll animation on the site; respects reduced-motion by
 * simply doing nothing (the CSS fallback in base.css shows content
 * un-faded when the media query doesn't apply the transition).
 */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var targets = document.querySelectorAll('.fade-in-on-scroll');
  if (!targets.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
