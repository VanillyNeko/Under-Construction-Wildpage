# 📦 Under Construction Sailor Moon Themed Wildpage

A self-contained Vue + Docker container that displays a themed **"Under Construction"** placeholder page.  
Text on the screen updates to the current domain pointed at it.

> 🐳 Docker image:  
> `ghcr.io/vanillyneko/under-construction-wildpage:latest`

## 🚀 Features

- Pastel anime theme for general subdomains/domains
- Dynamic domain-based theming at runtime
- Lightweight, production-ready container
- Published via GitHub Container Registry (GHCR)
- Instant share previews via Open Graph tags

## 🧰 Usage with Docker Compose

```bash
docker compose up -d
```

Or run it manually:

```bash
docker pull ghcr.io/vanillyneko/under-construction-wildpage:latest
docker run -d -p 8080:80 ghcr.io/vanillyneko/under-construction-wildpage:latest
```

Then visit:

- `http://localhost:8080/` – pastel anime placeholder

## 🧪 Local Development

```bash
npm install
npm run dev
```

## 🛠 Build for Production

```bash
npm run build
docker build -t under-construction .
```

## 🐙 GitHub Container Registry

```bash
docker pull ghcr.io/vanillyneko/under-construction-wildpage:latest
```

## 📄 Docker Compose Example

```yaml
version: '3.8'

services:
  under-construction:
    image: ghcr.io/vanillyneko/under-construction-wildpage:latest
    container_name: under-construction-page
    restart: unless-stopped
    ports:
      - "8080:80"
```

## 📸 Embed Preview

When this site is shared (on Discord, iMessage, etc), a generic "Under Construction" preview appears using static [Open Graph meta tags](https://ogp.me/).

## 📦 Project Structure

```
.
├── Dockerfile
├── compose.yml
├── index.html
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── WardenPlaceholder.vue
│   └── components/
│       └── UnderConstructionEmbed.vue
└── .github/
    └── workflows/
        └── docker-ghcr.yml
```

## 🧾 License

MIT License  
© [VanillyNeko](https://github.com/VanillyNeko)