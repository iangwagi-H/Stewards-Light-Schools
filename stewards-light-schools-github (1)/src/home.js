const tiles = [
  { label: 'About', kicker: 'Our story', href: '/about', image: '/assets/img1.jpg', className: 'home-tile-feature', text: 'Faith, knowledge and character' },
  { label: 'Academics', kicker: 'The learning journey', href: '/academics', image: '/assets/img2.JPG', text: 'Learning with purpose' },
  { label: 'Activities', kicker: 'Beyond the classroom', href: '/about#experience', image: '/manus-storage/async-images/pKxKGI8f0OADwdRwberiQ7/image-3.webp', text: 'Room to grow' },
  { label: 'Admissions', kicker: 'Join our community', href: '/admissions', image: '/assets/placeholder2.jpg', text: 'The next chapter starts here' },
  { label: 'Support us', kicker: 'Share the mission', href: '/support', image: '/manus-storage/async-images/KQk8pzagnN2ei8ZQrppgcs/image-1.webp', text: 'Help the light shine' },
  { label: 'News', kicker: 'From our community', href: '/news', image: '/manus-storage/async-images/KQk8pzagnN2ei8ZQrppgcs/image-2.webp', text: 'Stories worth sharing' },
  { label: 'Contact', kicker: 'Come and meet us', href: '/contact', image: '/manus-storage/async-images/7D93UaeSd7C3hmIyArAwKB/image-2.webp', text: 'Let’s talk' }
];

const tileMarkup = (tile) => `<a class="home-tile ${tile.className || ''}" href="${tile.href}" aria-label="${tile.label}" style="--tile-image:url('${tile.image}')"><span class="home-tile-shade"></span><span class="home-tile-copy"><strong>${tile.label}</strong></span></a>`;

export function renderHomePage() {
  return `<div class="visual-home" id="top">
    <div class="topline"><div class="container topline-inner"><span class="topline-message"><span class="topline-dot"></span> Admissions open for the 2027 school year</span><div class="topline-links"><a href="tel:+254759908769">+254 759 908 769</a><a href="mailto:inquiries@stewardslightschools.org">inquiries@stewardslightschools.org</a></div></div></div>
    <header class="site-header home-header" id="site-header"><div class="container header-inner"><a class="brand" href="/" aria-label="Stewards Light Schools home"><img src="/assets/stewards-light-logo.png" alt="Stewards Light Schools" /></a><nav class="main-nav" id="main-nav" aria-label="Primary navigation"><a href="/about">About</a><a href="/academics">Academics</a><a href="/about#experience">Activities</a><a href="/admissions">Admissions</a><a href="/support">Support us</a><a href="/news">News</a><a class="nav-cta" href="/contact">Plan a visit</a></nav><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">☰</button></div></header>
    <main>
      <section class="home-tiles-section"><div class="container"><div class="home-tile-grid">${tiles.map(tileMarkup).join('')}</div></div></section>
    </main>
    <footer class="site-footer home-footer"><div class="container footer-main"><div class="footer-brand"><img src="/assets/stewards-light-logo.png" alt="Stewards Light Schools" /><p>Faith, knowledge and character for a life of purpose.</p></div><div class="footer-nav"><div><p class="footer-label">Visit</p><a href="/about">Our story</a><a href="/academics">Learning journey</a><a href="/contact">Contact</a></div><div><p class="footer-label">Connect</p><a href="/admissions">Admissions</a><a href="/support">Support us</a><a href="/news">News</a></div></div><div class="footer-contact"><p class="footer-label">Find us</p><p>Kapsabet–Chavakali Main Road<br />Kenya</p><a href="mailto:inquiries@stewardslightschools.org">inquiries@stewardslightschools.org</a></div></div><div class="container footer-bottom"><span>© <span id="year"></span> Stewards Light Schools</span><span>Guided by faith. Growing in knowledge.</span><a href="#top">Back to top</a></div></footer>
  </div>`;
}

export function setupHomePage() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
}
