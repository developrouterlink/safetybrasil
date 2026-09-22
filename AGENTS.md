<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Regras de Arquitetura do Projeto (Safety Brasil)

Toda IA ou desenvolvedor deve ler e seguir rigorosamente as diretrizes documentadas em [ARCHITECTURE.md](file:///home/yan404dev/dev/router-link/safety-brasil/ARCHITECTURE.md).

### Resumo Obrigatório:
1. **Estrutura por Feature:** Novos módulos de negócio devem ser criados em `src/features/<feature>/` contendo `<feature>.types.ts`, `<feature>.service.ts`, `<feature>.schema.ts`, `hooks/`, `components/`, `pages/` e `index.ts`.
2. **Kebab-case lowercase:** Todos os arquivos e pastas devem ser lowercase com hífen (`kebab-case`) e conter o domínio no nome.
3. **Subpasta `hooks/` obrigatória:** Cada componente e cada página deve ter sua própria subpasta `hooks/` com `index.ts`.
4. **Camada HTTP e Schemas:** Use sempre `httpClient` de `@shared/http` (nunca axios direto) e derive tipos com `z.infer`.
5. **Tipografia e Design System:** Use o componente reutilizável `<Typography />`, `<Heading />` e `<Text />` de `@shared/ui` e siga os padrões visuais documentados em [DESIGN_SYSTEM.md](file:///home/yan404dev/dev/router-link/safety-brasil/DESIGN_SYSTEM.md).
