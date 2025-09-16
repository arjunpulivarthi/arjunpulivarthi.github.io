// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('#navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Close on link click (mobile)
  menu.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', ()=> menu.classList.remove('open'));
  });
}

// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('scroll-visible'); io.unobserve(e.target); }
  });
},{threshold:0.12});
document.querySelectorAll('.fade-in').forEach(el=>io.observe(el));
