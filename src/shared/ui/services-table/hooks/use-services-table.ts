import type {
  ServiceBenefitItem,
  ServicesTableProps,
} from '../services-table.types';

export const defaultBenefits: ServiceBenefitItem[] = [
  {
    id: 'flexibilidade-local',
    title: 'Flexibilidade no local',
    description:
      'Treinamentos realizados na sua empresa ou na sala de treinamentos própria da Safety Brasil®',
    safetyIncluded: true,
    othersIncluded: false,
  },
  {
    id: 'profissionais-qualificados',
    title: 'Profissionais dedicados e qualificados',
    description:
      'Equipe com engenheiros, médicos do trabalho, técnicos em segurança, bombeiros, psicólogos e enfermeiras',
    safetyIncluded: true,
    othersIncluded: false,
  },
  {
    id: 'flexibilidade-horarios',
    title: 'Flexibilidade nos horários e datas',
    description:
      'Treinamentos inclusive aos finais de semana sem acréscimos nos valores',
    safetyIncluded: true,
    othersIncluded: false,
  },
  {
    id: 'material-proprio',
    title: 'Material didático próprio',
    description:
      'Conteúdo exclusivo, revisado e atualizado anualmente conforme as NRs do Ministério do Trabalho',
    safetyIncluded: true,
    othersIncluded: false,
  },
  {
    id: 'emissao-certificados',
    title: 'Emissão oficial de certificados',
    description:
      'Certificados válidos emitidos com agilidade para a empresa e cada participante',
    safetyIncluded: true,
    othersIncluded: false,
  },
  {
    id: 'experiencia-mercado',
    title: 'Mais de 45 anos no mercado',
    description:
      'Tradição, solidez e parcerias consolidadas de longo prazo com grandes marcas do mercado',
    safetyIncluded: true,
    othersIncluded: false,
  },
  {
    id: 'gestao-completa',
    title: 'Atendimento integral a NRs e eSocial',
    description:
      'Gestão completa de PGR, PCMSO, CIPA, Laudos, Atestados, AVCB e eventos de SST no eSocial',
    safetyIncluded: true,
    othersIncluded: false,
  },
];

export const useServicesTable = (props: ServicesTableProps = {}) => {
  const {
    id = 'tabela-servicos',
    className,
    title = 'Por que escolher a Safety?',
    primaryColumnTitle = 'Safety Brasil',
    secondaryColumnTitle = 'Outras empresas',
    benefits = defaultBenefits,
  } = props;

  return {
    id,
    className,
    title,
    primaryColumnTitle,
    secondaryColumnTitle,
    benefits,
  };
};
