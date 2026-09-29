# Arquitetura e Diretrizes de Projeto — Safety Brasil

Este documento define os princípios arquiteturais e convenções do projeto **Safety Brasil**.

---

## 1. Visão Geral do Projeto

O projeto é um **site institucional e estático** construído com **Next.js 16+ (App Router)**, **TypeScript**, **Tailwind CSS v4** e o **Design System corporativo**.

Como se trata de um site estático e de apresentação:
- **Simplicidade acima de tudo:** Não adicione camadas de abstração desnecessárias.
- **Não force APIs:** Não crie clientes HTTP (`axios`), camadas de `service`, schemas Zod ou DTOs para simular APIs inexistentes.
- **Conteúdo Direto no HTML/JSX:** Escreva textos, títulos e marcações diretamente no JSX. Evite criar objetos e arrays de mock desnecessários para conteúdos fixos.
- **Sem Comentários:** O código deve ser limpo e autoexplicativo, sem comentários ou anotações redundantes nos componentes.
- **Hooks Apenas Quando Houver Estado:** Crie ou separe hooks **apenas quando houver controle de estado real** (`useState`, etc.). Nunca crie subpastas `hooks/` com funções vazias ou retornando `{}`.

---

## 2. Estrutura de Pastas

```
src/
├── app/                  # Rotas e páginas do Next.js App Router (home, /esocial, /clientes)
├── features/             # Componentes e seções de páginas específicas
├── shared/               # Componentes reutilizáveis de UI, botões, tipografia
│   └── ui/               # Design system compartilhado (Header, Footer, Typography, Button, etc.)
├── fonts/                # Fontes corporativas locais
└── styles/               # Tokens globais de CSS
```

---

## 3. Convenções de Código

### 3.1. Nomenclatura
- Todos os arquivos e diretórios em **kebab-case lowercase** (ex: `clientes-hero.tsx`, `use-clientes-depoimentos.ts`).
- Componentes exportados em `PascalCase`, hooks em `camelCase`.

### 3.2. Estrutura de Componentes
- Componentes de seção ou página ficam em sua pasta correspondente de forma direta e limpa.
- Se um componente não possui estado, ele é puramente uma função JSX estática.
- Se possui estado interativo (ex: carrossel com índice ativo), o hook de estado pode ser separado de forma limpa.

### 3.3. Tipografia e Design System
- Utilize as classes do Tailwind e componentes tipográficos de `@shared/ui` (`<Heading />`, `<Text />`, `<Typography />`) para manter consistência com o Design System.
- Siga as cores e tokens definidos em `tokens.css` e `theme.css`.

---

## 4. Tabela de Anti-patterns

| ❌ Prática Incorreta | ✅ Prática Correta |
|---|---|
| Criar `service.ts` com mock/axios em site estático | Renderizar dados e textos diretamente no HTML/JSX |
| Criar pastas `hooks/` vazias que retornam `{}` | Não criar hooks onde não há estado |
| Adicionar comentários descritivos no JSX | Código limpo sem comentários |
| Criar schemas Zod para páginas de marketing estáticas | Props tipadas simples em TypeScript |
| Aninhar múltiplos wrappers e pastas sem necessidade | Estrutura plana, legível e direta |
