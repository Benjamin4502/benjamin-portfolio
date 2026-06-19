// Hamburger menu toggle
(function(){
  var btn = document.getElementById('hamburgerBtn');
  var menu = document.getElementById('navMenu');
  var overlay = document.getElementById('navOverlay');
  if (!btn || !menu || !overlay) return;

  function openMenu(){
    menu.classList.add('is-open');
    overlay.classList.add('is-open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
  }
  function closeMenu(){
    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  }
  btn.addEventListener('click', function(){
    if (menu.classList.contains('is-open')) closeMenu();
    else openMenu();
  });
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeMenu();
  });
})();

// Role-cycling typed line in hero (only on pages that have it)
(function(){
  var roles = ["Anglican Priest", "Web Developer", "Financial Educator", "Certified Writer"];
  var el = document.getElementById('roleCycle');
  if (!el) return;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;
  var i = 0;
  setInterval(function(){
    i = (i + 1) % roles.length;
    el.innerHTML = roles[i] + '<span class="cursor"></span>';
  }, 2400);
})();

// Scroll reveal
(function(){
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function(e){ e.classList.add('in'); });
    return;
  }
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function(e){ obs.observe(e); });
})();
