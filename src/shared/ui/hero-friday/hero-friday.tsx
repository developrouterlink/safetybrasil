import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../button';

export const HeroFriday = () => {
  return (
    <section className="w-full max-w-[1280px] lg:mt-4 mx-auto">
      <div className="w-full min-h-[520px] sm:min-h-[560px] lg:h-[592px] bg-[#f2f5f8] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] relative overflow-hidden">
        {/* Imagem de Fundo (Hero) ocupando toda a área como no desktop */}
        <div className="absolute inset-0 w-full h-full rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] overflow-hidden">
          <Image
            src="/hero.png"
            alt="Profissional da Safety Brasil com smartphone"
            fill
            sizes="(max-width: 1024px) 100vw, 1280px"
            className="object-cover object-[72%_center] sm:object-[65%_center] lg:object-[60%_20%]"
            priority
          />

          {/* Gradiente sutil inferior no mobile para contraste do botão */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 via-black/10 to-transparent lg:hidden pointer-events-none" />

          {/* Botão de Ação sobre a imagem no canto inferior esquerdo */}
          <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8 lg:bottom-14 lg:left-10 z-20">
            <Button
              as={Link}
              href="/#servicos"
              size="md"
              variant="primary"
              className="shadow-sm hover:shadow-md px-7 text-[15px]"
            >
              Saiba mais
            </Button>
          </div>
        </div>

        {/* Bloco de Conteúdo com recorte em L e curvas invertidas preservadas no mobile */}
        <div className="bg-[#f2f5f8] rounded-br-[20px] sm:rounded-br-[24px] flex flex-col justify-center items-start gap-3 sm:gap-[22px] w-[86%] sm:w-[75%] md:w-[60%] lg:w-[48%] lg:min-w-[420px] p-5 sm:p-8 lg:p-[48px_40px_36px_0] absolute top-0 left-0 lg:h-[416px] z-10">
          {/* Curva invertida côncava superior direita */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="block absolute top-0 -right-[24px] pointer-events-none fill-[#f2f5f8] w-5 h-5 sm:w-6 sm:h-6"
            aria-hidden="true"
          >
            <path d="M0 0 L24 0 C10.745 0 0 10.745 0 24 Z" />
          </svg>

          {/* Curva invertida côncava inferior esquerda */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="block absolute -bottom-[20px] sm:-bottom-[24px] left-0 pointer-events-none fill-[#f2f5f8] w-5 h-5 sm:w-6 sm:h-6"
            aria-hidden="true"
          >
            <path d="M0 0 L0 24 C0 10.745 10.745 0 24 0 Z" />
          </svg>

          <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#111827] leading-[1.14] sm:leading-[1.12] tracking-[-0.03em]">
            <span className="block text-[#111827]">Safety Brasil®</span>
            <span className="text-[var(--color-brand)] block mt-1">Segurança e Medicina do Trabalho</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#6B7280] leading-[1.45] sm:leading-[1.5] max-w-md font-normal">
            Segurança é coisa séria e disso a gente entende!
          </p>
        </div>
      </div>
    </section>
  );
};
