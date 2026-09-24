import Image from 'next/image';
import { Text } from '../typography';

export const MarketSection = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto py-6 sm:py-10">
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        <div className="shrink-0 w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] flex items-center justify-center">
          <Image
            src="/mercado.png"
            alt="Atendemos empresas de todos os portes"
            width={420}
            height={420}
            className="w-full h-auto object-contain mix-blend-multiply"
            priority
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <Text
            variant="lead"
            className="text-[#1c1c1c] text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-normal leading-[1.35] tracking-tight"
            style={{ fontFamily: "'Host Grotesk', sans-serif" }}
          >
            Atendemos todo o mercado e suas diversas nuances, além de grandes corporações como{' '}
            <strong className="font-semibold text-[#1c1c1c]">McDonald&apos;s</strong>,{' '}
            <strong className="font-semibold text-[#1c1c1c]">Coca-Cola</strong> e{' '}
            <strong className="font-semibold text-[#1c1c1c]">Santander</strong>, temos soluções personalizadas para empresas de todos os portes com atendimento humanizado.
          </Text>
        </div>
      </div>
    </section>
  );
};
