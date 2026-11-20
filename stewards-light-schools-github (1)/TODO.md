# Stewards Light Schools website

## Existing public website outcomes

- [x] Deliver a responsive image-led homepage with school introduction, hero call-to-action, faith-and-learning message, course pathways, school highlights, support mission, testimonials, and contact prompts.
- [x] Add persistent responsive navigation for About, Academics, Activities, Admissions, Support Us, News, and Contact sections.
- [x] Present Early Years, Lower Primary, Upper Primary, and Junior Secondary pathways with enquiry/application actions.
- [x] Add school experience sections for Christian foundation, curriculum, extracurricular activities, leadership, and beyond-the-classroom development.
- [x] Add Support Us mission section with donation/support call to action.
- [x] Add News and updates cards for school announcements, events, and stories.
- [x] Add contact details and enquiry forms with validation, success feedback, newsletter signup, and next-step messaging.
- [x] Reuse the harvested Stewards Light logo, colours, typography, and photography in a cohesive visual system.
- [x] Replace the gold accent with a soft maroon colour system, using the live site's deep maroon reference `#260C0C` alongside a softer maroon accent.
- [x] Expand the foundation into dedicated About, Academics, Admissions, Support, News, and Contact routes.
- [x] Add the official Stewards Light vision, mission, motto and four values content to the About page.
- [x] Reshape the homepage into a tile-only visual menu with a direct image tile link for every main destination.
- [x] Ensure homepage tiles carry only their menu names, with no hero, supporting copy, footer, or extra tile text.
- [x] Use clean school imagery across every homepage tile, combining generated visuals with harvested Stewards Light photography where needed.
- [x] Ensure accessible responsive behavior, keyboard-friendly navigation, readable contrast, semantic structure, and touch-friendly controls.
- [x] Set up preview, run checks, validate all routes, and capture desktop/mobile screenshots.
- [ ] Add approved staff details, fee information, and live donation/news integrations when supplied.

## Approved CMS upgrade outcomes

- [x] Add a standalone Laravel backend with documented environment configuration, API versioning, health endpoint, secure error handling, and PostgreSQL connection.
- [x] Add PostgreSQL migrations and seeders for administrators and roles, pages, news, events, media, admissions enquiries, contact messages, newsletter subscribers, donation campaigns, donation transactions, website settings, and audit events.
- [ ] Add secure administrator authentication at `/admin` and role-based permissions for Super Administrator, Content Editor, Admissions Officer, and Finance Officer.
- [ ] Allow authorized staff to create, edit, archive, publish, and unpublish pages, news articles, events, media records, and website settings without editing frontend source code.
- [ ] Add media upload and reuse with captions, alternative text, category metadata, validation, and web optimization.
- [ ] Connect public News and Events content to published backend records and add article/event detail routes without removing the existing visual system.
- [ ] Expand admissions enquiries to collect guardian name, email, telephone, student name, intended grade, admission period, and additional information; persist valid submissions and issue unique references.
- [ ] Add admissions dashboard search, filters, statuses, internal notes, follow-up actions, authorized deletion, and CSV export.
- [ ] Persist contact messages and newsletter subscribers with validation, duplicate prevention, unsubscribe support, configurable notification handling, and CSV export.
- [ ] Ensure success messages are shown only after backend persistence succeeds; show clear error states when saving or notification delivery fails.
- [ ] Add donation campaigns, donor records, transaction statuses, provider references, verified totals, receipts, exports, and campaign reporting.
- [ ] Implement a sandbox payment adapter with initiation, pending, success, failure, reversal/refund, callback verification, idempotency, and receipt behavior. Do not enable live payment credentials yet.
- [ ] Add a provider interface ready for a future Safaricom Daraja, Pesapal, or Flutterwave adapter after the school selects a provider and supplies credentials securely.
- [ ] Add editable SEO metadata, Open Graph fields, sitemap, robots rules, lazy-loaded media, accessible API form states, backups, restore documentation, deployment documentation, and technical handover instructions.

## Environment and handover

- [ ] Confirm the external PHP, Composer, PostgreSQL, and hosting environment for Laravel validation; the current sandbox has Node/Vite but no PHP, Composer, PostgreSQL client, or Docker executable.
- [ ] Document environment variables, database migrations, admin setup, sandbox payment testing, production payment activation, backups, restore procedures, and role handover.
