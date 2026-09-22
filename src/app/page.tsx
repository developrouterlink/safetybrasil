import { Header, HeroFriday, ServicesGrid } from '@shared/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f2f5f8] flex flex-col items-center overflow-x-clip">
      <div className="w-full pt-8 sm:pt-10 px-4 fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="w-full px-4 pt-[134px] sm:pt-[144px] pb-20 flex flex-col items-center gap-12 sm:gap-16">
        <HeroFriday />
        <ServicesGrid />
      </main>

      <footer className="w-full border-t border-slate-200/80 bg-white py-8 px-6 text-center text-xs text-[var(--color-fg-muted)]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-semibold text-slate-700">Safety Brasil</span>
          <span>&copy; {new Date().getFullYear()} Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}
