# CLAUDE.md — KOVA Ecosystem Master Context
> Última actualización: 2026-05-07. Este archivo es la fuente de verdad para Claude Code y Gemini CLI sobre el ecosistema completo de KOVA.

---

## QUIÉN ES MIGUEL

Miguel De Jongh — fundador y único operador de KOVA, estudio independiente de automatización e IA para negocios. Trabaja solo, sin equipo, sin presupuesto pagado actualmente. Idioma de trabajo: español. Nivel técnico alto pero prefiere velocidad sobre perfección arquitectural prematura. Tiene inseguridad sobre si sus mercados objetivo están saturados — la respuesta honesta es que en LATAM no lo están.

**Contacto actual:** migueldejongh23@gmail.com (Gmail personal mientras consigue dominio)
**Meta en 6 meses:** 5 clientes recurrentes a $300-500/mes = $1,500-2,500/mes MRR

---

## EL ECOSISTEMA KOVA — MAPA COMPLETO

```
/home/migueldejongh/
├── kova-landing/          ← LANDING KOVA (DEPLOYADA EN VERCEL) ← ESTE REPO
├── cataloptic/            ← CLIENTE ACTIVO (óptica en Santiago Chile, 2 semanas)
├── receptionist/          ← PRODUCTO CORE (AI receptionist multi-tenant)
├── lead-generator/        ← HERRAMIENTA DE PROSPECCIÓN (Python + Ollama)
├── goatbarbershop/        ← TEMPLATE BASE / cliente que se echó para atrás
├── local-business-template/ ← TEMPLATE para clientes locales (React + Vite)
├── orquestador/           ← Mastra AI agents (solo weather agent por ahora, no prioritario)
├── nexus/                 ← Dashboard interno futuro (Next.js vacío, usar para ops)
├── cataloptic/            ← Cliente activo (ver sección dedicada)
└── projects/demo-nail-salon/ ← Demo nail salon (mismo stack que local-business-template)
```

---

## 1. KOVA LANDING — `/home/migueldejongh/kova-landing/`

### Stack
- React 18 (CDN unpkg, sin bundler)
- Tailwind CSS v4 Browser CDN
- Babel Standalone para JSX
- WebGL fragment shader (beam de energía animado, canvas fijo)
- Google Fonts: Inter Tight, Instrument Serif, JetBrains Mono
- Servidor local: `node serve.mjs` → localhost:3000

### Deploy
- **URL producción:** https://kova-landing-ten.vercel.app
- **Vercel team:** migueldejongh23s-projects (cuenta personal, free tier)
- **Comando deploy:** `vercel deploy --prod --yes --scope migueldejongh23s-projects`
- Git inicializado, rama `main`, un solo commit inicial

### Archivo único
Todo el sitio vive en **`index.html`** (~1800+ líneas). No hay build step.

### Variables CSS
```css
--ink: oklch(0.09 0.02 285)     /* fondo oscuro */
--bone: oklch(0.93 0.02 90)     /* texto principal */
--violet: oklch(0.72 0.22 285)  /* acento violeta */
--mute: oklch(0.48 0.04 285)    /* texto muted */
--mute-2: oklch(0.62 0.04 285)  /* texto muted secundario */
```

### Componentes principales (todos en index.html)
- `Topbar` — header con nav `hidden md:flex`, pill "2 slots · Q3"
- `Hero` — h1 `clamp(36px,8.6vw,140px)`, grid 12 cols, aside card de engagement
- `EnergyBeam` — WebGL canvas fijo `position:fixed z-index:1`, shader de partículas
- `Services` — 6 ServiceCards en beam layout (desktop) / flex-col (mobile)
- `ServiceCard` — acepta `viz` (desktop) y `vizMobile` (mobile)
- `Metrics` — 4 MetricCards + ContactCard en beam layout
- `ContactCard` — "Let's talk" con stats de estudio
- `Footer` — simple, datos del estudio

### Vizzes desktop (aspectRatio, absolute positioned)
- `VizOrderFlow` — SVG animado con packet travel CSS
- `VizWeb` — browser mockup + Lighthouse 98
- `VizReceptionist` — inbox 3 canales + chat AI
- `VizInventory` — barras de stock + forecast
- `VizTotem` — kiosk selector + KDS
- `VizLeadScoring` — pipeline de leads rankeados

