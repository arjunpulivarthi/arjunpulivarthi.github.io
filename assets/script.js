// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('#navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', ()=> menu.classList.remove('open'));
  });
}

// Scroll reveal for any .fade-in (already in your HTML on sections)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('scroll-visible'); io.unobserve(e.target); }
  });
},{threshold:0.12});
document.querySelectorAll('.fade-in').forEach(el=>io.observe(el));

// Header appears only after leaving hero (fixed; no layout gap/black bar)
const headerEl = document.querySelector('.site-header');
const heroEl = document.querySelector('#hero');
if (headerEl && heroEl) {
  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) headerEl.classList.add('visible');
      else headerEl.classList.remove('visible');
    });
  }, { rootMargin: '-20% 0px 0px 0px', threshold: 0 });
  headerObserver.observe(heroEl);
}

// Cursor glow → update CSS vars --mx / --my for ambient light
document.addEventListener('pointermove', (e)=>{
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--mx', x+'%');
  document.documentElement.style.setProperty('--my', y+'%');
});

// Parallax hero (lightweight rAF)
const titleEl = document.querySelector('.hero__title');
const tagEl = document.querySelector('.hero__tag');
let ticking = false;
function onScroll() {
  const y = window.scrollY || window.pageYOffset;
  const p = Math.min(y / 420, 1); // progress 0→1 over first ~420px
  if (titleEl){
    titleEl.style.transform = `translateY(${p * -12}px) scale(${1 - p*0.02})`;
    titleEl.style.opacity = String(1 - p*0.25);
  }
  if (tagEl){
    tagEl.style.transform = `translateY(${p * -8}px)`;
    tagEl.style.opacity = String(1 - p*0.35);
  }
  ticking = false;
}
window.addEventListener('scroll', ()=>{
  if (!ticking){ requestAnimationFrame(onScroll); ticking = true; }
});
onScroll();

// Add staggered reveal to cards automatically (no HTML change)
document.querySelectorAll('.cards').forEach(group=>{
  [...group.children].forEach((card,i)=>{
    card.classList.add('fade-in');
    card.style.setProperty('--delay', `${i * 90}ms`);
    io.observe(card);
  });
});
