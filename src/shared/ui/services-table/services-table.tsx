import { Heading, Text } from '../typography';

const benefits = [
  {
    id: 'software',
    title: 'Software Integrado (SOC)',
    description: 'Gestão 100% online de dados ocupacionais, relatórios e transmissão em tempo real.',
    safetyIncluded: true,
    othersIncluded: false,
  },
  {
    id: 'esocial',
    title: 'Envio de Eventos para o eSocial',
    description: 'Transmissão segura de todos os eventos de SST com protocolo e validação jurídica.',
    safetyIncluded: true,
    othersIncluded: false,
  },
  {
    id: 'rede',
    title: 'Rede Credenciada Nacional',
    description: 'Clínicas e laboratórios parceiros em todos os estados do Brasil.',
    safetyIncluded: true,
    othersIncluded: true,
  },
  {
    id: 'laudos',
    title: 'Laudos com Assinatura Digital e ART',
    description: 'Documentos emitidos com validade jurídica garantida por engenheiros e médicos registrados.',
    safetyIncluded: true,
    othersIncluded: false,
  },
  {
    id: 'atendimento',
    title: 'Atendimento Consultivo Humanizado',
    description: 'Especialistas dedicados para tirar dúvidas rápidas e acompanhar auditorias e fiscalizações.',
    safetyIncluded: true,
    othersIncluded: false,
  },
  {
    id: 'treinamentos',
    title: 'Treinamentos Online e Presenciais',
    description: 'Plataforma completa de capacitação de colaboradores com certificados em conformidade com as NRs.',
    safetyIncluded: true,
    othersIncluded: true,
  },
];

export const ServicesTable = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto flex flex-col items-start py-2">
      {/* Aba de Título: Formato de aba com curva invertida mantida no mobile */}
      <div className="w-fit max-w-[calc(100%-28px)] bg-white rounded-t-[20px] sm:rounded-t-[24px] px-5 sm:px-8 py-4 sm:py-7 flex flex-row items-center justify-start gap-2.5 relative z-10">
        <Heading
          level={2}
          className="text-lg sm:text-2xl md:text-[26px] font-bold text-[var(--color-fg-heading)] text-left tracking-tight leading-snug"
        >
          Por que escolher a Safety?
        </Heading>

        {/* Curva de transição invertida conectando a aba ao topo da tabela */}
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

      {/* Corpo da Tabela com cantos arredondados responsivos */}
      <div className="w-full bg-white rounded-b-[20px] sm:rounded-b-[24px] rounded-tr-[20px] sm:rounded-tr-[24px] relative overflow-hidden">
        {/* Cabeçalho da Tabela */}
        <div className="w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 bg-white border-b border-slate-100/80">
          <div className="flex-1" />

          <div className="flex items-center gap-2 sm:gap-6 md:gap-8 shrink-0">
            <div className="w-20 sm:w-28 md:w-44 text-center">
              <span className="text-[12px] sm:text-sm md:text-base font-bold text-[var(--color-brand)]">
                Safety Brasil
              </span>
            </div>

            <div className="w-20 sm:w-28 md:w-44 text-center">
              <span className="text-[12px] sm:text-sm md:text-base font-semibold text-[var(--color-fg-muted)]">
                Outras Empresas
              </span>
            </div>
          </div>
        </div>

        {/* Linhas de Benefícios */}
        <div className="w-full">
          {benefits.map((benefit, index) => {
            const isOdd = index % 2 === 1;

            return (
              <div
                key={benefit.id}
                className={`w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 transition-colors ${
                  isOdd ? 'bg-[#f2f5f8]' : 'bg-white'
                }`}
              >
                <div className="flex-1 pr-3 sm:pr-8 min-w-0">
                  <Text
                    variant="body"
                    className="text-xs sm:text-base font-semibold text-[var(--color-fg-heading)] leading-snug"
                  >
                    {benefit.title}
                  </Text>
                  {benefit.description && (
                    <span className="block text-[11px] sm:text-sm text-[var(--color-fg-muted)] mt-1 font-normal leading-relaxed">
                      {benefit.description}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 sm:gap-6 md:gap-8 shrink-0">
                  <div className="w-20 sm:w-28 md:w-44 flex items-center justify-center">
                    {benefit.safetyIncluded ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 hover:scale-110"
                        aria-label="Incluso na Safety Brasil"
                      >
                        <path
                          d="M 23.384 2.158 C 24.205 3.001 24.205 4.367 23.384 5.21 L 5.384 23.052 C 4.482 23.978 3.125 24.255 1.947 23.753 C 0.768 23.253 0 22.072 0 20.763 L 0 6.474 C 0 5.282 0.941 4.316 2.103 4.316 L 4.443 4.316 C 5.604 4.316 6.545 5.282 6.545 6.474 L 6.545 12.948 L 18.924 0.632 C 19.745 -0.211 21.076 -0.211 21.897 0.632 Z"
                          fill="rgb(120,239,131)"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 sm:w-6 sm:h-6 shrink-0"
                        aria-label="Não incluso"
                      >
                        <path
                          d="M 18.479 0.947 C 19.742 -0.316 21.79 -0.315 23.053 0.948 C 24.316 2.211 24.316 4.258 23.053 5.521 L 16.574 12 L 23.053 18.478 C 24.316 19.741 24.316 21.79 23.053 23.053 C 21.79 24.316 19.741 24.316 18.478 23.053 L 12 16.574 L 5.521 23.053 C 4.258 24.316 2.21 24.316 0.947 23.053 C -0.316 21.79 -0.315 19.741 0.948 18.478 L 7.425 12 L 0.947 5.521 C -0.316 4.258 -0.315 2.211 0.948 0.948 C 2.211 -0.315 4.258 -0.316 5.521 0.947 L 12 7.425 Z"
                          fill="rgb(217,217,217)"
                        />
                      </svg>
                    )}
                  </div>

                  <div className="w-20 sm:w-28 md:w-44 flex items-center justify-center">
                    {benefit.othersIncluded ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 sm:w-7 sm:h-7 shrink-0"
                        aria-label="Incluso"
                      >
                        <path
                          d="M 23.384 2.158 C 24.205 3.001 24.205 4.367 23.384 5.21 L 5.384 23.052 C 4.482 23.978 3.125 24.255 1.947 23.753 C 0.768 23.253 0 22.072 0 20.763 L 0 6.474 C 0 5.282 0.941 4.316 2.103 4.316 L 4.443 4.316 C 5.604 4.316 6.545 5.282 6.545 6.474 L 6.545 12.948 L 18.924 0.632 C 19.745 -0.211 21.076 -0.211 21.897 0.632 Z"
                          fill="rgb(120,239,131)"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 sm:w-6 sm:h-6 shrink-0"
                        aria-label="Não incluso em outras empresas"
                      >
                        <path
                          d="M 18.479 0.947 C 19.742 -0.316 21.79 -0.315 23.053 0.948 C 24.316 2.211 24.316 4.258 23.053 5.521 L 16.574 12 L 23.053 18.478 C 24.316 19.741 24.316 21.79 23.053 23.053 C 21.79 24.316 19.741 24.316 18.478 23.053 L 12 16.574 L 5.521 23.053 C 4.258 24.316 2.21 24.316 0.947 23.053 C -0.316 21.79 -0.315 19.741 0.948 18.478 L 7.425 12 L 0.947 5.521 C -0.316 4.258 -0.315 2.211 0.948 0.948 C 2.211 -0.315 4.258 -0.316 5.521 0.947 L 12 7.425 Z"
                          fill="rgb(217,217,217)"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
