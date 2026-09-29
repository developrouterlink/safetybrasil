import type { Metadata } from 'next';
import { Header, Footer } from '@shared/ui';
import { ClientesHero, ClientesTabela, ClientesDepoimentos } from '@features/clientes';

export const metadata: Metadata = {
  title: 'Clientes | Safety Brasil',
  description:
    'Conheça as empresas que confiam na Safety Brasil para cuidar de SST, medicina ocupacional e conformidade total com o eSocial.',
};

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-[#f2f5f8] flex flex-col items-center overflow-x-clip">
      <div className="w-full pt-8 sm:pt-10 px-4 fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="w-full pt-[134px] sm:pt-[144px] pb-20 flex flex-col items-center gap-12 sm:gap-16">
        <ClientesHero />
        <ClientesTabela />
        <ClientesDepoimentos />
      </main>

      <Footer />
    </div>
  );
}
