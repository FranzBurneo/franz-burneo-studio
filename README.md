# Franz Burneo Studio

Web comercial principal para ofrecer servicios de desarrollo web y software a negocios locales en Ecuador.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Vercel

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Demos usadas

- Stay Loja: https://stayloja.com/
- Café Andino: https://cafe-andino-six.vercel.app/
- ReservaPro: https://reservapro-demo.vercel.app/

## Despliegue en Vercel

1. Subir el repositorio a GitHub.
2. Conectar el repo en Vercel.
3. Configurar el dominio `franzburneo.com`.
4. Configurar `NEXT_PUBLIC_SITE_URL=https://franzburneo.com` si aplica.
5. Verificar que `/robots.txt` y `/sitemap.xml` respondan correctamente.

## Google Search Console

1. Publicar el sitio en el dominio final.
2. Verificar la propiedad en Google Search Console.
3. Si Google entrega un archivo tipo `googleXXXXXXXXXXXX.html`, copiarlo en `public/googleXXXXXXXXXXXX.html` y mantenerlo en el repositorio.
4. Comprobar `https://franzburneo.com/robots.txt`.
5. Comprobar `https://franzburneo.com/sitemap.xml`.
6. Enviar `sitemap.xml`.
7. Inspeccionar la URL principal.
8. Solicitar indexación.
9. Esperar el rastreo.
10. Revisar `site:franzburneo.com`.

## Checklist técnico de producción

- Metadata, canonical, Open Graph y Twitter Card configurados.
- JSON-LD con WebSite, ProfessionalService, catálogo de servicios y FAQPage.
- Favicon, iconos y manifest configurados.
- Sitemap y robots generados por Next.js.
- Sin URLs de localhost en metadata de producción.
- Enlaces de demos y WhatsApp funcionando.
- `npm run lint` y `npm run build` sin errores.
