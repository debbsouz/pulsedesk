# PulseDesk

A modern, lightweight SaaS-style helpdesk prototype built with HTML/CSS/Vanilla JS and localStorage.

## Features
- Dashboard KPIs with SLA metrics (Open, Pending, Resolved 7d, Avg First Response 7d, Avg Resolution 7d, Overdue)
- Tickets list with filters and badges
- Ticket detail with status, priority, assignee, internal notes
- Conversation (comments) and attachments with preview/download
- Assignee management
- Settings page with profile, theme (Light/Dark), demo data controls
- Backup & Restore: export/import tickets as JSON

## Tech Stack
- HTML, CSS (custom design tokens and components)
- Vanilla JavaScript
- localStorage for persistence

## How to Run
- Use a local live server (e.g., VS Code Live Server)
- Open the admin pages under `admin/`:
  - `admin/dashboard.html`
  - `admin/tickets.html`
  - `admin/ticket.html?id=...`
  - `admin/new-ticket.html`
  - `admin/settings.html`

## Folder Structure
- `admin/` — Admin pages (dashboard, tickets, ticket detail, new ticket, settings)
- `css/` — Base styles, components, theme tokens
- `js/` — Storage, utilities, app init, seed data
- `assets/` — Logo and screenshots

## Screenshots
- Dashboard: `/assets/screenshots/dashboard.png`
- Tickets: `/assets/screenshots/tickets.png`
- Ticket Detail: `/assets/screenshots/ticket-detail.png`
- Settings: `/assets/screenshots/settings.png`

## Future Improvements
- API backend and authentication
- Pagination and sorting for tickets
- Role-based access and multi-agent support
