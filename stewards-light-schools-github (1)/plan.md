# Stewards Light Schools CMS Upgrade Plan

## Decision

Upgrade the existing Vite/vanilla-JavaScript Stewards Light Schools frontend with a standalone Laravel API and PostgreSQL database. Use sandbox-only payment adapters until the school supplies a production payment provider account and protected credentials. Preserve the current public design, brand palette, logo, imagery, route structure, and responsive behavior.

## Audit findings

The current application is a static Vite frontend. It contains the public routes `/`, `/about`, `/academics`, `/admissions`, `/support`, `/news`, and `/contact`, shared navigation/footer markup, school identity content, local and managed image assets, responsive CSS, enquiry forms, newsletter forms, FAQ content, and client-side validation.

The current forms do not call a backend. They reset the form and display success text in the browser, so admissions enquiries, contact messages, and newsletter subscriptions are not persisted. News and page content are hardcoded in `src/pages.js`; there is no events module, media library, CMS, administrator authentication, role management, audit log, database schema, payment gateway adapter, webhook endpoint, or verified donation ledger.

The current workspace has Node.js and the Vite toolchain, but no PHP, Composer, PostgreSQL client, or Docker executable. The Laravel application therefore needs to be developed as a standalone backend package and validated in an environment with PHP, Composer, and PostgreSQL before production deployment.

## Target architecture

Keep the existing Vite application as the public frontend. Add a separate `backend/` Laravel application or a companion Laravel repository, depending on the external hosting workflow. The backend will expose versioned JSON endpoints under `/api/v1`, provide authenticated admin routes under `/admin`, and own PostgreSQL migrations, validation, authorization, media records, notifications, payment callbacks, and audit logs.

Use Laravel Sanctum or secure same-origin session authentication for the CMS. If the frontend and backend are hosted on different origins, configure an explicit trusted-origin and CORS policy rather than exposing broad wildcard credentials. Store all secrets in the backend environment, never in Vite source or public configuration.

Use PostgreSQL tables for users, roles, permissions, pages, news articles, events, media, admissions enquiries, contact messages, newsletter subscribers, donation campaigns, donation transactions, website settings, and audit events. Every editable public record should have publication status, timestamps, and appropriate author or actor references.

Use a payment-provider interface with a sandbox implementation first. The sandbox must model initiation, pending, success, failure, reversal/refund, callback verification, idempotency, and receipt generation without pretending that a payment succeeded. A future Daraja, Pesapal, or Flutterwave adapter can implement the same interface after the provider is selected and credentials are supplied.

## Phased implementation

### Phase 1 — Backend foundation

Create the Laravel application structure, environment example, PostgreSQL connection configuration, API versioning, health endpoint, database migrations, seeders, request validation, exception handling, CORS/session policy, and local deployment documentation. Add the initial admin user/role model and secure password handling. Do not add live payment credentials.

### Phase 2 — CMS and media

Implement authenticated `/admin` access and role-based authorization for Super Administrator, Content Editor, Admissions Officer, and Finance Officer. Add page, news, event, media, and settings management with draft/published states, image metadata, captions, alternative text, pagination, search, and audit events. Connect the public News and Events sections to published API records while retaining a safe fallback during migration.

### Phase 3 — Operational forms

Expand the admissions form to collect guardian name, email, telephone, student name, intended grade, admission period, and additional information. Persist valid submissions, issue a unique reference, send configurable notifications, and expose dashboard search, filters, statuses, notes, follow-up actions, CSV export, and authorized deletion. Persist contact submissions and newsletter subscribers with duplicate prevention and unsubscribe support. Confirmation messages must only appear after successful backend persistence.

### Phase 4 — Donations and sandbox payments

Add donation campaigns, contribution records, donor details, payment status, provider references, webhook/callback verification, idempotency protection, verified totals, receipts, exports, and campaign reporting. Connect the public Support Us flow to the sandbox gateway only. Keep the production provider adapter disabled until the school chooses a provider and supplies credentials through secure environment configuration.

### Phase 5 — Frontend integration and handover

Replace client-only success handlers with API calls and loading/error states. Add public article/event detail routes, editable SEO metadata, Open Graph fields, sitemap/robots support, lazy-loaded media, and accessible form feedback. Document environment variables, migrations, admin setup, sandbox payment testing, production payment activation, backups, restore procedures, deployment, and role handover.

## Existing files to retain

- `src/main.js` remains the public frontend entry point and will receive API integration progressively.
- `src/home.js` remains the image-tile homepage.
- `src/pages.js` remains the public page template layer while hardcoded content is migrated to API data.
- `src/styles.css` remains the visual system, including the Stewards Light palette, transparent logo treatment, maroon header, slate-blue text accents, and responsive layouts.
- `public/assets/` remains the source for approved local brand imagery and logo assets.
- `public/manus-routes.json` remains synchronized with public frontend routes.

## Current blockers and assumptions

The current sandbox does not include PHP, Composer, PostgreSQL, or Docker, so Laravel migrations and integration tests cannot be executed here until a PHP/PostgreSQL-capable development or deployment environment is available. The current project can still receive the backend source, API contract, migrations, and documentation, but deployment validation must occur on the selected external host.

No production payment provider has been selected. Sandbox payment behavior will be implemented behind a provider abstraction and clearly labeled as non-production until Daraja, Pesapal, or Flutterwave is chosen.
