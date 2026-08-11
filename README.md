# By the Beach

My personal website – server-side rendered with Node.js/Express, with Vite powering hot module replacement (HMR) in development.

## About

This project uses a lightweight Express server to render HTML on the server for every request. In development, Vite runs as Express middleware to provide instant hot reload whenever files change. There is no separate build step required for development.

## Prerequisites

- Node.js 18 or later
- Yarn

## Setup

```bash
yarn install
```

## Running the app

### Development (with Vite HMR / hot reload)

```bash
yarn dev
```

Vite middleware provides instant browser hot reload on file changes.

### Production

```bash
yarn start
```

The server starts on [http://localhost:3000](http://localhost:3000) by default. Set the `PORT` environment variable to use a different port.

## Adding new pages

Routes live in `src/routes/`. To add a new page:

1. Create a new file in `src/routes/` (e.g. `about.js`) and define an Express `Router` that calls `renderPage()` from `src/template.js`.
2. Mount it in `server.js` with `app.use('/about', aboutRouter)`.

The shared `renderPage({ title, body })` helper in `src/template.js` keeps the HTML structure consistent across all pages.

