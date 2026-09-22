import { Header, Heading, Text, Button, Card } from '@shared/ui';
import {
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Users,
  Network,
  ArrowRight,
  PhoneCall,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f2f5f8] flex flex-col items-center overflow-x-clip">
      {/* Top Header Floating Container */}
      <div className="w-full pt-8 sm:pt-10 px-4 sm:px-6 fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Main Hero Container matching Framer layout (1440px max, pt-156px, gap-56px) */}
      <main className="w-full max-w-[1440px] px-6 sm:px-12 pt-[140px] sm:pt-[156px] pb-24 flex flex-col items-center gap-14">
        {/* Hero Content */}
        <div className="text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse" />
            <Text variant="caption" weight="medium" color="muted">
              Soluções Completas em Segurança e Medicina do Trabalho
            </Text>
          </div>

          <Heading level={1} className="text-4xl sm:text-5xl md:text-6xl text-[var(--color-fg-heading)] font-extrabold tracking-tight">
            Gestão inteligente de saúde e <span className="text-[var(--color-brand)]">segurança do trabalho</span>
          </Heading>

          <Text variant="lead" color="muted" className="max-w-2xl mx-auto">
            Garantimos a total conformidade da sua empresa com as Normas Regulamentadoras (NRs) e a transmissão assertiva para o eSocial.
          </Text>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button size="lg" className="shadow-md">
              Conhecer Nossos Serviços <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="secondary" size="lg">
              <PhoneCall className="w-4 h-4 mr-1" /> Falar com Especialista
            </Button>
          </div>
        </div>

        {/* Quick Highlights / Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <Card variant="bordered" className="bg-white/90 backdrop-blur-xs space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand)] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <Heading level={5}>Segurança do Trabalho</Heading>
            <Text variant="body-sm" color="muted">
              Elaboração de PGR, PCMSO, LTCAT e laudos técnicos com total rigor regulatório.
            </Text>
          </Card>

          <Card variant="bordered" className="bg-white/90 backdrop-blur-xs space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <Heading level={5}>Eventos eSocial</Heading>
            <Text variant="body-sm" color="muted">
              Envio e mensageria dos eventos S-2210, S-2220 e S-2240 de forma ágil e sem multas.
            </Text>
          </Card>

          <Card variant="bordered" className="bg-white/90 backdrop-blur-xs space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Network className="w-5 h-5" />
            </div>
            <Heading level={5}>Rede Credenciada</Heading>
            <Text variant="body-sm" color="muted">
              Clínicas parceiras e exames ocupacionais distribuídos em todo o território nacional.
            </Text>
          </Card>

          <Card variant="bordered" className="bg-white/90 backdrop-blur-xs space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <Heading level={5}>Atendimento Humanizado</Heading>
            <Text variant="body-sm" color="muted">
              Suporte dedicado e consultoria contínua para sua equipe de RH e DP.
            </Text>
          </Card>
        </div>

        {/* Clients Banner Preview */}
        <div id="clientes" className="w-full bg-white rounded-[20px] shadow-[0px_12px_24px_rgba(0,0,0,0.08)] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[var(--color-brand)]">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Confiabilidade e Experiência</span>
            </div>
            <Heading level={3}>Mais de 500 empresas confiam na Safety Brasil</Heading>
            <Text variant="body-sm" color="muted">
              Da pequena à grande indústria, protegemos colaboradores e garantimos conformidade.
            </Text>
          </div>
          <Button variant="outline" size="md">
            Ver Casos de Sucesso
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/80 bg-white py-8 px-6 text-center text-xs text-[var(--color-fg-muted)]">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-semibold text-slate-700">Safety Brasil — Gestão e Conformidade em SST</span>
          <span>&copy; {new Date().getFullYear()} Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}
