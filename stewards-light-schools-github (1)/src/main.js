import './styles.css';
import { renderPage, setupRoutedPage } from './pages.js';
import { renderHomePage, setupHomePage } from './home.js';

const icon = (name, size = 24) => {
  const paths = {
    arrow: `<path d="M5 12h14M13 6l6 6-6 6"/>`,
    arrowUp: `<path d="M12 19V5m-6 6 6-6 6 6"/>`,
    book: `<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Zm0 0V21.5"/>`,
    heart: `<path d="M20.8 8.9c0 5.1-8.8 10.4-8.8 10.4S3.2 14 3.2 8.9A4.4 4.4 0 0 1 12 6.8a4.4 4.4 0 0 1 8.8 2.1Z"/>`,
    people: `<path d="M16 20v-1.4a4.6 4.6 0 0 0-4.6-4.6H7.6A4.6 4.6 0 0 0 3 18.6V20m6-10.4A3.6 3.6 0 1 0 9 2.4a3.6 3.6 0 0 0 0 7.2Zm7-5.8a3.2 3.2 0 0 1 0 6.2m2.4 7.6v-1.2a4.6 4.6 0 0 0-3.1-4.3"/>`,
    spark: `<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 12 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/>`,
    leaf: `<path d="M20.5 3.5C12 3.5 5 7 5 13.2c0 3 2.3 5.3 5.3 5.3C16.5 18.5 20.5 12 20.5 3.5ZM4 21c4.5-6.5 8.5-9.5 14-13"/>`,
    pin: `<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>`,
    phone: `<path d="M6.5 3.5 9 3l2 5-2.2 1.4a15.3 15.3 0 0 0 5.3 5.3l1.4-2.2 5 2-.5 2.5A2.5 2.5 0 0 1 18 19C10.3 19 5 13.7 5 6a2.5 2.5 0 0 1 1.5-2.5Z"/>`,
    mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`,
    instagram: `<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.3" cy="6.8" r=".7" fill="currentColor" stroke="none"/>`,
    menu: `<path d="M4 7h16M4 12h16M4 17h16"/>`,
    close: `<path d="m6 6 12 12M18 6 6 18"/>`,
    check: `<path d="m5 12 4 4L19 6"/>`
  };
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.spark}</svg>`;
};

const navItems = [
  ['About', '/about'],
  ['Academics', '/academics'],
  ['Activities', '/about#experience'],
  ['Admissions', '/admissions'],
  ['Support us', '/support'],
  ['News', '/news']
];

const courses = [
  { number: '01', title: 'Early Years', detail: 'Pre-Primary', text: 'A joyful first step into learning through play, creativity and nurturing care.', image: '/assets/placeholder1.jpg' },
  { number: '02', title: 'Lower Primary', detail: 'Grades 1–3', text: 'Strong foundations in literacy, numeracy and Christian values for every learner.', image: '/assets/placeholder2.jpg' },
  { number: '03', title: 'Upper Primary', detail: 'Grades 4–6', text: 'Growing independence, problem-solving and teamwork as learners find their voice.', image: '/assets/img2.JPG' },
  { number: '04', title: 'Junior Secondary', detail: 'Grades 7–9', text: 'Deeper knowledge, leadership and practical skills for the road ahead.', image: '/assets/img5.jpg' }
];

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="site-shell">
    <div class="topline">
      <div class="container topline-inner">
        <span class="topline-message"><span class="topline-dot"></span> Admissions open for the 2027 school year</span>
        <div class="topline-links">
          <a href="tel:+254759908769">${icon('phone', 15)} +254 759 908 769</a>
          <a href="mailto:inquiries@stewardslightschools.org">${icon('mail', 15)} inquiries@stewardslightschools.org</a>
        </div>
      </div>
    </div>

    <header class="site-header" id="site-header">
      <div class="container header-inner">
        <a class="brand" href="#top" aria-label="Stewards Light Schools home">
          <img src="/assets/stewards-light-logo.png" alt="Stewards Light Schools" />
        </a>
        <nav class="main-nav" id="main-nav" aria-label="Primary navigation">
          ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
          <a class="nav-cta" href="/contact">Plan a visit ${icon('arrow', 17)}</a>
        </nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">${icon('menu', 26)}</button>
      </div>
    </header>

    <main id="top">
      <section class="hero-section">
        <div class="hero-image"></div>
        <div class="hero-shade"></div>
        <div class="container hero-content">
          <p class="eyebrow light">Faith · Knowledge · Character</p>
          <h1>Let your child<br /><em>shine bright.</em></h1>
          <p class="hero-copy">A comprehensive Christian education where curious minds grow with confidence, compassion and purpose.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#admissions">Explore admissions ${icon('arrow', 18)}</a>
            <a class="button button-ghost" href="#about">Discover our story</a>
          </div>
          <div class="hero-note">
            <span class="hero-note-mark">✦</span>
            <div><strong>Growing in wisdom</strong><span>Since 2004 · Kapsabet, Kenya</span></div>
          </div>
        </div>
        <a class="scroll-cue" href="#about" aria-label="Scroll to learn more"><span>Scroll to explore</span><span class="scroll-line"></span></a>
      </section>

      <section class="welcome-section section-pad" id="about">
        <div class="container split-intro">
          <div>
            <p class="eyebrow">Welcome to Stewards' Light</p>
            <h2>A school for the whole <em>person.</em></h2>
          </div>
          <div class="intro-copy">
            <p class="lead">We believe education is more than what happens in a classroom. It is the steady work of helping each learner discover who they are, what they can do and how they can serve others.</p>
            <p>Rooted in Christian principles and committed to academic excellence, we create the space for children to grow with a strong foundation in faith, knowledge and character.</p>
            <a class="text-link" href="#experience">Meet the Stewards' Light difference ${icon('arrow', 18)}</a>
          </div>
        </div>
        <div class="container value-strip">
          <div class="value-item">${icon('heart', 26)}<span>Faith-led</span></div>
          <div class="value-item">${icon('book', 26)}<span>Purposeful learning</span></div>
          <div class="value-item">${icon('people', 26)}<span>Known by name</span></div>
          <div class="value-item">${icon('leaf', 26)}<span>Growing together</span></div>
        </div>
      </section>

      <section class="academics-section section-pad section-tint" id="academics">
        <div class="container">
          <div class="section-heading-row">
            <div><p class="eyebrow">The learning journey</p><h2>Find your child's<br /><em>next chapter.</em></h2></div>
            <p class="section-intro">Every stage has its own rhythm. Our pathways are designed to meet learners where they are and help them move forward with confidence.</p>
          </div>
          <div class="course-grid">
            ${courses.map(course => `
              <article class="course-card">
                <div class="course-image-wrap"><img src="${course.image}" alt="${course.title} learning at Stewards Light" /><span class="course-number">${course.number}</span></div>
                <div class="course-body"><p class="course-detail">${course.detail}</p><h3>${course.title}</h3><p>${course.text}</p><a class="text-link" href="#contact" data-course="${course.title}">Ask about this stage ${icon('arrow', 16)}</a></div>
              </article>`).join('')}
          </div>
          <div class="center-link"><a class="button button-outline" href="#admissions">View admissions information ${icon('arrow', 18)}</a></div>
        </div>
      </section>

      <section class="experience-section section-pad" id="experience">
        <div class="container experience-layout">
          <div class="experience-visual">
            <img src="/assets/img1.jpg" alt="Learners collaborating outdoors" />
            <div class="image-caption"><span class="caption-mark">✦</span><span>Learning that stays with you</span></div>
          </div>
          <div class="experience-copy">
            <p class="eyebrow">Beyond the classroom</p>
            <h2>Room to grow,<br /><em>space to belong.</em></h2>
            <p class="lead">The best learning experiences make room for questions, friendships, movement and wonder.</p>
            <div class="experience-list">
              <a href="#contact" class="experience-row"><span class="experience-icon">${icon('spark', 22)}</span><span><strong>Extracurriculars</strong><small>Sports, music, arts and clubs that nurture each learner's gifts.</small></span>${icon('arrow', 18)}</a>
              <a href="#contact" class="experience-row"><span class="experience-icon">${icon('book', 22)}</span><span><strong>Academic curriculum</strong><small>A solid foundation of faith and knowledge for every stage.</small></span>${icon('arrow', 18)}</a>
              <a href="#contact" class="experience-row"><span class="experience-icon">${icon('people', 22)}</span><span><strong>Leadership and service</strong><small>Real-life experiences that build character and a generous spirit.</small></span>${icon('arrow', 18)}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="admissions-band" id="admissions">
        <div class="container admissions-inner">
          <div><p class="eyebrow light">Admissions 2027</p><h2>There is a place<br />for your child <em>here.</em></h2></div>
          <div class="admissions-copy"><p>From the first hello to the first day of school, our admissions team is here to make the next step clear and personal.</p><a class="button button-light" href="#contact">Start an enquiry ${icon('arrow', 18)}</a><span class="admissions-note">No question is too small.</span></div>
        </div>
      </section>

      <section class="support-section section-pad" id="support">
        <div class="container support-card">
          <div class="support-image"><img src="/assets/img6.jpg" alt="Learners sharing music and community at school" /></div>
          <div class="support-copy"><p class="eyebrow">Support our mission</p><h2>Help us keep<br /><em>the light shining.</em></h2><p>Since 2004, Stewards Light Schools has been shaping young lives through quality Christian education. Your generosity helps us improve facilities, support needy learners and open new opportunities.</p><a class="button button-dark" href="#contact">Partner with us ${icon('arrow', 18)}</a></div>
        </div>
      </section>

      <section class="news-section section-pad section-tint" id="news">
        <div class="container">
          <div class="section-heading-row compact"><div><p class="eyebrow">From our community</p><h2>Stories worth <em>sharing.</em></h2></div><a class="text-link" href="#contact">See school updates ${icon('arrow', 18)}</a></div>
          <div class="news-grid">
            <article class="news-card news-feature"><img src="/assets/img4.jpg" alt="Students learning together" /><div class="news-overlay"><span class="news-tag">Community</span><h3>A bright beginning to a new term</h3><a href="#contact">Read the story ${icon('arrow', 16)}</a></div></article>
            <article class="news-card"><p class="news-date">12 · 08 · 2026</p><p class="news-tag">Learning</p><h3>Growing confident readers, one story at a time</h3><a class="text-link" href="#contact">Read more ${icon('arrow', 16)}</a></article>
            <article class="news-card"><p class="news-date">29 · 07 · 2026</p><p class="news-tag">Community</p><h3>When service becomes part of the lesson</h3><a class="text-link" href="#contact">Read more ${icon('arrow', 16)}</a></article>
          </div>
        </div>
      </section>

      <section class="contact-section section-pad" id="contact">
        <div class="container contact-layout">
          <div class="contact-copy"><p class="eyebrow">Come and meet us</p><h2>Let's talk about<br /><em>your child's future.</em></h2><p class="lead">Whether you are ready to apply or simply want to learn more, our team would love to hear from you.</p><div class="contact-details"><a href="tel:+254759908769">${icon('phone', 20)}<span><small>Office</small>+254 759 908 769</span></a><a href="tel:+254722215833">${icon('phone', 20)}<span><small>Mobile</small>+254 722 215 833</span></a><a href="mailto:inquiries@stewardslightschools.org">${icon('mail', 20)}<span><small>Email</small>inquiries@stewardslightschools.org</span></a><div class="address-line">${icon('pin', 20)}<span><small>Visit</small>Kapsabet–Chavakali Main Road</span></div></div></div>
          <div class="enquiry-card"><div class="form-heading"><span class="form-kicker">Start a conversation</span><h3>Send an enquiry</h3><p>We will get back to you within two school days.</p></div><form id="enquiry-form" novalidate><label>Parent or guardian name<input type="text" name="name" autocomplete="name" placeholder="Your full name" required /></label><label>Email address<input type="email" name="email" autocomplete="email" placeholder="you@example.com" required /></label><label>What can we help with?<select name="topic"><option>Admissions and fees</option><option>Book a school visit</option><option>Curriculum and activities</option><option>Support our mission</option></select></label><label>Message<textarea name="message" rows="3" placeholder="Tell us a little about what you need..."></textarea></label><button class="button button-dark" type="submit">Send enquiry ${icon('arrow', 18)}</button><p class="form-status" role="status" aria-live="polite"></p></form></div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-main"><div class="footer-brand"><img src="/assets/stewards-light-logo.png" alt="Stewards Light Schools" /><p>Faith, knowledge and character for a life of purpose.</p></div><div class="footer-nav"><div><p class="footer-label">Explore</p><a href="#about">Our story</a><a href="#academics">Learning journey</a><a href="#experience">School experience</a></div><div><p class="footer-label">Connect</p><a href="#admissions">Admissions</a><a href="#support">Support us</a><a href="#contact">Contact</a></div></div><div class="footer-contact"><p class="footer-label">Find us</p><p>Kapsabet–Chavakali Main Road<br />Kenya</p><a href="mailto:inquiries@stewardslightschools.org">inquiries@stewardslightschools.org</a><div class="social-links"><a href="#contact" aria-label="Facebook">f</a><a href="#contact" aria-label="Instagram">${icon('instagram', 15)}</a><a href="#contact" aria-label="YouTube">▶</a></div></div></div>
      <div class="container footer-bottom"><span>© <span id="year"></span> Stewards Light Schools</span><span>Guided by faith. Growing in knowledge.</span><a href="#top" aria-label="Back to top">Back to top ${icon('arrowUp', 15)}</a></div>
    </footer>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </div>
`;

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.innerHTML = icon(open ? 'close' : 'menu', 26);
});

