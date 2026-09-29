'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ClientesHeroProps {
  className?: string;
  id?: string;
}

export const ClientesHero = ({
  className,
  id = 'clientes-hero',
}: ClientesHeroProps) => {
  return (
    <section id={id} className={twMerge(clsx('w-full max-w-[1280px] mx-auto px-4 py-4 sm:py-10', className))}>
      <div className="w-full max-w-[1280px] mx-auto relative rounded-[20px] overflow-hidden bg-gradient-to-br from-[#008f5d] via-[var(--color-brand)] to-[#00744e]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 relative items-stretch">
          <div className="w-full h-full min-h-[200px] sm:min-h-[240px] md:min-h-[270px] p-6 sm:p-10 md:p-14 bg-transparent relative flex flex-col justify-center order-1 md:order-1">
            <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-normal tracking-tight text-white leading-[1.28] sm:leading-[1.22]">
              Aqui na{' '}
              <span className="inline-flex items-center px-3 py-0.5 sm:px-5 sm:py-1 rounded-[20px] bg-white text-[var(--color-brand)] font-bold mx-1 align-baseline text-xl sm:text-2xl lg:text-[36px]">
                Safety Brasil
              </span>{' '}
              a sua empresa não é um número de contrato.
            </h1>
          </div>

          <div className="w-[88%] sm:w-[82%] md:w-full h-full min-h-[200px] sm:min-h-[240px] md:min-h-[270px] bg-[#f2f5f8] rounded-bl-[20px] p-6 sm:p-10 md:p-14 relative flex flex-col justify-center order-2 md:order-2 ml-auto">
            <p className="text-xl sm:text-2xl lg:text-[32px] font-medium tracking-tight text-[#1c1c1c] leading-[1.3] sm:leading-[1.25]">
              A gente senta do seu lado, entende a sua operação e resolve tudo de ponta a ponta.
            </p>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute top-0 -left-[20px] pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M 20 0 L 0 0 C 8.954 0 20 11.046 20 20 Z" />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute -bottom-[20px] right-0 pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M 20 0 L 20 20 C 20 8.954 11.046 0 0 0 Z" />
            </svg>
          </div>
        </div>

        <div className="w-full flex flex-row relative items-stretch">
          <div className="w-[18%] sm:w-[20%] md:w-[25%] min-h-[140px] sm:min-h-[180px] md:min-h-[220px] bg-[#f2f5f8] rounded-tr-[20px] relative self-stretch">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute -top-[20px] left-0 pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M 0 20 L 0 0 C 0 11.046 8.954 20 20 20 Z" />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="block absolute bottom-0 -right-[20px] pointer-events-none fill-[#f2f5f8]"
              aria-hidden="true"
            >
              <path d="M 0 20 L 20 20 C 8.954 20 0 11.046 0 0 Z" />
            </svg>
          </div>

          <div className="w-[82%] sm:w-[80%] md:w-[75%] min-h-[140px] sm:min-h-[180px] md:min-h-[220px] p-5 sm:p-10 md:p-14 bg-transparent relative flex flex-col justify-center">
            <p className="text-lg sm:text-2xl lg:text-[36px] font-normal tracking-tight text-white leading-[1.3] max-w-3xl">
              A mesma dedicação e proximidade para quem tem{' '}
              <span className="inline-flex items-center px-3 py-0.5 sm:px-5 sm:py-1 rounded-[20px] bg-white text-[var(--color-brand)] font-bold mx-1 align-baseline text-base sm:text-xl lg:text-[30px]">
                10
              </span>{' '}
              ou{' '}
              <span className="inline-flex items-center px-3 py-0.5 sm:px-5 sm:py-1 rounded-[20px] bg-white text-[var(--color-brand)] font-bold mx-1 align-baseline text-base sm:text-xl lg:text-[30px]">
                20.000
              </span>{' '}
              colaboradores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
