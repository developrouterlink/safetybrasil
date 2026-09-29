'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Heading } from '@shared/ui';

export interface ClientesTabelaProps {
  className?: string;
  id?: string;
  title?: string;
  empresas?: string[];
}

export const empresasDefaultList: string[] = [
  "McDonald's",
  'Coca-Cola FEMSA',
  'Banco Santander',
  'Grupo Carrefour',
  'Amaggi Agronegócios',
  'Bayer CropScience',
  'Unimed Cooperativas',
  'Raízen Energia',
  'Suzano Papel & Celulose',
  'Gerdau Aços Longos',
  'Localiza Rent a Car',
  'DHL Express Brasil',
  'Grupo Heineken',
  'Nestlé Brasil',
  'Natura &Co',
  'JBS Alimentos',
  'Cosan Logística',
  'CSN Companhia Siderúrgica',
  'Bunge Alimentos',
  'Klabin Embalagens',
  'Embraer Aviação',
  'Marfrig Global Foods',
  'GPA Grupo Pão de Açúcar',
  'BRF Brasil Foods',
  'Tigre Tubos e Conexões',
  'WEG Motores',
  'Votorantim Cimentos',
  'Ultrapar Participações',
  'Randon Implementos',
  'Portobello Cerâmica',
  'Tramontina S.A.',
  'Magazine Luiza',
  'Dasa Diagnósticos',
  'Rede D’Or São Luiz',
  'Grupo Fleury',
  'Grupo CCR Concessões',
  'EcoRodovias',
  'Usiminas',
  'Hypera Pharma',
  'Eurofarma Laboratórios',
  'Aché Laboratórios',
  'M. Dias Branco',
  'Camil Alimentos',
  'JSL Logística',
  'Tegma Gestão Logística',
  'Santos Brasil',
  'Porto Seguro Seguros',
  'Bradesco Seguros',
  'SulAmérica Saúde',
  'Totvs Soluções',
  'Stefanini IT Solutions',
  'CI&T Software',
  'Cogna Educação',
  'Yduqs Educacional',
  'Ânima Educação',
  'Multiplan Shoppings',
  'Iguatemi Empresa de Shoppings',
  'Allos Shoppings',
  'Lojas Renner',
  'Riachuelo Guararapes',
  'C&A Modas',
  'Arezzo&Co',
  'Vulcabras Azaleia',
  'Grendene Calçados',
  'Alpargatas Havaianas',
  'Vivara Joias',
  'Petz Pet Shop',
  'Cobasi Cuidados Animais',
  'Kalunga Papelaria',
  'Leroy Merlin Brasil',
  'Telhanorte Saint-Gobain',
  'C&C Casa e Construção',
  'Dexco Deca Cecrisa',
  'Eternit S.A.',
  'Iochpe-Maxion',
  'Fras-le Autopeças',
  'Tupy Fundição',
  'Marcopolo Ônibus',
  'Caio Induscar',
  'Agrale Veículos',
  'SLC Agrícola',
  'São Martinho Açúcar & Álcool',
  'Jalles Machado',
  'Adecoagro Brasil',
  'Piracanjuba Laticínios',
  'Itambé Alimentos',
  'Vigor Alimentos',
  'Aurora Alimentos',
  'Copacol Cooperativa',
  'Coamo Agroindustrial',
  'Lar Cooperativa',
  'C.Vale Cooperativa',
  'Castrolanda',
  'Frimesa Cooperativa',
  'Minerva Foods',
  'Pluma Agroavícola',
  'Seara Alimentos',
  'Pif Paf Alimentos',
  'Friboi JBS',
];

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export const ClientesTabela = ({
  className,
  id = 'empresas-atendidas',
  title = 'Mais de 200 empresas atendidas em todo o Brasil',
  empresas = empresasDefaultList,
}: ClientesTabelaProps) => {
  const linhasDesktop = chunkArray(empresas, 4);

  return (
    <section
      id={id}
      className={twMerge(
        clsx('w-full max-w-[1280px] mx-auto px-4 flex flex-col items-start py-6 sm:py-10', className)
      )}
    >
      <div className="w-fit max-w-[calc(100%-28px)] bg-white rounded-t-[20px] sm:rounded-t-[24px] px-5 sm:px-8 py-4 sm:py-7 flex flex-row items-center justify-start gap-2.5 relative z-10">
        <Heading
          level={2}
          className="text-lg sm:text-2xl md:text-[26px] font-bold text-[var(--color-fg-heading)] text-left tracking-tight leading-snug"
        >
          {title}
        </Heading>

        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="block absolute -right-[20px] sm:-right-[24px] bottom-0 pointer-events-none fill-white sm:w-6 sm:h-6"
          aria-hidden="true"
        >
          <path d="M 0 0 L 0 24 L 24 24 C 10.745 24 0 13.255 0 0 Z" />
        </svg>
      </div>

      <div className="w-full bg-white rounded-b-[20px] sm:rounded-b-[24px] rounded-tr-[20px] sm:rounded-tr-[24px] relative overflow-hidden">
        <div className="w-full">
          {linhasDesktop.map((linha, index) => {
            const isOdd = index % 2 === 1;

            return (
              <div
                key={index}
                className={`w-full grid grid-cols-2 md:grid-cols-4 items-center gap-3 px-5 sm:px-8 py-4 transition-colors ${
                  isOdd ? 'bg-[#f2f5f8]' : 'bg-white'
                }`}
              >
                {linha.map((empresa) => (
                  <div key={empresa} className="flex items-center gap-2.5 min-w-0 pr-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shrink-0 opacity-70" />
                    <span className="text-xs sm:text-[15px] font-medium text-[#1c1c1c] truncate tracking-tight hover:text-[var(--color-brand)] transition-colors">
                      {empresa}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