document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.innerHTML = icon('menu', 26);
}));

const header = document.querySelector('#site-header');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

document.querySelectorAll('[data-course]').forEach((link) => link.addEventListener('click', () => {
  const select = document.querySelector('select[name="topic"]');
  if (select) select.value = 'Admissions and fees';
  const textarea = document.querySelector('textarea[name="message"]');
  if (textarea) textarea.value = `I would like to know more about the ${link.dataset.course} pathway.`;
}));

const form = document.querySelector('#enquiry-form');
const formStatus = document.querySelector('.form-status');
const toast = document.querySelector('#toast');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  if (!name || !email || !email.includes('@')) {
    formStatus.textContent = 'Please add your name and a valid email address so we can reply.';
    formStatus.className = 'form-status is-error';
    return;
  }
  formStatus.textContent = `Thank you, ${name.split(' ')[0]}. Your enquiry is ready — our admissions team will be in touch within two school days.`;
  formStatus.className = 'form-status is-success';
  form.reset();
  toast.textContent = 'Thanks for reaching out. We will be in touch soon.';
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 4200);
});

document.querySelector('#year').textContent = new Date().getFullYear();


const basePath = import.meta.env.BASE_URL;
const currentPath = window.location.pathname
  .replace(basePath, '/')
  .replace(/\/$/, '') || '/';

if (currentPath === '/') {
  app.innerHTML = renderHomePage();
  setupHomePage();
} else {
  app.innerHTML = renderPage(currentPath);
  setupRoutedPage();
}