### Vizzes mobile (nueva height natural, no aspectRatio)
- `VizOrderFlowMobile`, `VizWebMobile`, `VizReceptionistMobile`
- `VizInventoryMobile`, `VizTotemMobile`, `VizLeadScoringMobile`
- Se muestran con `block lg:hidden`, las desktop con `hidden lg:block`

### Responsive rules
- `lg` = 1024px (breakpoint principal)
- Mobile: `flex flex-col gap-5 lg:hidden`
- Desktop: `hidden lg:grid` con `gridTemplateColumns: "1fr clamp(60px,8vw,160px) 1fr"`
- Beam canvas mobile: `opacity: 0.35`
- Surface cards mobile: fondo `rgba(8,6,18,0.88)` para legibilidad sobre el beam

### Animaciones CSS clave (en `<style>`)
- `packetTravel` — offset-path animation para los puntos del SVG
- `inbox-row` — fade+slide in para filas de inbox
- `inv-bar` — grow animation para barras de stock
- `score-arc` — dashoffset animation para el círculo Lighthouse
- `pulse-dot` — opacity pulse para indicadores live
- `hub-ring` — rotation para el anillo del hub SVG
- `totem-btn` — fade in para botones del kiosk

### Regla crítica de Tailwind v4 CDN
**NUNCA usar clases CSS custom para layout responsivo.** Tailwind v4 CDN las sobreescribe.
Siempre usar utilidades nativas: `hidden lg:block`, `flex lg:hidden`, `lg:grid`, etc.

### Pendiente en kova-landing
- [ ] Agregar email real cuando Miguel cree Gmail (cambiar `hello@kova.studio` → su Gmail)
- [ ] Agregar link Instagram cuando lo cree (`@kovastudio` recomendado)
- [ ] Dominio propio `kova.studio` (~$10/año Cloudflare cuando tenga presupuesto)
- [ ] GitHub repo + CI/CD con Vercel (instalar `gh` CLI con `sudo apt install gh`)

---

## 2. CATALOPTIC — `/home/migueldejongh/cataloptic/`

### Quiénes son
Óptica premium en Santiago, Chile. Av. Apoquindo 853, Oficina 507.
- Tel: +56 9 6717 9193 (WhatsApp: 56967179193)
- Email: cataloptica@gmail.com
- Instagram: @cataloptic

### Stack
- Next.js 16.2.4 (App Router) + React 19
- Tailwind CSS v4
- Framer Motion + Zustand + React Hook Form + Zod
- Supabase (instalado, NO conectado aún)
- Vercel linked: `prj_GxHh54wuFpEEHmVYV2EbmbxNQZIp` team `team_lOW4N452cEEPAhnAczlPFAFN`

### Paleta / Estética (NO CAMBIAR)
- Warm off-white: `#F7F5F2`
- Gold accent: `#C9A96E`
- Dark navy: `#0A0A0A`
- Fuentes: Cormorant (serif, headings) + DM Sans (body)

### Estado actual: 70% UI completo, 0% backend
**FUNCIONA:**
- Todas las páginas y rutas (/, /tienda, /tienda/[slug], /configurador, /examen)
- Wizard del configurador completo (5 pasos)
- Navbar con menú mobile
- Footer completo
- Form de examen (UI) — muestra confirmación pero NO guarda nada

**NO FUNCIONA (pendiente para Gemini):**
- Form examen no persiste datos (`TODO: conectar Supabase/WhatsApp` en `app/examen/page.tsx` línea 14)
- Botón "Agregar al carrito" en `PasoResumen.tsx` líneas 113-117 — no tiene onClick
- Cart icon en Navbar — cursor-pointer pero sin handler
- Imágenes: todos los productos tienen placeholder (`<span>foto hero</span>`, etc.)
- Páginas 404: `/guia-receta`, `/tallas`, `/envios`, `/faq`
- Supabase: dependencia instalada pero sin `lib/supabase.ts` ni `.env.local`
- API routes: no existe directorio `/api/`
- Configurador no recibe contexto del producto desde `/tienda/[slug]`
- JSON-LD en layout.tsx línea 51: teléfono incompleto `+569XXXXXXXX`

