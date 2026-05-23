# Civic tech exit interviews

- static site with html, css, js
- no react, it's a simple one page thing. and even if it goes to multiple pages, html+css+js makes sense for this one to start

## Questions

- use existing stylesheet or custom uswds?
- mobile designs
- doing the fancy css

## Todos

- layout.tsx
  - metadata description
  - og-image (see: lib/constants, etc)
  - choose font
- lib/constants
  - og-image (see: layout)
  - site redirects
- public
  - remove img once image is replaced
- src/app/
  - replace favicons
- hero image is: public/assets/uswds/img/hero.png

## Development setup

Prerequisites

* `node`

1. `npm i`
2. To run in `dev` mode, use `npm run dev`

## Deployment

`TODO`

### Environment variables

The `.env` var `NEXT_TELEMETRY_DEBUG` is set to stop Next from collecting metrics from our work.

* Next sets `npm run dev` builds to `NODE_ENV=development`
* Next sets `npx next build` (and `npm run start` as a result) to `NODE_ENV=production`
* In cloudflare, we have set that preview builds get `NODE_ENV=test`