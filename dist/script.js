'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
menu.addEventListener('click', () => {
  const isOpen = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    menu.focus();
  }
});
const form = document.getElementById('inquiry-form');
const draftPanel = document.getElementById('draft-panel');
const draftText = document.getElementById('draft-text');
const copyStatus = document.getElementById('copy-status');
document.querySelectorAll('[data-topic]').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('topic').value = link.dataset.topic;
  });
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const name = String(values.get('name')).trim();
  const trailer = String(values.get('trailer')).trim();
  const question = String(values.get('message')).trim();
  const topic = String(values.get('topic'));
  if (!name || !question) return;
  const text = `Hi Tony,\n\n${question}${trailer ? `\n\nMy trailer and what I haul: ${trailer}` : ''}\n\nThanks,\n${name}`;
  draftText.value = text;
  document.getElementById('open-email').href = `mailto:tonyboyett@gmail.com?subject=${encodeURIComponent('ChainSaf inquiry: ' + topic)}&body=${encodeURIComponent(text)}`;
  copyStatus.textContent = '';
  form.hidden = true;
  draftPanel.hidden = false;
  draftPanel.focus({preventScroll:true});
});
document.getElementById('edit-inquiry').addEventListener('click', () => {
  draftPanel.hidden = true;
  form.hidden = false;
  document.getElementById('message').focus({preventScroll:true});
});
document.getElementById('copy-inquiry').addEventListener('click', async () => {
  try {
    if (!navigator.clipboard) throw new Error('Clipboard not available');
    await navigator.clipboard.writeText(draftText.value);
    copyStatus.textContent = 'Message copied. Paste it into your email app.';
  } catch {
    draftText.focus();
    draftText.select();
    copyStatus.textContent = 'Select and copy the highlighted message to use it in your email app.';
  }
});
const videoDialog = document.getElementById('video-dialog');
const videoFrame = document.getElementById('video-frame');
document.getElementById('watch-video').addEventListener('click', () => {
  videoDialog.showModal();
  const iframe = document.createElement('iframe');
  iframe.title = 'ChainSaf how-to-use product demonstration';
  iframe.src = 'https://player.vimeo.com/video/1164815942?autoplay=1&dnt=1';
  iframe.allow = 'autoplay; fullscreen; picture-in-picture';
  iframe.allowFullscreen = true;
  videoFrame.replaceChildren(iframe);
});
document.getElementById('close-video').addEventListener('click', () => videoDialog.close());
videoDialog.addEventListener('close', () => videoFrame.replaceChildren());
videoDialog.addEventListener('click', (event) => {
  if (event.target !== videoDialog) return;
  const rect = videoDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) videoDialog.close();
});