### Para Gemini — tareas Cataloptic en orden
1. Crear `.env.local` con `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. Crear `lib/supabase.ts` con cliente Supabase
3. Crear tabla `examen_bookings` en Supabase (ver schema abajo)
4. Conectar form `/app/examen/page.tsx` → POST a `/api/examen`
5. Crear `/app/api/examen/route.ts` que guarda en Supabase y envía WhatsApp
6. Implementar cart store con Zustand en `lib/cart-store.ts`
7. Conectar botón "Agregar al carrito" en `PasoResumen.tsx`
8. Crear drawer/modal del carrito en Navbar
9. Checkout: resumen → mensaje WhatsApp pre-armado
10. Crear páginas simples para footer (pueden ser estáticas con contenido básico)
11. Leer parámetro `?produto=` en configurador para pre-seleccionar producto

### Schema SQL Cataloptic (correr en Supabase dashboard)
```sql
create table examen_bookings (
  id uuid default gen_random_uuid() primary key,
  nombre text not null,
  telefono text not null,
  email text,
  fecha date not null,
  hora text not null,
  motivo text,
  created_at timestamptz default now()
);

create table products (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  nombre text not null,
  categoria text not null,
  precio_base numeric not null,
  descripcion text,
  imagenes text[], -- array de paths en /public/images/
  activo boolean default true,
  created_at timestamptz default now()
);

create table orders (
  id uuid default gen_random_uuid() primary key,
  producto_id uuid references products(id),
  producto_slug text,
  uso text, -- simple_vision | progresivo | sin_receta | solo_armazon
  material text,
  tratamiento text,
  precio_total numeric,
  receta jsonb, -- { od_esfera, od_cilindro, oi_esfera, oi_cilindro, adicion }
  estado text default 'pendiente',
  whatsapp_enviado boolean default false,
  created_at timestamptz default now()
);
```

---

## 3. RECEPTIONIST — `/home/migueldejongh/receptionist/`

### Qué es
AI Receptionist multi-tenant. El producto más completo de KOVA. Next.js + Prisma + PostgreSQL.
Tiene integración con VAPI (voice AI) ya implementada en `/src/app/api/vapi/`.

### Modelo de datos (Prisma schema)
- `Business` — entidad raíz (un negocio = un tenant)
- `Service` — servicios que ofrece el negocio
- `Customer` — clientes del negocio
- `Appointment` — citas agendadas
- `Call` — registro de llamadas (VAPI)

### Estado
- Arquitectura multi-tenant lista
- VAPI integrado
- Dashboard en `/src/app/dashboard/`
- API routes: appointments, auth, calendar, customers, services, settings
- **PENDIENTE:** WhatsApp Business API integration, deploy productivo

### Este es el producto que se vende a clientes
Cuando un cliente firma → se crea un registro `Business` → se configura con sus datos → se le da acceso al dashboard.

---

## 4. LEAD GENERATOR — `/home/migueldejongh/lead-generator/`

### Qué es
Script Python que genera leads de negocios locales por estado de USA usando Google Places API + Ollama local (qwen2.5-coder:14b).

### Archivos importantes
- `generate_landing.py` — script principal
- `credentials.json` — Google API credentials (NO SUBIR A GIT)
- `leads_*.csv` / `leads_*.xlsx` — leads generados (cientos de archivos por estado)

### Uso
```bash
python3 generate_landing.py --vertical "nail salon"
python3 generate_landing.py --vertical "dental clinic" --name "Smile Dental" --city "Miami FL"
```

### Verticals configurados
nail salon, hair salon (más se pueden agregar en VERTICAL_CONFIG)

### Template base
Lee componentes de `/home/migueldejongh/goatbarbershop/src/components/landing/` y los adapta con el LLM.

---

## 5. ORQUESTADOR — `/home/migueldejongh/orquestador/orquestador/`

### Qué es
Proyecto Mastra (TypeScript) para AI agents. Actualmente solo tiene el weather agent de ejemplo.
**NO PRIORITARIO.** Dejar dormido hasta tener 3 clientes activos.

### Cuándo activar
Cuando se necesite orquestar flujos complejos de AI entre múltiples sistemas (lead → outreach → onboarding automático).

---

## 6. NEXUS — `/home/migueldejongh/nexus/`

### Qué es / qué será
Dashboard interno de operaciones de KOVA. Next.js vacío actualmente.
**Usar cuando haya 2+ clientes activos.** Mostrará:
- Lista de leads y estado (pipeline)
- Clientes activos y status de sus sistemas
- Links rápidos a cada instancia del receptionist
- Métricas simples

---

## 7. LOCAL-BUSINESS-TEMPLATE — `/home/migueldejongh/local-business-template/`

Template React + Vite base para landing pages de clientes locales.
- `goatbarbershop/` es la implementación de referencia más completa
- `projects/demo-nail-salon/` es otro ejemplo
- El lead-generator usa este template como base para generar nuevas webs

---

## MERCADO TARGET Y ESTRATEGIA

### Target recomendado (decisión tomada en sesión)
**Clínicas y centros de salud/wellness en LATAM**
- Dental, fisioterapia, psicología, veterinaria, salones de belleza con varios operadores
- **Por qué:** Pierden 20-40% ingresos en llamadas no contestadas. Tienen presupuesto. WhatsApp es su canal principal. En LATAM no está saturado.
- **NO ir por restaurantes individuales** (margen mínimo, ya tienen Square/Toast, no tienen presupuesto)

### Oferta de servicios (simplificada a 2 core)
1. **Web + Presencia** ($500-1,500 setup) — Landing page profesional, Google My Business, básicos
2. **AI Receptionist** ($300-500/mes) — WhatsApp automático, booking, recordatorios, reviews

### Pipeline de clientes
```
lead-generator → CSV con leads → outreach manual (por ahora) → demo → onboarding receptionist
```

### Web del mercado (PENDIENTE DE CONSTRUIR)
Landing page template para clínica/wellness, similar a goatbarbershop pero para ese vertical.
Mostrar: servicios, booking online, AI receptionist en acción, reviews automatizadas.

---

## INFRAESTRUCTURA Y HERRAMIENTAS

### Free tier (todo gratis actualmente)
- **Vercel** — hosting (1 cuenta personal, múltiples proyectos)
- **Supabase** — base de datos (free tier: 500MB, 2 proyectos)
- **n8n** — automatizaciones (self-hosted o cloud free tier limitado)
- **Ollama** — LLM local para lead-generator (qwen2.5-coder:14b ya instalado)

### Pendiente de instalar/configurar
- `gh` CLI (GitHub): `sudo apt install gh` → `gh auth login`
- GitHub repos para cada proyecto activo
- Supabase proyecto para Cataloptic

### Deploy commands
```bash
# KOVA Landing
cd /home/migueldejongh/kova-landing
vercel deploy --prod --yes --scope migueldejongh23s-projects

