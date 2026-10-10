# Biology Archive

Astro-powered Biology resource archive for the Study Hub Supabase catalog.

## Local development

1. Copy `.env.example` to `.env` and set `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` using the project's public URL and anon/publishable key.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL Astro prints.

The browser uses only the public anon key. Never place `SUPABASE_SERVICE_ROLE_KEY` in a `PUBLIC_*` variable or the static site.

## Secure resource submissions

New Biology archive and reader contributions are uploaded to the shared private `study-hub-contributions` bucket under `contribution/`. Archive-form details remain in `study_hub_biology_submissions`; reader submissions are unclassified for manual sorting. Neither upload path publishes files into `study_hub_resources` automatically. Existing pending files in the older private bucket remain there.

Before enabling submissions:

1. Apply `20261001110000_study_hub_biology_submissions.sql` and the shared inbox migration `20261009150000_study_hub_contributions_inbox.sql`.
2. Deploy `submit-biology-resource` and `submit-resource-contribution`.
3. Configure Edge Function secrets `TURNSTILE_SECRET_KEY`, `SUBMISSION_RATE_LIMIT_SALT`, `BIOLOGY_ARCHIVE_ALLOWED_ORIGINS`, and `STUDY_HUB_ALLOWED_ORIGINS`.
4. Set `PUBLIC_TURNSTILE_SITE_KEY` in local `.env` and the corresponding GitHub Actions variable.

The public archive only displays curated rows from `study_hub_resources`. Review pending submissions in Supabase, then copy selected objects from `study-hub-contributions/contribution/` into `study-hub-resources` under `documents/bio/notes/` or `documents/bio/papers/` and insert their catalog metadata. Never expose a service-role key to the browser.

## Build and deploy

`npm run build` type-checks and builds the static site to `dist/`. GitHub Actions deploys it to GitHub Pages. In repository Settings → Pages, set the build/deployment source to GitHub Actions and add the public Supabase URL/key as repository Actions variables.
