# Excel Quest

Excel Quest is a Jekyll-powered curriculum site that teaches Excel skills with puzzle-first lessons inspired by code.org. Each lesson is a markdown file in `_lessons/` that defines metadata, datasets, and validator details for instant feedback.

## Quick start

```bash
bundle install
bundle exec jekyll serve --livereload
```

Visit `http://localhost:4000` to explore the catalog. Progress persists locally via `localStorage` and can be reset from the Progress drawer.

## Create a new lesson

1. Copy `lesson-template.md` into `_lessons/your-slug.md`.
2. Update the front matter fields:
   - `title`, `pitch`, `goal`, `tool`, `difficulty`, `duration`, `icon`.
   - `dataset` headers/rows (optional).
   - `challenges`: each needs `title`, `prompt`, optional steps, and a `validator` with `type`, `answer`, and optional `hint`.
3. Write the story/context below the front matter. Markdown is supported.
4. `bundle exec jekyll serve` to preview. Lessons appear automatically on the home page, sorted by difficulty.

### Validator types

- `text` (default): answers are compared case-insensitively.
- `number`: converts both expected and learner responses to `Number` before comparison.

## Tracks and navigation

- Primary nav items: `_data/navigation.yml`.
- Track cards: `_data/tracks.yml`.

## Deployment

This is a static Jekyll site. Deploy via GitHub Pages, Netlify, or any static host by running:

```bash
bundle exec jekyll build
```

The compiled site lives in `_site/`.