# Cataloptic (cuando esté listo)
cd /home/migueldejongh/cataloptic
vercel deploy --prod --yes --scope migueldejongh23s-projects
```

---

## REGLAS DE TRABAJO (para Claude y Gemini)

### NUNCA hacer
- Cambiar la estética/paleta de Cataloptic sin confirmación del cliente
- Subir credentials.json, .env.local, o claves API a git
- Crear proyectos nuevos cuando ya hay uno que sirve (ej: usar nexus, no crear otro dashboard)
- Agregar librerías nuevas sin justificación (el stack ya está definido)
- Hacer cambios en kova-landing que rompan el responsive (siempre verificar mobile)
- Usar `hidden` custom CSS para layout en kova-landing (usar Tailwind utilities nativas)

### SIEMPRE hacer
- Verificar `npm run build` en Next.js antes de reportar tarea completa
- Mantener GEMINI.md y CLAUDE.md actualizados cuando cambie algo importante
- Hacer commit antes de cambios grandes
- Usar `vercel deploy --prod` solo cuando esté probado localmente

### Prioridad de trabajo
1. Cataloptic (cliente en 2 semanas)
2. Web template dental/wellness (mercado nuevo)
3. Receptionist deploy productivo
4. Lead generator → n8n outreach automatizado
5. Nexus dashboard interno

---

## TAREA PARA GEMINI CLI — CATALOPTIC

El siguiente bloque es la tarea detallada para que Gemini CLI complete Cataloptic sin tomar decisiones arquitecturales:

```
CONTEXTO:
- Proyecto: /home/migueldejongh/cataloptic
- Cliente: Cataloptic, óptica en Santiago Chile
- Stack: Next.js 16 + React 19 + Tailwind v4 + Supabase + Zustand
- Estado: UI completa, backend faltante

ANTES DE EMPEZAR:
1. Lee este CLAUDE.md completo
2. Lee /home/migueldejongh/cataloptic/app/examen/page.tsx
3. Lee /home/migueldejongh/cataloptic/components/configurador/steps/PasoResumen.tsx
4. Lee /home/migueldejongh/cataloptic/components/layout/Navbar.tsx

TAREAS EN ORDEN (no saltar ninguna, completar una antes de la siguiente):

