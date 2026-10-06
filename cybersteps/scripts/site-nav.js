const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-menu');
function updateHeader() { header?.classList.toggle('scrolled', window.scrollY > 8); }
function setMenu(open) { if (!toggle || !menu) return; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く'); menu.hidden = !open; }
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
window.addEventListener('scroll', updateHeader, { passive: true }); updateHeader();

document.querySelectorAll('.application-cta').forEach((cta) => {
  const show = () => cta.classList.add('is-tooltip-visible');
  const hide = () => cta.classList.remove('is-tooltip-visible');
  cta.addEventListener('pointerenter', show);
  cta.addEventListener('pointerleave', hide);
  cta.addEventListener('focus', show);
  cta.addEventListener('blur', hide);
});

const categoryRail = document.querySelector('.category-rail');
const categoryCards = categoryRail ? [...categoryRail.querySelectorAll('.category-card')] : [];
const categoryProgress = document.querySelector('[data-category-progress]');
const categoryPrev = document.querySelector('[data-category-prev]');
const categoryNext = document.querySelector('[data-category-next]');

if (categoryRail && categoryCards.length) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const updateCategoryProgress = () => {
    const current = Math.min(categoryCards.length, Math.max(1, Math.round(categoryRail.scrollLeft / Math.max(1, categoryCards[0].offsetWidth + 14)) + 1));
    if (categoryProgress) categoryProgress.textContent = `${String(current).padStart(2, '0')} / ${String(categoryCards.length).padStart(2, '0')}`;
  };
  const moveCategories = (direction) => categoryRail.scrollBy({ left: direction * (categoryCards[0].getBoundingClientRect().width + 14), behavior: reducedMotion ? 'auto' : 'smooth' });
  categoryPrev?.addEventListener('click', () => moveCategories(-1));
  categoryNext?.addEventListener('click', () => moveCategories(1));
  categoryRail.addEventListener('scroll', updateCategoryProgress, { passive: true });
  updateCategoryProgress();

  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { root: categoryRail, threshold: 0.2 });
    categoryCards.forEach((card) => observer.observe(card));
  } else categoryCards.forEach((card) => card.classList.add('is-visible'));

  if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
    categoryCards.forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.setProperty('--ry', `${(x * 5).toFixed(2)}deg`);
        card.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
      });
      card.addEventListener('pointerleave', () => { card.style.removeProperty('--rx'); card.style.removeProperty('--ry'); });
    });
  }
}
