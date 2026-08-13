/*
  Add your artwork here. For each piece:
  - category: 'traditional', 'digital', '3d-modeling', or 'unfinished'
  - title: name of the piece (these are placeholder titles — rename them!)
  - medium: short description shown under the title
  - file: path to the image, matching a file in the matching images/ subfolder

  Drop your image files into the matching folder and add/remove/reorder
  entries here to match. Cards with a missing image will show a dashed
  placeholder telling you which file to add. Delete any entry for artwork
  you don't want to keep.
*/
const artworks = [
  { category: "traditional", title: "Traditional 1", medium: "Traditional", file: "images/traditional/0E2A51CA-4BA0-4C7F-B465-DB70530B39D0_1_105_c.jpeg" },
  { category: "traditional", title: "Traditional 2", medium: "Traditional", file: "images/traditional/1EE624D6-E2F1-47DD-A067-863D7E13BDD7_1_105_c.jpeg" },
  { category: "traditional", title: "Traditional 3", medium: "Traditional", file: "images/traditional/3A92942E-303F-42BB-BB02-DC0030119DB2_1_105_c.jpeg" },
  { category: "traditional", title: "Traditional 4", medium: "Traditional", file: "images/traditional/3E427E2F-795D-4B09-AB97-D94442DD03C4_1_105_c.jpeg" },
  { category: "traditional", title: "Traditional 5", medium: "Traditional", file: "images/traditional/4096ED5F-D3E3-495F-9F23-984CD31FD0B2_1_105_c.jpeg" },
  { category: "traditional", title: "Traditional 6", medium: "Traditional", file: "images/traditional/46223461-AEF5-419D-9C02-1C6DB40A50F5_1_105_c.jpeg" },
  { category: "traditional", title: "Traditional 7", medium: "Traditional", file: "images/traditional/4BCC508B-AF61-4E8D-81B4-D5931C27A9E5_1_105_c.jpeg" },
  { category: "traditional", title: "Traditional 8", medium: "Traditional", file: "images/traditional/88FE0460-3F41-4C76-B325-E010B2EE1B31_1_102_a.jpeg" },
  { category: "traditional", title: "Traditional 9", medium: "Traditional", file: "images/traditional/8A6E0689-1EF9-4F31-B9A5-410EF2F60A86_1_105_c.jpeg" },
  { category: "traditional", title: "Traditional 10", medium: "Traditional", file: "images/traditional/F94CE03F-0779-41AA-9DCB-0D896D5B4EF1_1_105_c.jpeg" },
  { category: "traditional", title: "Traditional 11", medium: "Traditional", file: "images/traditional/traditional-01.jpg" },
  { category: "traditional", title: "Traditional 12", medium: "Traditional", file: "images/traditional/traditional-02.jpg" },
  { category: "traditional", title: "Traditional 13", medium: "Traditional", file: "images/traditional/traditional-03.jpg" },
  { category: "traditional", title: "Traditional 14", medium: "Traditional", file: "images/traditional/traditional-04.jpg" },
  { category: "traditional", title: "Traditional 15", medium: "Traditional", file: "images/traditional/traditional-05.jpg" },
  { category: "traditional", title: "Traditional 16", medium: "Traditional", file: "images/traditional/traditional-06.jpg" },
  { category: "traditional", title: "Traditional 17", medium: "Traditional", file: "images/traditional/traditional-07.jpg" },
  { category: "traditional", title: "Traditional 18", medium: "Traditional", file: "images/traditional/traditional-08.jpg" },
  { category: "traditional", title: "Traditional 19", medium: "Traditional", file: "images/traditional/traditional-09.jpg" },
  { category: "traditional", title: "Traditional 20", medium: "Traditional", file: "images/traditional/traditional-10.jpg" },
  { category: "traditional", title: "Traditional 21", medium: "Traditional", file: "images/traditional/traditional-11.jpg" },
  { category: "traditional", title: "Traditional 22", medium: "Traditional", file: "images/traditional/traditional-12.jpg" },
  { category: "traditional", title: "Traditional 23", medium: "Traditional", file: "images/traditional/traditional-13.jpg" },
  { category: "traditional", title: "Traditional 24", medium: "Traditional", file: "images/traditional/traditional-14.jpg" },
  { category: "traditional", title: "Traditional 25", medium: "Traditional", file: "images/traditional/traditional-15.jpg" },
  { category: "traditional", title: "Traditional 26", medium: "Traditional", file: "images/traditional/traditional-16.jpg" },
  { category: "traditional", title: "Traditional 27", medium: "Traditional", file: "images/traditional/traditional-17.jpg" },
  { category: "traditional", title: "Traditional 28", medium: "Traditional", file: "images/traditional/traditional-18.jpg" },
  { category: "traditional", title: "Traditional 29", medium: "Traditional", file: "images/traditional/traditional-19.jpg" },
  { category: "traditional", title: "Traditional 30", medium: "Traditional", file: "images/traditional/traditional-20.jpg" },
  { category: "traditional", title: "Traditional 31", medium: "Traditional", file: "images/traditional/traditional-21.jpg" },
  { category: "traditional", title: "Traditional 32", medium: "Traditional", file: "images/traditional/traditional-22.jpg" },
  { category: "traditional", title: "Traditional 33", medium: "Traditional", file: "images/traditional/traditional-23.jpg" },
  { category: "traditional", title: "Traditional 34", medium: "Traditional", file: "images/traditional/traditional-24.jpg" },
  { category: "traditional", title: "Traditional 35", medium: "Traditional", file: "images/traditional/traditional-25.jpg" },
  { category: "traditional", title: "Traditional 36", medium: "Traditional", file: "images/traditional/traditional-26.jpg" },
  { category: "traditional", title: "Traditional 37", medium: "Traditional", file: "images/traditional/traditional-27.jpg" },
  { category: "traditional", title: "Traditional 38", medium: "Traditional", file: "images/traditional/traditional-28.jpg" },
  { category: "traditional", title: "Traditional 39", medium: "Traditional", file: "images/traditional/traditional-29.jpg" },
  { category: "traditional", title: "Traditional 40", medium: "Traditional", file: "images/traditional/traditional-30.jpg" },
  { category: "traditional", title: "Traditional 41", medium: "Traditional", file: "images/traditional/traditional-31.jpg" },
  { category: "digital", title: "Digital 1", medium: "Digital illustration", file: "images/digital/digital-01.jpg" },
  { category: "digital", title: "Digital 2", medium: "Digital illustration", file: "images/digital/digital-02.jpg" },
  { category: "digital", title: "Digital 3", medium: "Digital illustration", file: "images/digital/digital-03.jpg" },
  { category: "digital", title: "Digital 4", medium: "Digital illustration", file: "images/digital/digital-04.jpg" },
  { category: "digital", title: "Digital 5", medium: "Digital illustration", file: "images/digital/digital-05.jpg" },
  { category: "digital", title: "Digital 6", medium: "Digital illustration", file: "images/digital/digital-06.jpg" },
  { category: "3d-modeling", title: "3D Render 1", medium: "3D Render — Blender", file: "images/3d-modeling/3d-01.jpg" },
  { category: "3d-modeling", title: "3D Render 2", medium: "3D Render — Blender", file: "images/3d-modeling/3d-02.jpg" },
  { category: "3d-modeling", title: "3D Render 3", medium: "3D Render — Blender", file: "images/3d-modeling/3d-03.jpg" },
  { category: "3d-modeling", title: "3D Render 4", medium: "3D Render — Blender", file: "images/3d-modeling/3d-04.jpg" },
  { category: "unfinished", title: "Unfinished 1", medium: "Work in progress", file: "images/unfinished/unfinished-01.jpg" },
  { category: "unfinished", title: "Unfinished 2", medium: "Work in progress", file: "images/unfinished/unfinished-02.jpg" },
  { category: "unfinished", title: "Unfinished 3", medium: "Work in progress", file: "images/unfinished/unfinished-03.jpg" },
  { category: "unfinished", title: "Unfinished 4", medium: "Work in progress", file: "images/unfinished/unfinished-04.jpg" },
  { category: "unfinished", title: "Unfinished 5", medium: "Work in progress", file: "images/unfinished/unfinished-05.jpg" },
  { category: "unfinished", title: "Unfinished 6", medium: "Work in progress", file: "images/unfinished/unfinished-06.jpg" },
  { category: "unfinished", title: "Unfinished 7", medium: "Work in progress", file: "images/unfinished/unfinished-07.jpg" },
];

