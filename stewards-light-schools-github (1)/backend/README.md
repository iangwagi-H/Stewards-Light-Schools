# Stewards Light Schools CMS backend

This directory contains the standalone Laravel/PostgreSQL backend for Stewards Light Schools. The existing Vite frontend remains at the repository root and will be integrated progressively through the versioned API under `/api/v1`.

## Current foundation

The first CMS foundation includes Laravel 13, Sanctum API support, PostgreSQL-oriented environment defaults, a health endpoint, a published-news query endpoint, authenticated admin identity plumbing, role and permission seed data, and migrations for pages, news, events, media, admissions enquiries, contact messages, newsletter subscribers, donation campaigns, donation transactions, settings, and audit events.

The sandbox payment provider is intentionally not live. Payment credentials must be supplied through deployment secrets after the provider is selected.

## Local setup

1. Copy `.env.example` to `.env`.
2. Create a PostgreSQL database and user matching `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD`.
3. Run `composer install`.
4. Run `php artisan key:generate`.
5. Run `php artisan migrate --seed`.
6. Start the API with `php artisan serve`.

The API will be available at `http://127.0.0.1:8000`. The initial health check is `GET /api/v1/health`. Published articles are returned by `GET /api/v1/public/news`. The protected identity route is `GET /api/v1/admin/me` and requires a Sanctum-authenticated administrator session or token.

The seeded local administrator is `admin@example.com`; replace the generated local password before using the backend outside a disposable development database. Do not commit `.env` or real credentials.

## Validation

Run `php artisan route:list`, `php artisan migrate:fresh --seed`, and `php artisan test` after PostgreSQL credentials are available. The current sandbox has the PHP and PostgreSQL client extensions installed, but does not run a PostgreSQL server by default.
