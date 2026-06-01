# Portfolio Tobias Gommers — website

Een sportieve, dynamische portfolio-site gebouwd met **Next.js**, gehost op **Vercel**,
met **Supabase** als backend zodat artikelen toegevoegd en gewijzigd kunnen worden via
een beveiligde beheerpagina (`/admin`).

De site werkt **meteen** — ook vóór je Supabase koppelt toont hij Tobias' bestaande
artikelen (de "startcontent"). Zodra je Supabase instelt, beheer je alles online.

---

## Wat zit erin?

- Homepage met hero, "over mij", artikel-overzicht en contact
- Losse artikelpagina's (`/articles/luk-1`, enz.)
- Beveiligde beheerpagina `/admin` (inloggen met e-mail + wachtwoord)
- Knop "Importeer startcontent" die Tobias' bestaande teksten in de database zet
- Eenvoudige opmaak voor artikelen: `## kopje`, `- opsomming`, `**vet**`, lege regel = nieuwe alinea

---

## Snelle start in 6 stappen

Je hebt drie gratis accounts nodig: **GitHub**, **Vercel** en **Supabase**.

### Stap 1 — Zet de code op GitHub

1. Maak een account op https://github.com en klik op **New repository**.
2. Geef het een naam (bijv. `portfolio-tobias`) en klik **Create repository**.
3. Upload deze projectmap. Het makkelijkst:
   - Klik op de repo-pagina op **"uploading an existing file"**.
   - Sleep **alle bestanden uit de map `site/`** erin (dus `app/`, `lib/`, `components/`,
     `package.json`, enz. — niet de map `site` zelf, maar de inhoud).
   - Klik **Commit changes**.

> Heb je `git` op je computer? Dan kan het ook zo, vanuit de map `site/`:
> ```bash
> git init
> git add .
> git commit -m "Eerste versie portfolio"
> git branch -M main
> git remote add origin https://github.com/JOUW-NAAM/portfolio-tobias.git
> git push -u origin main
> ```

### Stap 2 — Zet de site live op Vercel

1. Maak een account op https://vercel.com (log in met GitHub — dat is het makkelijkst).
2. Klik **Add New… → Project** en kies je GitHub-repo.
3. Vercel herkent Next.js automatisch. Klik **Deploy**.
4. Na ~1 minuut is je site live op een adres als `https://portfolio-tobias.vercel.app`.

Op dit moment werkt de site al, met de startcontent. De volgende stappen voegen de
database (Supabase) toe zodat je artikelen kunt beheren.

### Stap 3 — Maak een Supabase-project + database

1. Maak een account op https://supabase.com en klik **New project**.
   Kies een naam en een wachtwoord voor de database (bewaar dat ergens).
2. Wacht tot het project klaar is (~2 min).
3. Ga in het linkermenu naar **SQL Editor** → **New query**.
4. Open het bestand **`supabase-schema.sql`** uit dit project, kopieer de **hele** inhoud,
   plak die in de editor en klik op **Run**. Dit maakt de tabel `articles` aan met de
   juiste beveiliging.

### Stap 4 — Maak een beheerder (inlog-account)

1. Ga in Supabase naar **Authentication → Users → Add user → Create new user**.
2. Vul een e-mailadres en wachtwoord in (dit is waarmee jij/Tobias straks inlogt op `/admin`).
3. Zet **"Auto Confirm User"** aan, zodat het account direct werkt. Klik **Create user**.

### Stap 5 — Koppel Supabase aan de site (omgevingsvariabelen)

1. Ga in Supabase naar **Project Settings → API**. Je ziet daar twee waarden:
   - **Project URL**
   - **anon public** key
2. Ga in **Vercel** naar je project → **Settings → Environment Variables** en voeg toe:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | jouw Project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | jouw anon public key |

3. Ga naar het tabblad **Deployments**, open de laatste deployment en klik op
   **Redeploy** (de drie puntjes ⋯ → Redeploy). Zo pikt de site de nieuwe instellingen op.

### Stap 6 — Vul de database en ga aan de slag

1. Ga naar `https://JOUW-SITE.vercel.app/admin`.
2. Log in met het account uit stap 4.
3. Klik op **"Importeer startcontent"** — nu staan Tobias' artikelen in de database.
4. Klaar! Je kunt nu artikelen toevoegen, bewerken en verwijderen. Wijzigingen zijn
   direct zichtbaar op de site.

---

## Lokaal draaien (optioneel, voor wie wil testen op de eigen computer)

Je hebt [Node.js](https://nodejs.org) nodig.

```bash
cd site
npm install
cp .env.local.example .env.local   # vul daarin je Supabase URL + key
npm run dev
```

Open daarna http://localhost:3000

---

## Een artikel schrijven (opmaak)

In het inhoud-veld kun je deze eenvoudige opmaak gebruiken:

```
## Dit wordt een tussenkop

Gewone tekst wordt een alinea. Een lege regel start een nieuwe alinea.

**Dit is vetgedrukt.**

- Dit is een opsomming
- Nog een punt
```

---

## Veelgestelde vragen

**De site toont nog de startcontent terwijl ik in /admin heb bewerkt.**
Heb je stap 5 (omgevingsvariabelen) én de redeploy gedaan? Zonder die koppeling valt de
site terug op de startcontent.

**Ik kan niet inloggen op /admin.**
Controleer of je in Supabase een gebruiker hebt aangemaakt (stap 4) met "Auto Confirm"
aan, en of de twee omgevingsvariabelen in Vercel exact goed staan.

**Mijn wijzigingen zijn niet zichtbaar.**
De pagina's halen verse data op bij elke bezoek. Ververs de pagina (Ctrl/Cmd + R).

---

## Technische details

- **Next.js 14** (App Router) — `app/`
- **Supabase** (`@supabase/supabase-js`) — database + login
- Geen extra build-configuratie nodig; Vercel bouwt automatisch.
- Styling staat in `app/globals.css` (lettertypes Anton + Inter, kleuren bovenin aanpasbaar).
- Startcontent staat in `lib/seed.js`.
