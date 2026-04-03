document.addEventListener('DOMContentLoaded', () => {

  // 1. Scroll Effect สำหรับ Navbar
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav?.classList.add('scrolled');
    else nav?.classList.remove('scrolled');
  });

  // 2. ระบบ Mobile Menu (Hamburger)
  const burger = document.getElementById('burger');
  const navLinksContainer = document.getElementById('nav-links');

  if (burger && navLinksContainer) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });
  }

  // 3. ระบบสลับหน้า (Page Switching)
  const navLinks = document.querySelectorAll('.nav__link');
  const pages = document.querySelectorAll('.page');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); 
      const targetId = link.getAttribute('data-page');

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      pages.forEach(p => {
        p.classList.remove('active');
        if (p.id === targetId) p.classList.add('active');
      });
      
      burger?.classList.remove('active');
      navLinksContainer?.classList.remove('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // 4. ระบบ Filter สินค้าหน้า Market
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.mini-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-cat');
      items.forEach(item => {
        if (cat === 'all' || item.getAttribute('data-cat') === cat) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });



});