import { Heading, Text, Button, Card } from '@shared/ui';
import { ShieldCheck, Layers, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] flex flex-col justify-between p-6 sm:p-12 md:p-20">
      <header className="max-w-5xl w-full mx-auto flex items-center justify-between py-4 border-b border-[color:var(--color-border)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)] flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <Heading level={5} className="leading-tight">
              Safety Brasil
            </Heading>
            <Text variant="caption" color="muted">
              Design System & Arquitetura Base
            </Text>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">
            Documentação
          </Button>
          <Button size="sm">
            Iniciar Projeto <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </header>

      <section className="max-w-5xl w-full mx-auto my-16 space-y-12">
        <div className="space-y-4 max-w-2xl">
          <Text variant="overline" color="brand">
            PROJETO INICIALIZADO COM SUCESSO
          </Text>
          <Heading level={1} className="text-4xl sm:text-5xl">
            Padrão arquitetural pronto para escalar.
          </Heading>
          <Text variant="lead" color="muted">
            Next.js com a arquitetura modular por features herdada do sefaz-cliente,
            design system unificado com o site-isc e tipografia com a fonte Optimistic.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="bordered" className="space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-brand-soft)] text-[var(--color-brand)] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <Heading level={4}>Arquitetura Feature-Driven</Heading>
            <Text variant="body-sm" color="muted">
              Estrutura modular em <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">src/features/</code> com separação rígida de data hooks, UI hooks, schemas Zod e serviços HTTP.
            </Text>
          </Card>

          <Card variant="bordered" className="space-y-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <Heading level={4}>Design System & Fontes</Heading>
            <Text variant="body-sm" color="muted">
              Fontes Optimistic e Airbnb Cereal carregadas localmente, tokens de cores e componentes reutilizáveis de Tipografia, Botões e Cards.
            </Text>
          </Card>

          <Card variant="bordered" className="space-y-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <Heading level={4}>Guia para IAs e Devs</Heading>
            <Text variant="body-sm" color="muted">
              Arquivo <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">ARCHITECTURE.md</code> completo na raiz do projeto detalhando todas as regras e convenções.
            </Text>
          </Card>
        </div>
      </section>

      <footer className="max-w-5xl w-full mx-auto pt-8 border-t border-[color:var(--color-border)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-fg-muted)] gap-4">
        <span>Safety Brasil &copy; {new Date().getFullYear()} — Todos os direitos reservados.</span>
        <span>Next.js 16+ · Tailwind CSS v4 · TypeScript</span>
      </footer>
    </main>
  );
}
