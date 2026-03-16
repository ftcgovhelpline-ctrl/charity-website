function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'mission.html', label: 'Our Mission' },
    { href: 'stories.html', label: 'Stories' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'about.html', label: 'How It Works' },
    { href: 'donate.html', label: 'Donate' },
  ];

  const navHTML = `
  <nav id="mainNav">
    <a href="index.html" class="nav-logo">Hope <span>for</span> the Children</a>
    <ul class="nav-links" id="navLinks">
      ${pages.map(p => `<li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>`).join('')}
    </ul>
    <div class="nav-right">
      <a href="donate.html" class="nav-cta">Donate Now</a>
      <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <div class="dropdown-menu" id="dropdownMenu">
    <div class="dropdown-inner">
      ${pages.map(p => `<a href="${p.href}" class="dropdown-link ${activePage === p.href ? 'active' : ''}">${p.label}</a>`).join('')}
      <a href="donate.html" class="dropdown-cta">Donate Now →</a>
    </div>
  </div>
  <div class="dropdown-overlay" id="dropdownOverlay" onclick="toggleMenu()"></div>
  `;

  document.getElementById('navContainer').innerHTML = navHTML;
}

function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('dropdownOverlay');
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.classList.toggle('menu-open');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('dropdownMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('dropdownOverlay').classList.remove('open');
    document.body.classList.remove('menu-open');
  }
});
