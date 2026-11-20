(() => {
  'use strict';
  const root = document.documentElement;
  const header = document.getElementById('site-header');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  const themeButton = document.getElementById('theme-toggle');
  const backToTop = document.getElementById('back-to-top');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  function setTheme(theme) {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(theme === 'light'));
    themeButton.setAttribute('aria-label', theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f5f7f5' : '#0c1420');
    try { localStorage.setItem('dm-portfolio-theme', theme); } catch (e) { /* navegador sem armazenamento */ }
  }
  let preferredTheme = 'dark';
  try { preferredTheme = localStorage.getItem('dm-portfolio-theme') || 'dark'; } catch (e) { /* sem armazenamento */ }
  setTheme(preferredTheme === 'light' ? 'light' : 'dark');
  themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  function setMenu(open) {
    const isOpen = Boolean(open);
    nav.classList.toggle('is-open', isOpen);
    menuButton.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', isOpen);
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
  document.addEventListener('click', (event) => { if (!header.contains(event.target)) setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); });

  function updateScroll() {
    const scrolled = window.scrollY > 24;
    header.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('is-visible', window.scrollY > 650);
  }
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          nav.querySelectorAll('a').forEach(link => {
            const active = link.hash === '#' + entry.target.id;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-32% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));
  }
})();
