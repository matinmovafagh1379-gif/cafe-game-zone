// mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
}

scroll reveal via IntersectionObserver (more efficient than scroll events)
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// count-up stats
const counters = document.querySelectorAll('[data-count]');
const countIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.max(1, Math.round(target / 60));
      const tick = () => {
        current += step;
        if (current >= target) { el.textContent = target.toLocaleString(); return; }
        el.textContent = current.toLocaleString();
        requestAnimationFrame(tick);
      };
      tick();
      countIo.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(el => countIo.observe(el));

// smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth'});
    navLinks && navLinks.classList.remove('active');
  });
});
