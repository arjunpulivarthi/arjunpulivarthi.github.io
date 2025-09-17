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
// ============================
// Shuffling deck for Experience
// ============================
(function initShuffleDeck(selector = '#expDeck'){
  const deck = document.querySelector(selector);
  if (!deck) return;
  let cards = [...deck.querySelectorAll('.card')];
  if (cards.length <= 1) return;

  const prevBtn = deck.querySelector('.deck-prev');
  const nextBtn = deck.querySelector('.deck-next');

  // Layout cards in a stacked "deck"
  function layout(activeIndex = idx){
    // set deck height to tallest card to avoid layout jump
    const H = Math.max(...cards.map(c => (c.style.transform='', c.offsetHeight)));
    deck.style.height = H + 'px';

    cards.forEach((card, i) => {
      const order = (i - activeIndex + cards.length) % cards.length; // 0 = top
      const clamped = Math.min(order, 2); // show top 3 layers
      const y = clamped * 14;             // stagger
      const scale = 1 - clamped * 0.04;   // slight depth
      const opacity = order > 2 ? 0 : 1 - clamped * 0.12;
      card.style.zIndex = 100 - order;
      card.style.opacity = opacity;
      card.style.transform = `translate(-50%, ${y}px) scale(${scale})`;
    });
  }

  let idx = 0;
  function next(){
    const top = cards[idx];
    // animate top out, then re-layout
    top.style.transform = `translate(calc(-50% - 120%), -10px) rotate(-2deg) scale(0.98)`;
    top.style.opacity = 0;
    top.addEventListener('transitionend', () => {
      idx = (idx + 1) % cards.length;
      layout();
    }, { once: true });
  }
  function prev(){
    // quickly set previous as "leaving from left" then layout
    idx = (idx - 1 + cards.length) % cards.length;
    const top = cards[idx];
    top.style.transform = `translate(calc(-50% + 120%), -10px) rotate(2deg) scale(0.98)`;
    top.style.opacity = 0;
    requestAnimationFrame(() => requestAnimationFrame(layout));
  }

  // Events
  deck.addEventListener('click', (e) => {
    // click on empty space or card advances
    if (!e.target.closest('.deck-btn')) next();
  });
  nextBtn && nextBtn.addEventListener('click', (e)=>{ e.stopPropagation(); next(); });
  prevBtn && prevBtn.addEventListener('click', (e)=>{ e.stopPropagation(); prev(); });

  // Keyboard (arrow keys)
  deck.setAttribute('tabindex', '0');
  deck.addEventListener('keydown', (e)=>{
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  // Touch swipe
  let startX = null, startY = null;
  deck.addEventListener('touchstart', (e)=>{
    const t = e.changedTouches[0];
    startX = t.clientX; startY = t.clientY;
  }, {passive:true});
  deck.addEventListener('touchend', (e)=>{
    if (startX === null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - startX, dy = t.clientY - startY;
    if (Math.abs(dx) > 28 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev();
    }
    startX = startY = null;
  }, {passive:true});

  // Recompute on resize (card heights can change)
  window.addEventListener('resize', () => layout(), { passive:true });

  // Initial paint
  layout();
})();
