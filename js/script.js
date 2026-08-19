const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.header nav');

if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

/* =========================================================
   PORTFOLIO
   Para añadir una fotografía:
   1. Mete el JPG en la carpeta de su categoría.
   2. Añade su nombre aquí.
   Ejemplo: "04.jpg"
   ========================================================= */

const portfolio = {
  bodas: [
     "01.jpg",
     "02.jpg",
     "03.jpg",
  ],

  familias: [
    // "01.jpg",
    // "02.jpg",
  ],

  sesiones: [
     "01.jpg",
     "02.jpg",
  ],

  premama: [
    // "01.jpg",
  ],

  comuniones: [
     "01.jpg",
  ]
};

const categoryNames = {
  bodas: 'Bodas',
  familias: 'Familias',
  sesiones: 'Sesiones',
  premama: 'Premamá',
  comuniones: 'Comuniones'
};

const gallery = document.querySelector('#portfolio-gallery');

if (gallery) {
  let activeFilter = 'all';
  let visiblePhotos = [];
  let currentIndex = 0;

  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCategory = document.querySelector('#lightbox-category');
  const lightboxCounter = document.querySelector('#lightbox-counter');

  function getPhotos(filter = 'all') {
    const result = [];

    Object.entries(portfolio).forEach(([category, files]) => {
      if (filter !== 'all' && category !== filter) return;

      files.forEach(file => {
        result.push({
          category,
          file,
          src: `images/portfolio/${category}/${file}`
        });
      });
    });

    return result;
  }

  function renderGallery() {
    visiblePhotos = getPhotos(activeFilter);

    gallery.innerHTML = '';

    if (!visiblePhotos.length) {
      gallery.innerHTML = `
        <div class="gallery-empty">
          <p>Aquí aparecerán próximamente nuevas historias.</p>
        </div>
      `;
      return;
    }

    visiblePhotos.forEach((photo, index) => {
      const button = document.createElement('button');
      button.className = 'gallery-item';
      button.type = 'button';
      button.dataset.index = index;
      button.dataset.category = photo.category;
      button.innerHTML = `
        <img src="${photo.src}" alt="${categoryNames[photo.category]}" loading="lazy">
      `;

      button.addEventListener('click', () => openLightbox(index));
      gallery.appendChild(button);
    });
  }

  function openLightbox(index) {
    if (!visiblePhotos.length) return;

    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    lightboxImage.src = '';
  }

  function updateLightbox() {
    const photo = visiblePhotos[currentIndex];
    lightboxImage.src = photo.src;
    lightboxImage.alt = categoryNames[photo.category];
    lightboxCategory.textContent = categoryNames[photo.category];
    lightboxCounter.textContent = `${currentIndex + 1} / ${visiblePhotos.length}`;
  }

  function previousPhoto() {
    if (!visiblePhotos.length) return;
    currentIndex = (currentIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
    updateLightbox();
  }

  function nextPhoto() {
    if (!visiblePhotos.length) return;
    currentIndex = (currentIndex + 1) % visiblePhotos.length;
    updateLightbox();
  }

  document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      activeFilter = button.dataset.filter;
      renderGallery();
    });
  });

  document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  document.querySelector('.lightbox-prev').addEventListener('click', previousPhoto);
  document.querySelector('.lightbox-next').addEventListener('click', nextPhoto);

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', event => {
    if (!lightbox.classList.contains('is-open')) return;

    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') previousPhoto();
    if (event.key === 'ArrowRight') nextPhoto();
  });

  renderGallery();
}
