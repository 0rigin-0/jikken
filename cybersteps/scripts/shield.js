const shield = document.querySelector('.defense-core');
shield?.addEventListener('click', () => {
  shield.classList.remove('is-spinning');
  requestAnimationFrame(() => shield.classList.add('is-spinning'));
  window.setTimeout(() => shield.classList.remove('is-spinning'), 900);
});
