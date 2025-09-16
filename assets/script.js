function toggleMenu(){
  const nav = document.getElementById('nav');
  const isOpen = getComputedStyle(nav).display !== 'none';
  nav.style.display = isOpen ? 'none' : 'flex';
}
document.getElementById('year').textContent = new Date().getFullYear();
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});
