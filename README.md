# Apadana Linux Website (apadanalinux.ir)

Enterprise and commercial documentation & marketing website for **Apadana Linux**, built on top of **Parch Immutable** and **bootc**.

---

## 🚀 Key Highlights

- **Framework**: [Astro 5](https://astro.build/) with TypeScript & Tailwind CSS.
- **Design System**: Parch Linux design system tokens, `#020917` dark palette, Estedad typography, official logos, and clean enterprise layout without pill badges.
- **Internationalization (i18n)**: Native bilingual support (**Persian as primary with full RTL layout**, and English with LTR layout).
- **Persistent Route Switching**: Language switcher preserves the exact document or page slug when toggling between Persian and English.
- **Content Collections & Standalone Docs**: Fully typed Markdown & MDX content collections for both **Documentation** and **Blog** articles, plus a standalone `docs/` folder.
- **20 FAQ Knowledge Base**: Comprehensive bilingual answers covering architecture, stability, licensing, migration, hardware, and SLAs.
- **Container & CI/CD Ready**: Multi-stage Dockerfile, Docker Compose, and automated GitHub Actions workflow targeting GitHub Container Registry (`ghcr.io/apadanalinux/website`).

---

## 🛠️ Development & Build (with Bun)

```bash
# Install dependencies
bun install

# Start local development server
bun run dev

# Run type check and production build
bun run build

# Preview production build locally
bun run preview
```

---

## 🐳 Docker & Container Deployment

### Local Container Run

```bash
# Build and run with Docker Compose
docker compose up -d --build

# View logs
docker compose logs -f
```

### Pulling Prebuilt Image from GHCR

```bash
docker pull ghcr.io/apadanalinux/website:latest
docker run -d -p 80:80 --name apadana-website ghcr.io/apadanalinux/website:latest
```

---

## 📝 Content Structure

- `src/content/docs/`: Website documentation content collections (`fa/`, `en/`).
- `src/content/blog/`: Engineering blog articles (`fa/`, `en/`).
- `src/data/faq.ts`: 20 bilingual enterprise FAQ entries.
- `docs/`: Standalone markdown documentation tree.
