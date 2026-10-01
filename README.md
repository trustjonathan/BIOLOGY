# Biology Archive

Astro-powered Biology resource archive for the Study Hub Supabase catalog.

## Local development

1. Copy `.env.example` to `.env` and set `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` using the project's public URL and anon/publishable key.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL Astro prints.

The browser uses only the public anon key. Never place `SUPABASE_SERVICE_ROLE_KEY` in a `PUBLIC_*` variable or the static site.

## Build and deploy

`npm run build` type-checks and builds the static site to `dist/`. GitHub Actions deploys it to GitHub Pages. In repository Settings → Pages, set the build/deployment source to GitHub Actions and add the public Supabase URL/key as repository Actions variables.
