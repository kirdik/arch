document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('img');

  document.querySelectorAll('.gallery > img').forEach(img => {
    const alt = img.getAttribute('alt');
    const gallery = img.parentElement;

    // --- создаём figure ---
    const figure = document.createElement('figure');

    // вставляем figure перед img
    gallery.insertBefore(figure, img);

    // переносим img внутрь figure
    figure.appendChild(img);

    // подпись
    if (alt) {
      const caption = document.createElement('figcaption');
      caption.textContent = alt;
      figure.appendChild(caption);
    }

    // --- лайтбокс ---
    img.addEventListener('click', e => {
      e.preventDefault();
      if (!lightbox || !lightboxImg) return;

      lightboxImg.src = img.src;
      lightboxImg.alt = alt || '';
      lightbox.style.display = 'flex';
    });
  });

  // закрытие лайтбокса
  lightbox?.addEventListener('click', () => {
    lightbox.style.display = 'none';
    if (lightboxImg) lightboxImg.src = '';
  });
});