const gallery = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

let currentIndex = 0;

function renderGallery() {
  gallery.innerHTML = '';
  artworks.forEach((art, i) => {
    const card = document.createElement('figure');
    card.className = 'art-card';
    card.dataset.category = art.category;
    card.dataset.index = i;

    card.innerHTML = `
      <div class="art-image-wrap">
        <div class="placeholder-label">${art.file}</div>
        <img src="${art.file}" alt="${art.title}" loading="lazy"
             onerror="this.style.display='none'">
      </div>
      <figcaption>
        <h3>${art.title}</h3>
        <p class="meta">${art.medium}</p>
      </figcaption>
    `;

    card.addEventListener('click', () => openLightbox(i));
    gallery.appendChild(card);
  });
}

function applyFilter(filter) {
  document.querySelectorAll('.art-card').forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('hidden', !match);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function updateLightbox() {
  const art = artworks[currentIndex];
  lightboxImg.src = art.file;
  lightboxImg.alt = art.title;
  lightboxCaption.textContent = `${art.title} — ${art.medium}`;
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

function showNext() {
  currentIndex = (currentIndex + 1) % artworks.length;
  updateLightbox();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
  updateLightbox();
}

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-next').addEventListener('click', showNext);
document.querySelector('.lightbox-prev').addEventListener('click', showPrev);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});

renderGallery();
