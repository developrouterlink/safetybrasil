# Arquitetura e Padrões de Projeto — Safety Brasil

Este documento define as diretrizes arquiteturais, regras de organização de código e convenções de nomenclatura do projeto **Safety Brasil**.
**Todas as IAs e desenvolvedores que atuarem nesta base de código DEVEM seguir estas instruções sem exceção.**

---

## 1. Visão Geral da Arquitetura

O projeto utiliza **Next.js 16+ (App Router)** com **TypeScript**, **Tailwind CSS v4** e o **Design System (Meta Clean/Optimistic)** herdado do ecossistema corporativo.
A arquitetura é dividida em três pilares fundamentais:

```
src/
├── app/                  # Roteamento e páginas Next.js App Router (Server/Client boundaries)
├── features/             # Módulos de domínio de negócio isolados (Feature-Driven)
├── shared/               # Camada compartilhada universal (UI, HTTP, Auth, Utils, Providers)
├── fonts/                # Fontes locais do design system (Optimistic, Airbnb Cereal)
└── styles/               # Tokens globais de CSS e tema (tokens.css, theme.css)
```

---

## 2. Estrutura Padrão de uma Feature (`src/features/<feature>/`)

Cada feature de negócio deve residir em sua própria pasta e seguir estritamente o layout:

```
features/<feature>/
  <feature>.types.ts        # Tipos, interfaces, DTOs e unions da feature
  <feature>.service.ts      # Integrações com API (usa SEMPRE @shared/http)
  <feature>.schema.ts       # Schemas Zod (validação de formulários e payloads)
  index.ts                  # Barrel: ÚNICA API pública exportada da feature

  hooks/                    # Data hooks reutilizáveis da feature (queries, mutations)
    use-<acao>-<entidade>.ts
    query-keys-<dominio>.ts
    index.ts

  pages/
    <pagina>-page/
      <pagina>-page.tsx     # Componente da tela (renderizado pelas rotas do app/)
      hooks/                # OBRIGATÓRIO — mesmo com 1 hook apenas
        use-<pagina>-page.ts
        index.ts
      index.ts

  components/
    <componente>-<dominio>/
      <componente>-<dominio>.tsx
      <componente>-<dominio>.types.ts
      hooks/                # OBRIGATÓRIO — mesmo com 1 hook apenas
        use-<componente>-<dominio>.ts
        index.ts
      index.ts
```

---

## 3. Convenções de Nomenclatura (Invioláveis)

### 3.1. Kebab-case lowercase em arquivos e pastas
- **Arquivos e pastas:** sempre em **kebab-case lowercase**. Nunca use PascalCase ou camelCase no nome de arquivos ou diretórios.
  - ✅ `criar-modal-empresa.tsx`
  - ✅ `use-listar-empresas.ts`
  - ✅ `query-keys-empresas.ts`
  - ❌ `CriarModalEmpresa.tsx`
  - ❌ `useListarEmpresas.ts`
- **Exports de código (JS/TS):** mantêm a convenção tradicional da linguagem:
  - Componentes React: `PascalCase` (ex: `export const CriarModalEmpresa = ...`)
  - Funções, hooks e instâncias: `camelCase` (ex: `export const useCriarModalEmpresa = ...`)

### 3.2. Domínio sempre explícito no nome
- Padrão `<ação>-<role>-<domínio>` ou `<ação>-<entidade>`:
  - O nome do domínio/entidade deve sempre constar no nome do arquivo.
  - Isso garante buscas precisas no editor (`Cmd+P`), clareza nas abas e grep cirúrgico.
  - ✅ `editar-modal-usuario.tsx`
  - ✅ `use-detalhar-usuario-page.ts`
  - ❌ `modal.tsx`, `use-page.ts`

### 3.3. Ponto vs Hífen
- Arquivos estruturais na **raiz da feature** usam **ponto**:
  - `<feature>.types.ts`
  - `<feature>.service.ts`
  - `<feature>.schema.ts`
- Arquivos em subpastas (`hooks/`, `components/`, `pages/`) usam **hífen** direto:
  - `use-listar-usuarios.ts`
  - `tabela-usuarios.tsx`

---

## 4. Regras Obrigatórias para Componentes e Hooks

### 4.1. Subpasta `hooks/` obrigatória
Todo componente em `components/<componente>-<dominio>/` e toda página em `pages/<pagina>-page/` **DEVE ter uma subpasta `hooks/` com seu respectivo `index.ts`**.
- Nenhum hook de UI deve ficar solto na raiz do componente.
- O `.tsx` é responsável exclusivamente por renderização, composição visual e JSX.
- Os hooks dentro de `hooks/` são responsáveis por orquestração de formulários, estados locais e efeitos.

### 4.2. Data Hooks vs UI Hooks
- **Data Hooks** (queries TanStack Query, mutations, query keys): ficam em `features/<feature>/hooks/`.
- **UI Hooks** (gerenciamento de modal, steps, formulário local): residem na pasta `hooks/` do componente ou página.
- **Hooks Globais Compartilhados:** residem em `@shared/hooks/` ou `@shared/auth/`.

### 4.3. Encapsulamento via Barrels (`index.ts`)
- Consumidores externos devem importar símbolos **exclusivamente via barrel (`@features/<feature>`)**:
  - ✅ `import { useListarUsuarios, type Usuario } from '@features/usuarios';`
  - ❌ `import { Usuario } from '@features/usuarios/usuarios.types';`

---

## 5. Serviços HTTP e Schemas

### 5.1. Chamadas HTTP
- Toda comunicação com a API em `<feature>.service.ts` deve usar o `httpClient` de `@shared/http`.
- **É estritamente proibido importar `axios` ou instanciar clients HTTP diretamente dentro das features.**
- Funções de serviço devem retornar `data` diretamente.
- Nomes de funções de serviço devem incluir o domínio: `listarUsuarios`, `buscarEmpresaPorId`, `atualizarUsuario`.

