/**
 * LU Scents — world switch
 * Persists the visitor's chosen world (cream/dark) across pages via
 * localStorage, unless the current template forces a world (a product's
 * own world always wins on its own PDP — lu.world metafield).
 * Kept deliberately tiny: no framework, no dependency.
 */
(function () {
  var STORAGE_KEY = 'lu-world';
  var body = document.body;
  var forced = body.getAttribute('data-force-world');

  function apply(world) {
    body.classList.remove('world-cream', 'world-dark');
    body.classList.add('world-' + world);
    body.setAttribute('data-world', world);
    document.querySelectorAll('[data-world-switch]').forEach(function (btn) {
      var label = btn.querySelector('[data-world-switch-label]');
      var next = world === 'cream' ? 'dark' : 'cream';
      btn.setAttribute('aria-pressed', String(world === 'dark'));
      if (label) {
        label.textContent = next === 'dark' ? 'Enter Masc' : 'Enter Blossom';
      }
    });
  }

  var stored;
  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    stored = null;
  }

  apply(forced || stored || body.getAttribute('data-default-world') || 'cream');

  document.addEventListener('click', function (event) {
    var btn = event.target.closest('[data-world-switch]');
    if (!btn) return;
    var current = body.getAttribute('data-world');
    var next = current === 'cream' ? 'dark' : 'cream';
    apply(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      /* private mode / storage blocked — world just won't persist */
    }
  });
})();
