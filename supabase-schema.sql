-- ============================================================
--  Supabase database voor het portfolio van Tobias Gommers
--  Plak dit volledige bestand in Supabase -> SQL Editor -> Run
-- ============================================================

-- 1) De tabel met artikelen
create table if not exists public.articles (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  category    text,
  title       text not null,
  excerpt     text,
  content     text,
  sort_order  integer default 0,
  cover       integer default 0,
  published   boolean default true,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- Houd updated_at automatisch bij
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_articles_updated on public.articles;
create trigger trg_articles_updated
  before update on public.articles
  for each row execute function public.set_updated_at();

-- 2) Beveiliging (Row Level Security)
alter table public.articles enable row level security;

-- Iedereen mag GEPUBLICEERDE artikelen lezen (de openbare site)
drop policy if exists "public can read published" on public.articles;
create policy "public can read published"
  on public.articles for select
  using (published = true);

-- Ingelogde beheerders mogen alles lezen ...
drop policy if exists "authenticated can read all" on public.articles;
create policy "authenticated can read all"
  on public.articles for select
  to authenticated
  using (true);

-- ... en toevoegen, wijzigen en verwijderen
drop policy if exists "authenticated can insert" on public.articles;
create policy "authenticated can insert"
  on public.articles for insert
  to authenticated
  with check (true);

drop policy if exists "authenticated can update" on public.articles;
create policy "authenticated can update"
  on public.articles for update
  to authenticated
  using (true) with check (true);

drop policy if exists "authenticated can delete" on public.articles;
create policy "authenticated can delete"
  on public.articles for delete
  to authenticated
  using (true);

-- ============================================================
--  Klaar! De startcontent (Tobias' bestaande artikelen) voeg je
--  daarna toe via de beheerpagina /admin met de knop
--  "Importeer startcontent" -- daar hoeft hier dus geen SQL voor.
-- ============================================================
