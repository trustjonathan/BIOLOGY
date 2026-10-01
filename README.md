# Biology Archive

Astro-powered Biology resource archive for the Study Hub Supabase catalog.

## Local development

1. Copy `.env.example` to `.env` and set `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` using the project's public URL and anon/publishable key.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL Astro prints.

The browser uses only the public anon key. Never place `SUPABASE_SERVICE_ROLE_KEY` in a `PUBLIC_*` variable or the static site.

## Secure resource submissions

Biology contributions are uploaded to a private `biology-resource-submissions` bucket and remain pending until curator review. They are not published into `study_hub_resources` automatically.

Before enabling submissions:

1. Apply the Study Hub migration `20261001110000_study_hub_biology_submissions.sql`.
2. Deploy the `submit-biology-resource` Edge Function.
3. Configure Edge Function secrets `TURNSTILE_SECRET_KEY`, `SUBMISSION_RATE_LIMIT_SALT`, and `BIOLOGY_ARCHIVE_ALLOWED_ORIGINS`.
4. Set `PUBLIC_TURNSTILE_SITE_KEY` in local `.env` and the corresponding GitHub Actions variable.

The public archive only displays curated rows from `study_hub_resources`. Review pending submissions in Supabase, then copy approved objects into `study-hub-resources` under `documents/bio/notes/` or `documents/bio/papers/` and insert their catalog metadata. Never expose a service-role key to the browser.

## Build and deploy

`npm run build` type-checks and builds the static site to `dist/`. GitHub Actions deploys it to GitHub Pages. In repository Settings → Pages, set the build/deployment source to GitHub Actions and add the public Supabase URL/key as repository Actions variables.
