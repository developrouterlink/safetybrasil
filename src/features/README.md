# Pasta `features/` — estrutura, regras e arquitetura

Este documento descreve **como estruturar features** no projeto, seguindo o padrão de excelência arquitetural do `sefaz-cliente`.

---

## Estrutura padrão

```
features/<feature>/
  <feature>.types.ts        # entities, DTOs, unions de domínio
  <feature>.service.ts      # chamadas HTTP (usa @shared/http)
  <feature>.schema.ts       # schemas Zod (validação de form, parsing)
  index.ts                  # barrel: API pública da feature

  hooks/                    # data hooks reutilizáveis (queries, mutations)
    use-<acao>-<entidade>.ts
    query-keys-<dominio>.ts
    index.ts

  pages/
    <pagina>-page/
      <pagina>-page.tsx
      hooks/                # OBRIGATÓRIO — mesmo com 1 hook
        use-<pagina>-page.ts
        index.ts
      index.ts

  components/
    <componente>-<dominio>/
      <componente>-<dominio>.tsx
      <componente>-<dominio>.types.ts
      hooks/                # OBRIGATÓRIO — mesmo com 1 hook
        use-<componente>-<dominio>.ts
        index.ts
      index.ts
```

---

## Regras de Arquitetura

### 1. Organização por feature, não por tipo
Todo código de um domínio fica isolado em `features/<feature>/`. Imports cruzados entre features devem ser feitos estritamente via barrel da outra feature (`index.ts`).

### 2. Kebab-case lowercase em arquivos e pastas
- Arquivos e pastas sempre em lowercase kebab-case:
  - ✅ `editar-modal-empresa.tsx`
  - ✅ `use-listar-empresas.ts`
  - ✅ `query-keys-empresa.ts`
  - ❌ `EditarModalEmpresa.tsx`
  - ❌ `useListarEmpresas.ts`
- Os exports JS/TS continuam PascalCase para componentes e camelCase para hooks e funções.

### 3. Domínio sempre no nome
- Padrão `<ação>-<role>-<domínio>` ou `<ação>-<entidade>`:
  - ✅ `criar-modal-usuario.tsx`
  - ✅ `use-detalhar-usuario-page.ts`
  - ✅ `query-keys-usuarios.ts`

### 4. Ponto vs hífen
- Arquivos na raiz da feature usam ponto:
  - `<feature>.types.ts`
  - `<feature>.service.ts`
  - `<feature>.schema.ts`
- Arquivos dentro de subpastas usam hífen.

### 5. Pasta `hooks/` obrigatória
Cada página em `pages/` e cada componente em `components/` **deve** ter sua própria subpasta `hooks/` com seu respectivo `index.ts`.

### 6. Data hooks vs UI hooks
- **Data hooks** (`useQuery`, `useMutation`, `queryKeys`): residem em `features/<feature>/hooks/`.
- **UI hooks** (estado do componente, modals, formulários locais): residem em `components/<comp>/hooks/` ou `pages/<pagina>/hooks/`.

### 7. Services e cliente HTTP
- Importar `httpClient` exclusivamente de `@shared/http`. **Nunca importar axios diretamente nos services**.
- Funções nomeadas com domínio: `listarUsuarios`, `buscarUsuarioPorId`, etc.

### 8. Schemas Zod
- Schema em `<feature>.schema.ts`.
- Tipos de formulário sempre derivados via `z.infer<typeof schema>`.

### 9. Chaves React Query hierárquicas
```ts
export const usuarioQueryKeys = {
  all: ['usuarios'] as const,
  list: () => [...usuarioQueryKeys.all, 'list'] as const,
  detail: (id: string) => [...usuarioQueryKeys.all, 'detail', id] as const,
};
```

### 10. Autenticação centralizada
- Consumir via `useAuth()` do `@shared/auth`. Nunca acessar `localStorage` diretamente em componentes ou telas.
