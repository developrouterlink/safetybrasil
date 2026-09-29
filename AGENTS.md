<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Regras de Arquitetura do Projeto (Safety Brasil)

Toda IA ou desenvolvedor deve ler e seguir as diretrizes documentadas em [ARCHITECTURE.md](file:///home/yan404dev/dev/router-link/safety-brasil/ARCHITECTURE.md).

### Diretrizes Fundamentais (Site Estático e Limpo):
1. **Site Institucional/Estático:** Não adicione complexidade desnecessária. Não force API, clients HTTP, services ou schemas artificiais.
2. **Conteúdo Direto no HTML/JSX:** Passe textos e elementos diretamente no markup sem criar objetos intermediários desnecessários.
3. **Sem Comentários:** Remova e não adicione comentários explicativos ou desnecessários no código.
4. **Hooks Apenas com Estado Real:** Só separe em hook quando houver controle de estado (`useState`, etc.). Nunca crie hooks vazios ou apenas para abstrair dados estáticos.
5. **Kebab-case lowercase:** Todos os arquivos e pastas devem ser lowercase com hífen (`kebab-case`).
6. **Design System:** Siga os padrões visuais documentados em [DESIGN_SYSTEM.md](file:///home/yan404dev/dev/router-link/safety-brasil/DESIGN_SYSTEM.md) e componentes de `@shared/ui`.

