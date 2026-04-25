# AGENTS.md

## Project Type

Blazor WebAssembly (.NET 9.0) with Vite + Tailwind CSS frontend

## Run Commands

```bash
# Dev server (both required concurrently)
cd "User Site/vite-project" && npm run watch   # rebuilds frontend on .razor/.ts changes
dotnet watch run                               # runs Blazor dev server

# Production build
cd "User Site/vite-project" && npm run build
dotnet publish -c Release -p:UseAppHost=false
```

## Build Output

Vite outputs to `wwwroot/js/assets/` (main.js, style.css)
Blazor publishes to `bin/Release/*/publish/wwwroot`

## Deployment

GitHub Actions workflow at `.github/workflows/deploy.yml`
- Triggers on push to master
- Uses GitHub Pages (source: Actions)
- Creates `.nojekyll` and `404.html` for SPA fallback
- This is a **user site** (hkstudio011.github.io) — base href is "/"

## Key Structure

```
User Site/
├── Pages/                 # Blazor pages
├── wwwroot/               # Static assets
│   └── js/assets/         # Vite build output
├── vite-project/          # Frontend source (managed by Vite)
│   ├── src/main.ts        # Entry point
│   └── src/style.css     # Tailwind imports
└── .github/workflows/    # CI/CD
```

## Important Notes

- Tailwind v4 requires Node 18+
- Run `npm run watch` in vite-project BEFORE `dotnet watch run` to auto-rebuild CSS
- 404.html fallback required for SPA routing on GitHub Pages