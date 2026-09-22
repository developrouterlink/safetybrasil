# 🎨 Design System & Padrões Visuais — Safety Brasil

Este documento define a especificação exata de **cores, tipografia, fontes, espaçamentos e componentes** extraída e padronizada a partir do `site-isc`.
Qualquer implementação visual nesta aplicação deve obedecer rigorosamente a este guia.

---

## 1. Tipografia e Fontes

### 1.1. Família Tipográfica
A tipografia corporativa é baseada na fonte **Optimistic** com fallback no stack do sistema operacional:

```css
--font-sans: var(--font-optimistic), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
--font-display: var(--font-optimistic), var(--font-sans);
--font-body: var(--font-optimistic), var(--font-sans);
--font-cereal: var(--font-optimistic), var(--font-sans);
--font-mono: ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace;
```

### 1.2. Escala de Tamanhos, Pesos e Alturas de Linha

| Categoria | Classe Tailwind / Token | Tamanho (px / rem) | Peso Recomendado | Line Height | Tracking | Uso Principal |
|---|---|---|---|---|---|---|
| **Display** | `text-5xl` / `text-6xl` | 48px – 60px (`3rem - 3.75rem`) | Extrabold (800) | `1.1` (tight) | `-0.03em` | Títulos heróicos de destaque |
| **Heading 1** | `text-4xl` / `text-5xl` | 36px – 48px (`2.25rem - 3rem`) | Bold (700) | `1.15` (tight) | `-0.02em` | Título principal da página |
| **Heading 2** | `text-3xl` / `text-4xl` | 30px – 36px (`1.875rem - 2.25rem`) | Bold (700) | `1.2` (snug) | `-0.02em` | Título de seções |
| **Heading 3** | `text-2xl` | 24px (`1.5rem`) | Semibold (600) | `1.25` (snug) | `-0.01em` | Subtítulo de seções e destaques |
| **Heading 4** | `text-xl` | 20px (`1.25rem`) | Semibold (600) | `1.3` | `normal` | Título de cards e modais |
| **Heading 5** | `text-lg` | 18px (`1.125rem`) | Semibold (600) | `1.4` | `normal` | Título de subseções ou listas |
| **Nav Links** | `text-[16px]` | 16px (`1rem`) | Medium (500) | `1.5` | `normal` | **Links de navegação no Header** |
| **Body (Padrão)**| `text-base` | 16px (`1rem`) | Normal (400) | `1.6` (relaxed) | `normal` | Parágrafos e textos corridos |
| **Body Small** | `text-sm` / `text-[15px]` | 14px – 15px (`0.875rem`) | Normal (400) / Medium (500) | `1.5` | `normal` | Textos de cards, botões médios |
| **Caption** | `text-xs` | 12px (`0.75rem`) | Medium (500) | `1.4` | `normal` | Legendas, datas e notas de rodapé |
| **Overline** | `text-[11px]` | 11px (`0.6875rem`) | Bold (700) | `1.0` | `0.06em` (wider) | Badges e rótulos em caixa alta |

---

## 2. Paleta de Cores Oficial

### 2.1. Brand (Verde Institucional Enterprise)
```css
--color-brand-50:  #edf8f3;
--color-brand-100: #d5f0e3;
--color-brand-200: #ade2c9;
--color-brand-300: #77cfa9;
--color-brand-400: #3db884;
--color-brand-500: #00875a;   /* Principal */
--color-brand-600: #00704a;   /* Hover */
--color-brand-700: #00593b;   /* Active */
--color-brand-soft: rgba(0, 135, 90, 0.08); /* Fundo de ícones e pills */
```

### 2.2. Superfícies e Fundos
- **Fundo da Home:** `#f2f5f8` (Clean Soft Wash).
- **Cards e Header:** `#ffffff` (Pure White).
- **Fundo Elevado:** `#ffffff` com sombra `rgba(0, 0, 0, 0.08) 0px 12px 24px 0px`.
- **Fundo Afundado (Sunken):** `#f0f2f5`.

