# Portfolio — Noah Cassutti

SPA en Angular (standalone) con foco en backend. Paleta azul/gris, contenido en `src/app/data/`.

## Desarrollo

```bash
npm start
```

Abre `http://localhost:4200/`.

## Build

```bash
npm run build
```

Salida: `dist/noah-cassutti-portfolio/browser`.

## Vercel

El repo incluye `vercel.json` con el output del application builder y rewrite SPA (`/*` → `/index.html`).

```bash
npx vercel
npx vercel --prod
```

O conectá el GitHub del proyecto en el dashboard de Vercel (framework Other / Angular, output `dist/noah-cassutti-portfolio/browser`).

## Contenido

Editá `src/app/data/profile.ts` y `src/app/data/projects.ts` para actualizar bio, links y proyectos.
