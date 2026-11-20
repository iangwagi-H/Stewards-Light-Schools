const pageNav = [
  ['About', '/about'],
  ['Academics', '/academics'],
  ['Activities', '/about#experience'],
  ['Admissions', '/admissions'],
  ['Support us', '/support'],
  ['News', '/news']
];

const BASE = import.meta.env.BASE_URL;

const withBasePath = (html) => {
  return html
    .replace(
      /(href|src)=("|')\/(?!\/)/g,
      `$1=$2${BASE}`
    )
    .replace(
      /url\((['"])\/(?!\/)/g,
      `url($1${BASE}`
    );
};

const check = '<span class="page-check" aria-hidden="true">✓</span>';

const pageHeader = (active) => `
  <div class="topline"><div class="container topline-inner"><span class="topline-message"><span class="topline-dot"></span> Admissions open for the 2027 school year</span><div class="topline-links"><a href="tel:+254759908769">+254 759 908 769</a><a href="mailto:inquiries@stewardslightschools.org">inquiries@stewardslightschools.org</a></div></div></div>
  <header class="site-header page-header" id="site-header"><div class="container header-inner"><a class="brand" href="/" aria-label="Stewards Light Schools home"><img src="/assets/stewards-light-logo.png" alt="Stewards Light Schools" /></a><nav class="main-nav" id="main-nav" aria-label="Primary navigation">${pageNav.map(([label, href]) => `<a class="${active === label.toLowerCase() ? 'is-active' : ''}" href="${href}">${label}</a>`).join('')}<a class="nav-cta" href="/contact">Plan a visit</a></nav><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">☰</button></div></header>
`;

const pageFooter = () => `
  <footer class="site-footer"><div class="container footer-main"><div class="footer-brand"><img src="/assets/stewards-light-logo.png" alt="Stewards Light Schools" /><p>Faith, knowledge and character for a life of purpose.</p></div><div class="footer-nav"><div><p class="footer-label">Explore</p><a href="/about">Our story</a><a href="/academics">Learning journey</a><a href="/about#experience">School experience</a></div><div><p class="footer-label">Connect</p><a href="/admissions">Admissions</a><a href="/support">Support us</a><a href="/contact">Contact</a></div></div><div class="footer-contact"><p class="footer-label">Find us</p><p>Kapsabet–Chavakali Main Road<br />Kenya</p><a href="mailto:inquiries@stewardslightschools.org">inquiries@stewardslightschools.org</a><div class="social-links"><a href="/contact" aria-label="Facebook">f</a><a href="/contact" aria-label="Instagram">◎</a><a href="/contact" aria-label="YouTube">▶</a></div></div></div><div class="container footer-bottom"><span>© <span id="year"></span> Stewards Light Schools</span><span>Guided by faith. Growing in knowledge.</span><a href="#top">Back to top</a></div></footer><div class="toast" id="toast" role="status" aria-live="polite"></div>
`;

const pageHero = (kicker, title, copy, image) => `<section class="inner-hero" style="--page-image:url('${image}')"><div class="inner-hero-shade"></div><div class="container inner-hero-content"><p class="eyebrow light">${kicker}</p><h1>${title}</h1><p>${copy}</p></div></section>`;

const pageIntro = (kicker, title, copy) => `<div class="container page-intro"><p class="eyebrow">${kicker}</p><h2>${title}</h2><p class="lead">${copy}</p></div>`;

const courseRows = [
  ['Early Years', 'Pre-Primary', 'We lay the first foundations through play, creativity, songs, stories and attentive care.'],
  ['Lower Primary', 'Grades 1–3', 'Learners build literacy, numeracy and Christian values while growing in confidence.'],
  ['Upper Primary', 'Grades 4–6', 'We encourage independence, problem-solving and teamwork as curiosity becomes capability.'],
  ['Junior Secondary', 'Grades 7–9', 'Deeper knowledge, leadership and practical skills prepare learners for the future.']
];

const renderAbout = () => `
  ${pageHeader('about')}
  <main id="top">${pageHero('Our story', 'A school where every learner\ncan shine.', 'Rooted in Christian foundations and committed to academic excellence, we help young people discover their God-given potential.', '/assets/img1.jpg')}
    ${pageIntro('The Stewards’ Light difference', 'Education that forms the whole person.', 'Since 2004, Stewards Light Schools has created a warm, purposeful learning community where faith and knowledge belong together.')}
    <section class="identity-section section-tint"><div class="container"><div class="identity-lead"><p class="eyebrow">Who we are becoming</p><h2>Authentic Christian schools<br /><em>in Kenya and beyond.</em></h2><p class="lead">Our vision, mission, motto and values guide the way we teach, lead and serve.</p></div><div class="identity-grid"><article class="identity-card identity-card-feature"><p class="eyebrow">Our vision</p><h3>To grow into leading Authentic Christian Schools in Kenya and beyond.</h3></article><article class="identity-card"><p class="eyebrow">Our mission</p><p>To honour God by developing pupils to serve in Life with Courage, excellence, integrity and distinction; guided in all things by Jesus Christ.</p></article><article class="identity-card identity-card-motto"><p class="eyebrow">Our motto</p><blockquote>“Be strong and Courageous”</blockquote><cite>Joshua 1:6</cite></article></div><div class="values-heading"><p class="eyebrow">Our values</p><p>These commitments shape the culture we create for learners, staff and families.</p></div><div class="values-grid"><article class="value-card"><h3>Godliness</h3><p>We provide a comprehensive, integrated education based on Christian Foundations.</p><p>We believe that the Christian Faith and principles are fundamental to developing the whole person; mature, positive and adaptable to the changes and challenges of life today.</p></article><article class="value-card"><h3>Excellence and continuous learning</h3><p>We constantly challenge ourselves to the highest levels of learning and performance so as to achieve excellence and a greater impact.</p><p>We continuously measure our conformance to quality education service, cleanliness and prudence.</p></article><article class="value-card"><h3>Character, discipline and integrity</h3><p>We lay emphasis on Character development, discipline and virtue.</p><p>We encourage our Pupils to discover their God-given talents and to give of their best.</p></article><article class="value-card"><h3>Teamwork and relationships</h3><p>We provide an enabling, caring, purposeful Christian Environment of respect to each other, teamwork, employee support and reward for good service performance.</p></article></div></div></section>
    <section class="page-section"><div class="container page-split"><div class="page-photo tall"><img src="/assets/img5.jpg" alt="Learners spending time together at school" /></div><div><p class="eyebrow">Our foundation</p><h2>Known, valued<br /><em>and encouraged.</em></h2><p>Children learn best when they feel safe enough to ask questions, brave enough to try again and known well enough to be guided with patience. That is the kind of community we work to build every day.</p><p>Our teachers bring care, high expectations and a spirit of service to the classroom. The result is an education that develops strong minds, steady character and a generous view of the world.</p><div class="page-check-list">${check} Faith is part of daily life${check} Every learner is seen and supported${check} Learning is active and purposeful</div></div></div></section>
    <section class="page-section section-tint" id="experience"><div class="container"><div class="section-heading-row compact"><div><p class="eyebrow">Life at school</p><h2>Room to grow,<br /><em>space to belong.</em></h2></div><p class="section-intro">Sports, music, arts, clubs and service give learners the confidence to take their place in the wider community.</p></div><div class="feature-grid"><article><img src="/assets/img6.jpg" alt="Learners making music together" /><h3>Extracurriculars</h3><p>Discover the joy of music, sport, creativity and collaboration beyond the classroom.</p></article><article><img src="/assets/img4.jpg" alt="Students learning outdoors" /><h3>Beyond the classroom</h3><p>Real-life experiences and mentorship help character, leadership and service take root.</p></article><article class="feature-quote"><span>✦</span><p>“The community here feels like family, and every learner is encouraged to grow into their gifts.”</p><small>— A Stewards’ Light parent</small></article></div></div></section>
    <section class="page-section"><div class="container board-card"><div><p class="eyebrow">Our leadership</p><h2>Guided by a<br /><em>clear vision.</em></h2></div><div><p class="lead">Our school leadership team brings together educators, parents and community partners around one shared commitment: to prepare learners for a life of faith, purpose and service.</p><a class="button button-dark" href="/contact">Meet the team</a></div></div></section>
  </main>${pageFooter()}
`;

const renderAcademics = () => `
  ${pageHeader('academics')}
  <main id="top">${pageHero('Academics', 'A learning journey\nwith purpose.', 'From the first classroom experience to junior secondary, every stage builds confidence, curiosity and capability.', '/assets/img2.JPG')}
    ${pageIntro('Our curriculum', 'Strong foundations for every next step.', 'We combine a solid academic programme with Christian formation, practical experiences and the encouragement to think deeply.')}
    <section class="page-section section-tint"><div class="container"><div class="program-list">${courseRows.map((row) => `<article class="program-row"><div class="program-title"><span>${row[1]}</span><h3>${row[0]}</h3></div><p>${row[2]}</p><a class="text-link" href="/contact?course=${encodeURIComponent(row[0])}">Ask about this stage</a></article>`).join('')}</div></div></section>
    <section class="page-section"><div class="container page-split academics-split"><div><p class="eyebrow">More than marks</p><h2>Learning that opens<br /><em>new possibilities.</em></h2><p class="lead">Academic excellence is not only about results. It is about giving learners the tools to reason, communicate, collaborate and keep learning.</p></div><div class="principles-card"><div>${check}<span><strong>Curiosity</strong><small>Questions are welcomed and investigated.</small></span></div><div>${check}<span><strong>Confidence</strong><small>Learners practise, reflect and try again.</small></span></div><div>${check}<span><strong>Character</strong><small>Faith and service shape how knowledge is used.</small></span></div></div></div></section>
    <section class="maroon-band"><div class="container band-inner"><div><p class="eyebrow light">Want to see learning in action?</p><h2>Come and visit<br /><em>our classrooms.</em></h2></div><a class="button button-light" href="/contact">Plan a school visit</a></div></section>
  </main>${pageFooter()}
`;

const renderAdmissions = () => `
  ${pageHeader('admissions')}
  <main id="top">${pageHero('Admissions 2027', 'The next chapter\nstarts here.', 'Our admissions team is ready to answer your questions and help your family find the right pathway.', '/assets/img5.jpg')}
    ${pageIntro('A clear next step', 'Welcome starts with a conversation.', 'Whether you are moving into the area, changing schools or planning ahead, we will make the process personal and straightforward.')}
    <section class="page-section section-tint"><div class="container"><div class="steps-grid"><article><h3>Start an enquiry</h3><p>Tell us a little about your child and the stage you are considering.</p><a class="text-link" href="/contact">Ask a question</a></article><article><h3>Visit the school</h3><p>Meet our team, see the learning spaces and experience the atmosphere.</p><a class="text-link" href="/contact">Book a visit</a></article><article><h3>Apply with confidence</h3><p>We will guide you through the forms, requirements and next steps.</p><a class="text-link" href="/contact">Request the checklist</a></article></div></div></section>
    <section class="page-section"><div class="container admissions-detail"><div><p class="eyebrow">Frequently asked</p><h2>Good questions<br /><em>are welcome.</em></h2><p class="lead">Here are a few starting points. If you do not see your question, please get in touch with our admissions team.</p></div><div class="faq-list"><details open><summary>Which year groups can apply?</summary><p>We welcome enquiries for Early Years, Lower Primary, Upper Primary and Junior Secondary. Availability depends on the year and class.</p></details><details><summary>Can we visit before applying?</summary><p>Yes. We encourage families to visit so that you can meet our team and understand how your child will be supported.</p></details><details><summary>How do we get started?</summary><p>Use the contact form to tell us what you need, or call the school office directly on +254 759 908 769.</p></details></div></div></section>
    <section class="maroon-band"><div class="container band-inner"><div><p class="eyebrow light">Ready when you are</p><h2>Let’s begin<br /><em>the conversation.</em></h2></div><a class="button button-light" href="/contact">Send an enquiry</a></div></section>
  </main>${pageFooter()}
`;

const renderSupport = () => `
  ${pageHeader('support us')}
  <main id="top">${pageHero('Support our mission', 'Help us keep\nthe light shining.', 'Your generosity helps provide quality Christian education, stronger facilities and new opportunities for future generations.', '/assets/img6.jpg')}
    ${pageIntro('A shared investment', 'When a child thrives,\na community grows.', 'Stewards Light Schools has been shaping young lives since 2004. We believe every learner deserves the chance to grow in faith, knowledge and character.')}
    <section class="page-section section-tint"><div class="container support-options"><article><span class="support-icon">✦</span><p class="eyebrow">Give financially</p><h3>Support a learner</h3><p>Help provide learning materials, school support and access to opportunity for children who need it most.</p><a class="text-link" href="/contact?topic=support">Talk to us about giving</a></article><article><span class="support-icon">♡</span><p class="eyebrow">Partner with us</p><h3>Grow the school</h3><p>Partner with our mission through facilities, resources, professional expertise or a long-term relationship.</p><a class="text-link" href="/contact?topic=partnership">Explore partnership</a></article><article><span class="support-icon">✦</span><p class="eyebrow">Share the story</p><h3>Spread the word</h3><p>Tell your community about Stewards Light Schools and help more families find a place to belong.</p><a class="text-link" href="/contact?topic=community">Connect with us</a></article></div></section>
    <section class="page-section"><div class="container page-split"><div class="page-photo"><img src="/assets/placeholder2.jpg" alt="A learner smiling at school" /></div><div><p class="eyebrow">A lasting difference</p><h2>Small acts can<br /><em>shine far.</em></h2><p class="lead">Your support reaches beyond one classroom. It strengthens the learning community around each child and helps us create a more hopeful future.</p><a class="button button-dark" href="/contact">Start a conversation</a></div></div></section>
  </main>${pageFooter()}
`;

const renderNews = () => `
  ${pageHeader('news')}
  <main id="top">${pageHero('From our community', 'Stories worth\nsharing.', 'News, updates and glimpses of everyday life at Stewards Light Schools.', '/assets/img4.jpg')}
    <section class="page-section"><div class="container"><div class="section-heading-row compact"><div><p class="eyebrow">Latest stories</p><h2>What is happening<br /><em>at Stewards’ Light.</em></h2></div><p class="section-intro">Follow the moments, milestones and people that make our school community what it is.</p></div><div class="news-page-grid"><article class="news-page-feature"><img src="/assets/img4.jpg" alt="Students learning outdoors" /><div><p class="news-tag">Community</p><h3>A bright beginning to a new term</h3><p>New faces, new questions and the familiar joy of learning together.</p><a href="/contact">Read the story</a></div></article><article class="news-page-card"><p class="news-date">12 · 08 · 2026</p><p class="news-tag">Learning</p><h3>Growing confident readers, one story at a time</h3><p>How small daily habits help young readers find their voice.</p><a class="text-link" href="/contact">Read more</a></article><article class="news-page-card"><p class="news-date">29 · 07 · 2026</p><p class="news-tag">Community</p><h3>When service becomes part of the lesson</h3><p>Learning to notice, care and make a difference close to home.</p><a class="text-link" href="/contact">Read more</a></article></div></div></section>
    <section class="newsletter-band"><div class="container newsletter-inner"><div><p class="eyebrow light">Stay close to school life</p><h2>Receive news and<br /><em>community updates.</em></h2></div><form id="newsletter-form" class="newsletter-form" novalidate><label for="newsletter-email">Email address</label><div><input id="newsletter-email" type="email" placeholder="you@example.com" required /><button class="button button-light" type="submit">Sign up</button></div><p class="newsletter-status" role="status" aria-live="polite">We respect your privacy.</p></form></div></section>
  </main>${pageFooter()}
`;

const renderContact = () => `
  ${pageHeader('contact')}
  <main id="top">${pageHero('Contact us', 'Let’s talk about\nyour child’s future.', 'Our team is ready to answer questions, arrange a visit and help you take the next step with confidence.', '/assets/banner_bg.jpg')}
    <section class="page-section contact-page-section"><div class="container contact-page-grid"><div><p class="eyebrow">Get in touch</p><h2>We would love<br /><em>to hear from you.</em></h2><p class="lead">Reach out to the school office, send an enquiry or come and meet the team in person.</p><div class="contact-page-details"><a href="tel:+254759908769"><strong>Office</strong><span>+254 759 908 769</span></a><a href="tel:+254722215833"><strong>Mobile</strong><span>+254 722 215 833</span></a><a href="mailto:inquiries@stewardslightschools.org"><strong>Email</strong><span>inquiries@stewardslightschools.org</span></a><div><strong>Visit</strong><span>Kapsabet–Chavakali Main Road, Kenya</span></div></div><div class="contact-social"><p class="eyebrow">Follow along</p><a href="/contact">Facebook</a><a href="/contact">Instagram</a><a href="/contact">YouTube</a></div></div><div class="contact-form-panel"><p class="eyebrow">Send an enquiry</p><h3>Start a conversation</h3><form id="page-enquiry-form" novalidate><label>First name<input type="text" name="firstName" placeholder="Your first name" required /></label><label>Last name<input type="text" name="lastName" placeholder="Your last name" /></label><label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label><label>How can we help?<select name="topic"><option>Admissions and fees</option><option>Book a school visit</option><option>Curriculum and activities</option><option>Support our mission</option></select></label><label>Message<textarea name="message" rows="4" placeholder="Tell us a little about what you need..."></textarea></label><button class="button button-dark" type="submit">Send enquiry</button><p class="form-status" id="page-form-status" role="status" aria-live="polite"></p></form></div></div></section>
    <section class="newsletter-band"><div class="container newsletter-inner"><div><p class="eyebrow light">Stay in touch</p><h2>Receive school news<br /><em>and updates.</em></h2></div><form id="contact-newsletter-form" class="newsletter-form" novalidate><label for="contact-newsletter-email">Email address</label><div><input id="contact-newsletter-email" type="email" placeholder="you@example.com" required /><button class="button button-light" type="submit">Sign up</button></div><p class="newsletter-status" role="status" aria-live="polite">We respect your privacy.</p></form></div></section>
  </main>${pageFooter()}
`;


export function renderPage(pathname) {
  const route = pathname.replace(/\/$/, '') || '/';

  let html;

  if (route === '/about') {
    html = renderAbout();
  } else if (route === '/academics') {
    html = renderAcademics();
  } else if (route === '/admissions') {
    html = renderAdmissions();
  } else if (route === '/support') {
    html = renderSupport();
  } else if (route === '/news') {
    html = renderNews();
  } else {
    html = renderContact();
  }

  return withBasePath(html);
}


function setupForm(formSelector, statusSelector, successMessage) {
  const form = document.querySelector(formSelector);
  const status = document.querySelector(statusSelector);
  if (!form || !status) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.querySelector('input[type="email"]')?.value.trim();
    const requiredText = [...form.querySelectorAll('input[required]')].every((input) => input.value.trim());
    if (!requiredText || !email || !email.includes('@')) {
      status.textContent = 'Please add the required details and a valid email address.';
      status.className = 'form-status is-error newsletter-status';
      return;
    }
    status.textContent = successMessage;
    status.className = 'form-status is-success newsletter-status';
    form.reset();
  });
}

export function setupRoutedPage() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));
  setupForm('#newsletter-form', '.newsletter-status', 'Thank you. You are on the school news list.');
  setupForm('#contact-newsletter-form', '.newsletter-status', 'Thank you. You are on the school news list.');
  const enquiry = document.querySelector('#page-enquiry-form');
  const status = document.querySelector('#page-form-status');
  enquiry?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = enquiry.querySelector('[name="firstName"]')?.value.trim();
    const email = enquiry.querySelector('[name="email"]')?.value.trim();
    if (!name || !email || !email.includes('@')) {
      status.textContent = 'Please add your first name and a valid email address so we can reply.';
      status.className = 'form-status is-error';
      return;
    }
    status.textContent = `Thank you, ${name}. Our team will be in touch within two school days.`;
    status.className = 'form-status is-success';
    enquiry.reset();
  });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
}
