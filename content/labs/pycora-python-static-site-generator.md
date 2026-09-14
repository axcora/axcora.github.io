---
layout: post.dax
badge: SSG Python
group: Pycora Core
status: core
title: "Pycora — Python Static Site Generator | Blast Fast Markdown + YAML + Jinja"
description: "Python static site generator built for speed and elegance. Markdown + YAML + Jinja, 2 engines Medusa Pro & Nyi Blorong Simple, nested content, tags all formats, ready in 0.87s."
video:
  id: N3x3oQFju1w
  info: "Pycora Demo youtu.be/PAirgxm3Un0 — Python SSG blast fast, Medusa vs Nyi Blorong — Lite YouTube"
date: 2026-08-02
tags: [Pycora, Python SSG, static site generator, markdown, Medusa, Nyi Blorong, Axcora]
source_code: https://github.com/mesinkasir/pycora
order: https://www.fiverr.com/creativitas/design-your-website-with-phyton-django
---

### Python Static Site Generator — Blast Fast for your blog.

As documented on pycora.axcora.com and github.com/mesinkasir/pycora.

Pycora is a Python SSG built with Python, Markdown, YAML, Jinja2 — minimal, elegant, pro. No bloat, no database.

**Choose your engine — 2 versions as stated:**

- **MEDUSA Full Pro — Recommended for main to look PRO:** Advanced PAX engine, `content/posts/*.md` AND `content/posts/hello/*.md` both work, Tags ALL formats `- a`, `['a','b']`, `a, b`, single, `layouts/post` = `layouts/posts` auto, PAX .pax + aggressive loader + silent fallback, chainableUndefined, slice fix `[:3]` to `| limit(3)`. Build: Ready in 0.87s - 41 files - MEDUSA v2.4.6
- **NYI BLORONG Simple:** Pure Jinja2 .html familiar, Markdown + YAML only, lightweight zero learning curve, Tags Pagination SEO Sitemap RSS. Build: Done! 2 posts, 2 tags.

**Quick start from repo:**

```bash
git clone https://github.com/mesinkasir/pycora.git
cd pycora
git checkout medusa
python ssg.py
python dev.py
```

**Project structure:**

```bash
content/posts/*.md — posts
templates/medusa/*.pax — Medusa engine
templates/layouts/*.html — Nyi Blorong
output/ — upload to Netlify/Vercel/GitHub Pages
Requirements: Python 3.8+, pip install jinja2 markdown pyyaml watchdog then python install.py
```

Deployment: python ssg.py → upload `output/` to Edge.

Built by Axcora Technology — MIT License.

Need custom website and app with Pycora? Order via Fiverr.