TAREA 1 — Supabase setup
- Crear /home/migueldejongh/cataloptic/lib/supabase.ts
- Usar @supabase/supabase-js createClient
- URL y key desde process.env.NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY
- Crear /home/migueldejongh/cataloptic/.env.local.example con esas dos variables
- NO crear el proyecto Supabase tú mismo, deja .env.local.example para que Miguel complete las keys reales

TAREA 2 — API route examen
- Crear /home/migueldejongh/cataloptic/app/api/examen/route.ts
- POST handler que recibe: { nombre, telefono, email, fecha, hora, motivo }
- Valida con Zod
- Guarda en tabla examen_bookings vía Supabase client
- Retorna 200 con { success: true, id } o 400 con error
- Tabla schema: id(uuid), nombre, telefono, email, fecha(date), hora, motivo, created_at

TAREA 3 — Conectar form examen
- Editar /home/migueldejongh/cataloptic/app/examen/page.tsx
- El form ya existe y usa react-hook-form. Agregar onSubmit que hace fetch POST a /api/examen
- Loading state durante el submit (deshabilitar botón)
- En éxito mostrar el mensaje de confirmación que ya existe en el código
- En error mostrar mensaje de error en el form
- NO cambiar el diseño visual del form

TAREA 4 — Cart store
- Crear /home/migueldejongh/cataloptic/lib/cart-store.ts usando Zustand
- Store con: items[], addItem(item), removeItem(id), clearCart(), total
- Item type: { id, productoSlug, uso, material, tratamiento, precio, resumen }
- Usar zustand/middleware persist para localStorage

TAREA 5 — Conectar PasoResumen al cart
- Editar /home/migueldejongh/cataloptic/components/configurador/steps/PasoResumen.tsx
- Importar useCartStore
- onClick de "Agregar al carrito": llama addItem con los datos del configurador
- Después de agregar: mostrar toast/feedback y opción de ir al carrito
- NO cambiar el diseño del resumen, solo agregar la funcionalidad

TAREA 6 — Cart en Navbar
- Editar /home/migueldejongh/cataloptic/components/layout/Navbar.tsx
- ShoppingBag icon: mostrar badge con count de items del cart
- Al click: abrir drawer/panel lateral con los items
- Drawer: lista de items con precio, botón eliminar, total, botón "Pedir por WhatsApp"
- WhatsApp checkout: construir mensaje con el pedido y abrir wa.me/56967179193?text=...
- Mantener estética: colores #C9A96E, #F7F5F2, Cormorant/DM Sans

TAREA 7 — Fix JSON-LD
- Editar /home/migueldejongh/cataloptic/app/layout.tsx línea 51
- Cambiar "+569XXXXXXXX" por "+56967179193"

TAREA 8 — Páginas faltantes (contenido estático básico)
- Crear /app/envios/page.tsx — info básica de envíos (calcular 3-5 días hábiles, todo Chile)
- Crear /app/faq/page.tsx — 5 preguntas frecuentes sobre lentes/óptica
- Usar el mismo layout y estética que el resto del sitio
- NO crear /guia-receta ni /tallas todavía (más complejo, dejar para después)

VERIFICACIÓN FINAL:
- Correr npm run build en /home/migueldejongh/cataloptic
- Si hay errores TypeScript, resolverlos antes de reportar completado
- Verificar que el form de examen muestra loading y confirmación correctamente
- Verificar que "Agregar al carrito" funciona y el cart aparece en navbar
```

---

## NOTAS DE SESIÓN (2026-05-06/07)

- Cliente goatbarbershop (barbería) se echó para atrás minutos antes del cierre — causa: proceso de venta, no el mercado
- kova-landing deployada en Vercel free tier, funcional
- Todas las vizzes tienen versión mobile (Mobile suffix) que se muestran en < 1024px
- El beam WebGL es fondo decorativo, no afecta texto gracias al `opacity:0.35` en mobile y `rgba(8,6,18,0.88)` en surface cards
- `gh` CLI no instalado (requiere sudo). Para instalar: `sudo apt install gh && gh auth login`
- Instagram y Gmail pendientes (Miguel los crea mañana, recomendación: `@kovastudio` y email similar)
- Supabase folder existe en home (`~/.supabase`) — probablemente CLI configurado

---

*Este archivo debe actualizarse cada vez que cambie algo importante en el ecosistema.*
