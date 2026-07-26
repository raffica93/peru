# Viaggio in Perù 2026

Sito itinerario basato su **Markdown su GitHub** + **TinaCMS** (editor) + **Astro** (pagine e mappa).

Sostituisce il workspace Notion *Viaggio in Perù*.

## Stack

| Pezzo | Ruolo |
|--------|--------|
| File `.md` in `src/content/` | Dati (tappe, giorni, checklist, pagine operative) |
| TinaCMS `/admin` | Scrivere testi e caricare foto |
| Astro | HTML, layout, mappa Leaflet |
| GitHub Pages | Hosting statico |

## Sviluppo locale

```bash
npm install
npm run dev
```

- Sito: http://localhost:4321  
- Admin Tina: http://localhost:4321/admin/index.html  

In locale Tina funziona senza Tina Cloud (salva i file sul disco).

## Contenuti

```
src/content/
  trip/index.md      # dashboard + checklist
  tappe/*.md         # 9 tappe
  giorni/*.md        # 17 giorni (con lat/lng per la mappa)
  pagine/*.md        # voli, bus, riassuntivo
  config/config.json # nav e SEO
public/uploads/      # foto caricate da Tina
```

## Deploy (GitHub Pages)

Repo pubblico: `https://github.com/raffica93/peru`  
Sito: `https://raffica93.github.io/peru/`

1. Crea il repo pubblico su GitHub e fai push di `main`.
2. **Settings → Pages → Source: GitHub Actions**.
3. (Opzionale ma consigliato per Tina online) Crea un progetto su [app.tina.io](https://app.tina.io), collega il repo, e aggiungi i secrets:
   - `PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`
4. Ogni push su `main` esegue `.github/workflows/deploy.yml`.

### Tina online

```
Browser → /admin → Tina Cloud (login) → commit su GitHub → Actions rebuild → Pages
```

Senza secrets Tina Cloud il sito viene comunque pubblicato in modalità locale build; l’editor online di produzione richiede Tina Cloud.

## Privacy

Repo **pubblico**: non committare PNR, PIN, date di nascita, telefoni o email.  
Orari voli/bus e logistica sì; codici prenotazione restano su email/PDF offline.

## Script

| Comando | Uso |
|---------|-----|
| `npm run dev` | Dev con Tina + Astro |
| `npm run build` | Build produzione (Tina Cloud se configurato) |
| `npm run build:local` | Build offline senza Tina Cloud |
| `npm run preview` | Anteprima della cartella `dist` |
