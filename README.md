# Franz Burneo Studio

Web comercial bilingüe para ofrecer desarrollo web y software a negocios locales en Ecuador.

## URLs principales

- Español: `https://franzburneo.com/`
- Inglés: `https://franzburneo.com/en`
- Sitemap: `https://franzburneo.com/sitemap.xml`
- Robots: `https://franzburneo.com/robots.txt`

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Vercel

## Cómo ejecutar

```bash
npm install
npm run dev
npm run build
```

## Variables de entorno

Crear `.env.local` solo si necesitas sobrescribir los valores por defecto:

```bash
NEXT_PUBLIC_SITE_URL=https://franzburneo.com
NEXT_PUBLIC_WHATSAPP_PHONE=593961100356
NEXT_PUBLIC_CONTACT_EMAIL=franzdavidburneo@gmail.com
```

No subir archivos `.env` reales al repositorio.

## Demos usadas

- Stay Loja: `https://stayloja.com/`
- Café Andino: `https://cafe-andino-six.vercel.app/`
- ReservaPro: `https://reservapro-demo.vercel.app/`

## Despliegue en Vercel

1. Subir el repositorio a GitHub.
2. Conectar el repo en Vercel.
3. Configurar el dominio `franzburneo.com`.
4. Configurar `NEXT_PUBLIC_SITE_URL=https://franzburneo.com` si aplica.
5. Verificar que `/`, `/en`, `/robots.txt` y `/sitemap.xml` respondan correctamente.

## Checklist SEO

- `/` tiene canonical `https://franzburneo.com/`.
- `/en` tiene canonical `https://franzburneo.com/en`.
- `hreflang` incluye `es`, `en` y `x-default`.
- `sitemap.xml` incluye `/` y `/en`.
- `robots.txt` permite rastreo y apunta al sitemap correcto.
- Open Graph y Twitter Card están configurados.
- JSON-LD incluye WebSite, ProfessionalService, catálogo de servicios y FAQPage.
- No hay URLs locales de desarrollo en metadata de producción.

## Google Search Console

1. Publicar el sitio en el dominio final.
2. Verificar la propiedad en Google Search Console.
3. Si Google entrega un archivo tipo `googleXXXXXXXXXXXX.html`, copiarlo en `public/googleXXXXXXXXXXXX.html` y mantenerlo en el repositorio.
4. Comprobar `https://franzburneo.com/robots.txt`.
5. Comprobar `https://franzburneo.com/sitemap.xml`.
6. Enviar `sitemap.xml`.
7. Inspeccionar `https://franzburneo.com/`.
8. Inspeccionar `https://franzburneo.com/en`.
9. Solicitar indexación.
10. Revisar `site:franzburneo.com`.

## Checklist técnico

- `npm run lint` sin errores.
- `npm run build` sin errores.
- WhatsApp usa el número `593961100356`.
- Las demos abren en pestaña nueva.
- El selector de idioma funciona en desktop y móvil.
- El atributo `lang` cambia entre `es` y `en`.
