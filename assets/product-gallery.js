/**
 * LU Scents — product gallery
 * Tap-to-zoom on any gallery image (macro/detail shots benefit most).
 * No lightbox, no library: toggles object-fit so the whole image comes
 * into view within the same frame.
 */
(function () {
  var gallery = document.querySelector('[data-product-gallery]');
  if (!gallery) return;

  gallery.addEventListener('click', function (event) {
    var item = event.target.closest('[data-gallery-item]');
    if (!item) return;
    item.classList.toggle('is-zoomed');
  });
})();
