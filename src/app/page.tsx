import { Header, HeroFriday, ServicesGrid, MarketSection, ServicesTable, Footer } from '@shared/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f2f5f8] flex flex-col items-center overflow-x-clip">
      <div className="w-full pt-8 sm:pt-10 px-4 fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="w-full px-4 pt-[134px] sm:pt-[144px] pb-20 flex flex-col items-center gap-12 sm:gap-16">
        <HeroFriday />
        <ServicesGrid />
        <MarketSection />
        <ServicesTable />
      </main>

      <Footer />
    </div>
  );
}
