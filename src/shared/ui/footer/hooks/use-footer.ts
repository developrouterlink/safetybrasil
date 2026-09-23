import type { FooterLink, FooterProps } from '../footer.types';

export const defaultFooterLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '#mercado' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Treinamentos', href: '#treinamentos' },
  { label: 'eSocial', href: '#esocial' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
];

export const useFooter = (props: FooterProps = {}) => {
  const {
    id = 'contato',
    className,
    phone = '11 5581-0202',
    email = 'comercial@safetybrasil.com.br',
    addressLine1 = 'Av. Senador Casemiro da Rocha, 609 - 10º andar',
    addressLine2 = 'Bairro Mirandópolis - São Paulo/SP - CEP 04047-001',
    addressLine3 = 'Próximo ao metrô Praça da Árvore.',
    links = defaultFooterLinks,
  } = props;

  return {
    id,
    className,
    phone,
    email,
    addressLine1,
    addressLine2,
    addressLine3,
    links,
  };
};
