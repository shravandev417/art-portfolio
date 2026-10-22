const track = document.querySelector('.track');
const slides = Array.from(document.querySelectorAll('.work'));
const prevBtn = document.querySelector('.arrow.prev');
const nextBtn = document.querySelector('.arrow.next');
const currentEl = document.getElementById('current');

document.getElementById('total').textContent = slides.length;
nextBtn.classList.add('nudge');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function currentIndex() {
  if (!track.clientWidth) return 0;
  return Math.round(track.scrollLeft / track.clientWidth);
}

function goTo(i) {
  const index = Math.max(0, Math.min(slides.length - 1, i));
  track.scrollTo({ left: index * track.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' });
}

function updateUi() {
  const i = currentIndex();
  currentEl.textContent = i + 1;
  prevBtn.hidden = i === 0;
  nextBtn.hidden = i === slides.length - 1;
  if (i > 0) nextBtn.classList.remove('nudge');
}

track.addEventListener('scroll', updateUi, { passive: true });
window.addEventListener('resize', () => { goTo(currentIndex()); updateUi(); });
window.addEventListener('load', updateUi);

prevBtn.addEventListener('click', () => goTo(currentIndex() - 1));
nextBtn.addEventListener('click', () => goTo(currentIndex() + 1));

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'PageDown') goTo(currentIndex() + 1);
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') goTo(currentIndex() - 1);
  if (e.key === 'Home') goTo(0);
  if (e.key === 'End') goTo(slides.length - 1);
});

// Mouse wheels only scroll vertically, so turn one wheel notch into one slide step.
// Trackpad sideways swipes already scroll the track natively and are left alone.
let wheelLocked = false;
track.addEventListener('wheel', (e) => {
  if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
  e.preventDefault();
  if (wheelLocked) return;
  wheelLocked = true;
  goTo(currentIndex() + (e.deltaY > 0 ? 1 : -1));
  setTimeout(() => { wheelLocked = false; }, 650);
}, { passive: false });

updateUi();
