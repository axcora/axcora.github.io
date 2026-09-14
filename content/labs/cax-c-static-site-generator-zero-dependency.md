---
layout: post.dax
badge: CAX C
group: CAX Core
status: core
title: "CAX SSG — Static Site Generator in C | Zero Dependency, 50ms Build, Single Binary"
description: "High-performance static site generator written in pure C99 — zero dependencies, <50ms build for 100 pages, <500KB binary, <5MB RAM. Markdown + YAML frontmatter, Eleventy-style collections, auto SEO."
video:
  id: 5hNO1FrOhQA
  info: "CAX Demo youtu.be/5hNO1FrOhQA — C SSG pure C99 zero dep 50ms build — Lite YouTube"
date: 2026-08-02
tags: [CAX, C SSG, static site generator, pure C, Jamstack, Axcora, Eleventy]
source_code: https://github.com/mesinkasir/cax
order: https://www.fiverr.com/creativitas/create-your-custom-website-and-app
---

### CAX SSG — Static Site Generator in C — C for Speed. Built by AXCORA.

As documented on ca.axcora.com / cax.axcora.com and github.com/mesinkasir/cax.

High-performance, zero-dependency static site generator written in pure C. Inspired by Eleventy and Jekyll DX, but engineered for raw C speed. No Node.js, Ruby, Python. Single binary.

**Why CAX as stated on cax.axcora.com:**
The web became a factory fire — 300MB node_modules to render a paragraph. CAX returns to first principles: single binary, sub-second builds, output so clean you can read it like a blueprint. Forged for writers, engineers, ateliers who value longevity over trends. Markdown in, timeless HTML out. No runtime. No tracking.

**Tech Core from GitHub:**

- **Pure C99:** No Node.js, Ruby, Python. Single binary 200KB-1.2MB
- **Zero Dependencies:** GCC + Make only, <500KB binary
- **Blazing Fast:** Build 100 pages <50ms, <5MB RAM — 1000 pages 420ms on M1 as stated on site, incremental <30ms
- **Markdown + Frontmatter:** YAML frontmatter support
- **Zero JS Runtime:** Pure HTML/CSS, optional progressive islands

**Features — Eleventy-style but C speed:**

- **Pagination Controllers:** Any `content/*.md` with `collection:` + `pagination:` becomes list page
- **Dynamic Collections:** Every folder in `content/` is a collection
- **Multi Layout Support:** `posts-list.cax`, `services-list.cax`, `portfolio-grid.cax` fully dynamic
- **Advanced Template Engine:** `{{ variables }}`, `{% for %}`, `{% if %}`, `{% include %}`
- **Pagination Object:** `pagination.items`, `pagination.prev_url`, `pagination.next_url`, `pagination.current_page`, `pagination.total_pages`, `pagination.total_items`

**SEO & Production Ready — auto-generated in site/ on every build:**

- Tags & Taxonomies — automatic `/tags/{tag}/` pages
- Sitemap — full `sitemap.xml` including pagination
- Feeds — `feed.xml`, `rss.xml`, `feed.json` JSON Feed 1.1
- Robots — auto `robots.txt` with sitemap reference
- Built-in Server — `cax start` serves `site/` at http://localhost:8080

**Project structure from repo:**

- `content/index.md` → `/index.html`
- `content/posts.md` controller — `collection: posts` + `pagination: 6` → `/posts/`, `/posts/page/2/`
- `templates/layouts/default.cax`, `home.cax`, `posts-list.cax`
- `_data/metadata.json` — `site.title`, `site.url`
- `public/` — css, img copied
- `site/` — generated output

**Quick start:**

```bash
git clone https://github.com/mesinkasir/cax.git
cd cax
mingw32-make clean && mingw32-make
# or make linux
cax init
cax build
cax start
```

Performance as stated:

Build Time 100 pages <50ms
Binary Size <500KB
Memory Usage <5MB
Dependencies Zero
Mission: Restore craftsmanship to publishing. One binary that will outlive frameworks.

Docs: cax.axcora.com — Starter: cax.axcora.com/starter/ — Minimalis: cax.axcora.com/minimalis/

Video proof lite — loads on click only. CAX SSG — Eleventy DX with C Speed.
