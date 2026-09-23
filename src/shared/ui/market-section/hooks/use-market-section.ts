import type { MarketSectionProps } from '../market-section.types';

export const useMarketSection = (props: MarketSectionProps = {}) => {
  const {
    id = 'mercado',
    className,
    imageSrc = '/mercado.png',
    imageAlt = 'Selo Safety Brasil 45+ Anos de Mercado',
    copy = 'A Safety Brasil® entende que oferecer segurança para a vida das pessoas, passa por conhecimento, treinamentos, tecnologia avançada, inovação e comprometimento. É isso que vem oferecendo nesse tempo para seus clientes, confiança de trabalhar com uma empresa séria, referência em suas áreas de atuação e que valoriza acima de tudo, uma vida com segurança.',
  } = props;

  return {
    id,
    className,
    imageSrc,
    imageAlt,
    copy,
  };
};
