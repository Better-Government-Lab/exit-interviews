# Civic tech exit interviews

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