### 5.2. Schemas Zod e Tipagem de Formulários
- Formulários devem ser validados via Zod em `<feature>.schema.ts`.
- O tipo dos dados do formulário **deve ser derivado** via `z.infer`:
  ```ts
  export const criarEmpresaSchema = z.object({ ... });
  export type CriarEmpresaFormFields = z.infer<typeof criarEmpresaSchema>;
  ```
- Não declare interfaces TypeScript manuais paralelas para formulários com schema.

---

## 6. Design System, Fontes e Tipografia

### 6.1. Fontes
- A aplicação utiliza a família de fontes corporativa: **Optimistic** (`--font-optimistic` via `next/font/local`) e **Airbnb Cereal** (`src/fonts/`).
- O layout raiz (`src/app/layout.tsx`) injeta a variável `--font-optimistic` e a classe base `font-sans`.

### 6.2. Componente de Tipografia Reutilizável (`@shared/ui`)
Para manter a consistência visual em toda a aplicação, utilize o componente reutilizável de tipografia:

```tsx
import { Typography, Heading, Text } from '@shared/ui';

// Títulos com Heading
<Heading level={1}>Título Principal da Página</Heading>
<Heading level={2} color="brand">Subtítulo da Seção</Heading>

// Textos com Text ou Typography
<Text variant="lead" color="muted">Texto de introdução com leitura confortável.</Text>
<Text variant="body">Parágrafo padrão de conteúdo do sistema.</Text>
<Text variant="caption" color="subtle">Nota de rodapé ou metadado secundário.</Text>
<Text variant="overline" color="brand">LABEL EM CAIXA ALTA</Text>

// Suporte polimórfico total com a prop 'as'
<Typography as="span" variant="body-sm" weight="semibold">
  Texto inline customizado
</Typography>
```

#### Variantes Disponíveis:
- `display`: Títulos monumentais (hero)
- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`: Hierarquia de títulos
- `lead`: Texto destacado de introdução
- `body`: Texto de corpo padrão (16px)
- `body-sm`: Texto secundário de tabelas ou cards (14px)
- `caption`: Legendas, datas e observações (12px)
- `overline`: Rótulos em caixa alta com espaçamento (11px)

#### Cores de Texto Suportadas:
- `default`: Cor padrão de leitura (`--color-fg`)
- `heading`: Cor de alto contraste para cabeçalhos (`--color-fg-heading`)
- `muted`: Tom atenuado para descrições (`--color-fg-muted`)
- `subtle`: Tom suave para metadados secundários (`--color-fg-subtle`)
- `brand`: Cor primária da marca (`--color-brand`)
- `inverse`: Texto branco
- `success`, `warning`, `danger`: Cores semânticas de status

### 6.3. Padrão Estrutural de Componentes em `@shared/ui/`
Assim como em `typography/`, todos os componentes atômicos em `@shared/ui/` possuem sua própria pasta com `<componente>.tsx`, `<componente>.types.ts` e `index.ts`:

```
src/shared/ui/
├── button/
│   ├── button.tsx
│   ├── button.types.ts
│   └── index.ts
├── card/
│   ├── card.tsx
│   ├── card.types.ts
│   └── index.ts
├── typography/
│   ├── typography.tsx
│   ├── typography.types.ts
│   └── index.ts
└── index.ts
```

- **Button:** `<Button variant="primary" size="md" isLoading={false} leftIcon={...} />`
- **Card:** `<Card variant="bordered" padding="md"><CardHeader><CardTitle>...</CardTitle><CardDescription>...</CardDescription></CardHeader><CardContent>...</CardContent><CardFooter>...</CardFooter></Card>`


---

## 7. Tabela de Anti-patterns

| ❌ Prática Incorreta | ✅ Prática Correta |
|---|---|
| Arquivo `CriarModalUsuario.tsx` (PascalCase) | `criar-modal-usuario.tsx` (kebab-case) |
| Pasta `modal/` ou `hooks/use-page.ts` (sem domínio) | `criar-modal-usuario/`, `use-listar-usuarios-page.ts` |
| Hook solto na raiz da pasta do componente | Hook isolado dentro de subpasta `hooks/` |
| `import axios from 'axios'` dentro de service | `import { httpClient } from '@shared/http'` |
| `import { User } from '@features/users/users.types'` | `import { User } from '@features/users'` |
| Criar `interface FormState` paralela ao schema | `type FormFields = z.infer<typeof schema>` |
| Usar `localStorage` diretamente nas telas | Usar `useAuth()` de `@shared/auth` |
| Estilizar textos com tags soltas sem padrão | Usar `<Typography />`, `<Heading />` e `<Text />` de `@shared/ui` |

---

## 8. Checklist para Novas Implementações

Ao criar qualquer nova feature:
- [ ] Criar diretório `src/features/<feature>/`
- [ ] Criar `<feature>.types.ts`, `<feature>.service.ts` e `<feature>.schema.ts`
- [ ] Criar `hooks/` com data hooks (`use-query`, `use-mutation`, `query-keys-<dominio>.ts`) + `index.ts`
- [ ] Criar `components/<componente>-<dominio>/` com subpasta `hooks/` + `index.ts`
- [ ] Criar `pages/<pagina>-page/` com subpasta `hooks/` + `index.ts`
- [ ] Criar `index.ts` na raiz da feature expondo os componentes e hooks públicos
- [ ] Utilizar o componente `<Typography />` e botões com variantes do Design System
- [ ] Testar build com `npm run build` e lint com `npm run lint`
