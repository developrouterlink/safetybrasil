'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Button, Heading } from '@shared/ui';
import { useClientesDepoimentos } from './hooks/use-clientes-depoimentos';

export interface ClientesDepoimentosProps {
  className?: string;
  id?: string;
}

export const ClientesDepoimentos = ({
  className,
  id = 'depoimentos',
}: ClientesDepoimentosProps) => {
  const { depoimentos, depoimentoAtual, ativoIndex, setAtivoIndex } =
    useClientesDepoimentos();

  return (
    <section id={id} className={twMerge(clsx('w-full py-0 overflow-hidden', className))}>
      <div className="w-full rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px] sm:min-h-[560px]">
        <div className="w-full bg-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-14 sm:py-18 lg:py-24 flex flex-col justify-between gap-8 rounded-none">
          <div className="flex flex-col gap-6 max-w-xl lg:ml-auto w-full">
            <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-brand)]">
              O que dizem os nossos clientes
            </span>

            <div className="relative">
              <span className="text-5xl sm:text-6xl font-serif text-[var(--color-brand)] leading-none select-none -mb-3 block opacity-80">
                “
              </span>
              <p className="text-lg sm:text-xl lg:text-[24px] font-normal text-[#1c1c1c] leading-[1.4] tracking-tight">
                {depoimentoAtual.citacao}
              </p>
            </div>

            <div className="pt-2">
              <h4 className="text-base sm:text-lg font-bold text-[#1c1c1c]">
                {depoimentoAtual.autor}
              </h4>
              <p className="text-sm text-slate-500 font-normal">
                {depoimentoAtual.cargo} •{' '}
                <span className="text-slate-700 font-medium">
                  {depoimentoAtual.empresa}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-4 max-w-xl lg:ml-auto w-full">
            {depoimentos.map((item, index) => {
              const isAtivo = index === ativoIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setAtivoIndex(index)}
                  className={twMerge(
                    clsx(
                      'h-2 rounded-full transition-all duration-300 cursor-pointer',
                      isAtivo
                        ? 'w-8 bg-[var(--color-brand)]'
                        : 'w-2 bg-slate-200 hover:bg-slate-300'
                    )
                  )}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              );
            })}
          </div>
        </div>

        <div className="w-full bg-gradient-to-br from-[#008f5d] via-[var(--color-brand)] to-[#00744e] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-14 sm:py-18 lg:py-24 flex flex-col justify-between gap-8 text-white rounded-none">
          <div className="flex flex-col gap-5 max-w-xl lg:mr-auto w-full">
            <Heading
              level={2}
              className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-white leading-[1.2] sm:leading-[1.16]"
            >
              Na{' '}
              <span className="inline-flex items-center px-3.5 py-0.5 sm:px-4 sm:py-1 rounded-[18px] bg-white text-[var(--color-brand)] font-bold mx-1 align-baseline text-xl sm:text-2xl lg:text-[34px]">
                Safety Brasil
              </span>
              , você faz parte de uma rede que cuida de verdade da sua empresa.
            </Heading>

            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight pt-2">
              Bora crescer juntos?
            </p>
          </div>

          <div className="max-w-xl lg:mr-auto w-full">
            <Button
              as={Link}
              href="/#contato"
              size="lg"
              variant="secondary"
              className="bg-white text-[var(--color-brand)] hover:bg-emerald-50 border-0 font-semibold px-9 py-3 text-base rounded-full shadow-none"
            >
              Quero começar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