### 2.3. Textos e Contrastes
- **Heading / Alto Contraste:** `#1c2b33` ou `#1c1e21`
- **Body / Leitura:** `#444950`
- **Muted / Descrições Secundárias:** `#606770`
- **Subtle / Legendas:** `#8d949e`
- **Inverso:** `#ffffff`

### 2.4. Bordas e Divisores
- **Borda Padrão:** `#e4e6eb`
- **Borda Reforçada (Strong):** `#ccd0d5`
- **Borda Suave (Hairline):** `#f0f2f5`

---

## 3. Padrão Oficial do Header (Navbar)

O Header segue o padrão do card flutuante arredondado do Framer / `site-isc`:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  [Logo (h-11)]                           Serviços   eSocial   Clientes   Rede   Contato   [CTA Fale Conosco] │
└────────────────────────────────────────────────────────────────────────────────────────┘
```
- **Disposição em 2 Blocos:** O Header é composto estritamente por dois blocos (sem `justify-between` distribuído em 3 partes):
  1. **Bloco Esquerdo:** Logo da Safety Brasil.
  2. **Bloco Direito:** Links de navegação agrupados diretamente ao lado do botão de CTA.

### Dimensões e Especificações do Header:
- **Container:** `max-w-[1280px]` centralizado com `margin: 0 auto`.
- **Altura Mínima:** `min-h-[76px]` a `h-[80px]` (nunca inferior a 72px para evitar sensação de compressão).
- **Fundo:** `#ffffff` (`bg-white`).
- **Raio de Borda:** `border-radius: 20px` (`rounded-[20px]`).
- **Sombra:** `box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08)`.
- **Padding Interno:** `px-8 py-4` (Desktop) e `px-5 py-3.5` (Mobile).
- **Logo:**
  - Altura: `h-11` (44px) a `h-12` (48px).
  - Sem texto adjacente (apenas o símbolo da logo no link de home).
- **Links de Navegação:**
  - Fonte: **16px (`text-[16px]`)** ou `text-[15px]`.
  - Peso: **Medium (500)**.
  - Cor: `#1c2b33` (`text-[var(--color-fg-heading)]` ou `#444950`).
  - Hover: Cor `#00875a` (`text-[var(--color-brand)]`) com transição suave.
  - Espaçamento: `gap-8` entre links.
- **Botão CTA:**
  - Altura: `h-11` (44px).
  - Padding: `px-6 py-2.5`.
  - Fonte: **15px Semibold (`text-[15px] font-semibold text-white`)**.
  - Borda: `rounded-full` (`border-radius: 9999px`).
  - Cor: Fundo `#00875a`, hover `#00704a`.

---

## 4. Padrão Oficial dos Botões (`Button`)

| Tamanho | Altura | Padding Horizontal | Tamanho da Fonte | Peso | Raio de Borda |
|---|---|---|---|---|---|
| **sm** | `h-9` (36px) | `px-4` (16px) | `text-[13px]` | Semibold (600) | `rounded-full` |
| **md (Padrão)** | `h-11` (44px) | `px-6` (24px) | `text-[15px]` | Semibold (600) | `rounded-full` |
| **lg** | `h-12` (48px) | `px-8` (32px) | `text-[16px]` | Semibold (600) | `rounded-full` |

### Variantes de Botão:
- **`primary`:** Fundo `#00875a`, texto branco, sombra leve, hover `#00704a`.
- **`secondary`:** Fundo branco, borda `#ccd0d5`, texto `#1c2b33`, hover `#f0f2f5`.
- **`outline`:** Fundo transparente, borda `#00875a`, texto `#00875a`, hover `rgba(0, 135, 90, 0.08)`.
- **`ghost`:** Fundo transparente, texto `#1c2b33`, hover `#f0f2f5`.

---

## 5. Padrão Oficial dos Cards (`Card`)

- **Raio de Borda:** `border-radius: 20px` (`rounded-[20px]`) para cards principais ou `16px` (`rounded-2xl`).
- **Fundo:** `#ffffff` (`bg-white`).
- **Borda:** `1px solid var(--color-border)` (`#e4e6eb`).
- **Sombra:** `var(--shadow-sm)` a `var(--shadow-md)`.
- **Padding:** `p-6` a `p-8` (espaçoso e respirável).
