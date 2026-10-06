import { challenges } from '/data/challenges.js';
import { lessons } from '/data/learning.js';

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const dialog = document.querySelector('#challenge-modal');
const challengeContent = document.querySelector('#challenge-content');
const progressLabel = document.querySelector('#progress-label');
const progressBars = [...document.querySelectorAll('.modal-progress i')];
const closeModalButton = document.querySelector('.modal-close');
const lessonPanel = document.querySelector('#lesson-panel');
const defenseCore = document.querySelector('.defense-core');

let currentChallengeId = 1;

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 8);
}

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  mobileMenu.hidden = !open;
}

function getChallenge(id) {
  return challenges.find((challenge) => challenge.id === Number(id)) || challenges[0];
}

function difficultyStars(level) {
  return `${'★'.repeat(level)}${'☆'.repeat(5 - level)}`;
}

function renderChallenge(id) {
  const challenge = getChallenge(id);
  currentChallengeId = challenge.id;
  progressLabel.textContent = `PROBLEM ${String(challenge.id).padStart(2, '0')} / ${String(challenges.length).padStart(2, '0')}`;
  progressBars.forEach((bar, index) => bar.classList.toggle('is-active', index < challenge.id));

  challengeContent.innerHTML = `
    <div class="modal-badge"><span>${challenge.category.toUpperCase()}</span><strong>${difficultyStars(challenge.difficulty)} ${challenge.difficultyLabel}</strong></div>
    <h2 id="modal-title">${challenge.title}</h2>
    <p class="problem-text">${challenge.description}</p>
    <pre class="code-clue" aria-label="問題の手がかり"><code>${challenge.clue}</code></pre>
    <button class="hint-toggle" type="button" aria-expanded="false" aria-controls="hint-box">HINT を見る</button>
    <div class="hint-box" id="hint-box" hidden>${challenge.hint}</div>
    <form class="answer-form" novalidate>
      <label class="sr-only" for="flag-answer">Flagを入力</label>
      <input id="flag-answer" name="flag" type="text" autocomplete="off" spellcheck="false" placeholder="FLAG{...}" aria-describedby="answer-note" required />
      <button class="button button-primary" type="submit">SUBMIT <span aria-hidden="true">→</span></button>
    </form>
    <p id="answer-note" class="sr-only">答えはFlag形式で入力してください。入力内容は保存されません。</p>
    <div class="answer-result" aria-live="polite"></div>
  `;

  const hintToggle = challengeContent.querySelector('.hint-toggle');
  const hintBox = challengeContent.querySelector('.hint-box');
  const form = challengeContent.querySelector('.answer-form');
  const result = challengeContent.querySelector('.answer-result');

  hintToggle.addEventListener('click', () => {
    const expanded = hintToggle.getAttribute('aria-expanded') === 'true';
    hintToggle.setAttribute('aria-expanded', String(!expanded));
    hintToggle.textContent = expanded ? 'HINT を見る' : 'HINT を閉じる';
    hintBox.hidden = expanded;
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answer = form.elements.flag.value.trim();

    if (answer === challenge.answer) {
      const nextId = challenge.id < challenges.length ? challenge.id + 1 : null;
      const nextAction = nextId
        ? `<button class="button button-primary next-challenge" type="button" data-next-challenge="${nextId}">次の問題へ <span aria-hidden="true">→</span></button>`
        : '<button class="button button-primary next-challenge" type="button" data-close-challenge>学習ロードマップを見る <span aria-hidden="true">→</span></button>';

      result.innerHTML = `
        <section class="result-panel correct">
          <p class="result-title"><span class="result-check" aria-hidden="true">✓</span> CORRECT!</p>
          <p>解けた！ その発見が、次の問題を解くヒントになります。</p>
          <div class="explanation">
            <div><strong>ANSWER / EXPLANATION</strong><span>${challenge.explanation}</span></div>
            <div><strong>TAKEAWAY</strong><span>${challenge.takeaway}</span></div>
            <div><strong>TOOLS / KNOWLEDGE</strong><span>${challenge.tools}。 ${challenge.knowledge}</span></div>
          </div>
          ${nextAction}
        </section>
      `;
      form.querySelector('input').setAttribute('aria-invalid', 'false');
      result.querySelector('[data-next-challenge]')?.addEventListener('click', () => renderChallenge(nextId));
      result.querySelector('[data-close-challenge]')?.addEventListener('click', () => {
        dialog.close();
        const learn = document.querySelector('#learn');
        if (learn) learn.scrollIntoView({ behavior: 'smooth' });
        else window.location.href = '/beginner.html';
      });
    } else {
      result.innerHTML = `
        <section class="result-panel incorrect">
          <p class="result-title">INCORRECT</p>
          <p>もう一度考えてみよう。ヒントを見るのも、立派な次の一歩です。</p>
        </section>
      `;
      form.querySelector('input').setAttribute('aria-invalid', 'true');
    }
  });
}

function openChallenge(id = 1) {
  setMenu(false);
  renderChallenge(id);
  if (!dialog.open) {
    dialog.showModal();
  }
  window.setTimeout(() => document.querySelector('#flag-answer')?.focus(), 80);
}

function selectLesson(key) {
  const lesson = lessons[key] || lessons.basics;
  document.querySelectorAll('.roadmap-card').forEach((card) => {
    card.classList.toggle('active', card.dataset.lesson === key);
  });
  lessonPanel.innerHTML = `
    <div class="lesson-intro">
      <span class="lesson-chip">${lesson.level}</span>
      <p class="lesson-category">${lesson.category}</p>
      <h3>${lesson.title}</h3>
      <p>${lesson.intro}</p>
    </div>
    <div class="lesson-points">
      <div><span>01</span><h4>これは何？</h4><p>${lesson.what}</p></div>
      <div><span>02</span><h4>なぜ重要？</h4><p>${lesson.why}</p></div>
      <div><span>03</span><h4>次にやること</h4><button class="inline-link" type="button" data-open-challenge="${lesson.challengeId}">${lesson.action} <span aria-hidden="true">→</span></button></div>
    </div>
  `;
  lessonPanel.querySelector('[data-open-challenge]').addEventListener('click', (event) => {
    event.preventDefault();
    openChallenge(Number(event.currentTarget.dataset.openChallenge));
  });
}

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.querySelectorAll('[data-open-challenge]').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    openChallenge(Number(trigger.dataset.openChallenge));
  });
});

closeModalButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

defenseCore?.addEventListener('click', () => {
  defenseCore.classList.remove('is-spinning');
  requestAnimationFrame(() => defenseCore.classList.add('is-spinning'));
  window.setTimeout(() => defenseCore.classList.remove('is-spinning'), 900);
});

document.querySelectorAll('.roadmap-card').forEach((card) => {
  card.addEventListener('click', () => selectLesson(card.dataset.lesson));
});

document.querySelectorAll('[data-lesson-jump]').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.lessonJump;
    document.querySelector('#learn').scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => selectLesson(key), 350);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
