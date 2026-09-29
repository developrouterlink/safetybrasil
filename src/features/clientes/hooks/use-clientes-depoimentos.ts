'use client';

import { useState } from 'react';

export interface DepoimentoItem {
  id: string;
  citacao: string;
  autor: string;
  cargo: string;
  empresa: string;
}

export const depoimentosList: DepoimentoItem[] = [
  {
    id: '1',
    citacao:
      'Em mais de 10 anos de parceria, nunca tivemos uma única autuação. A equipe da Safety Brasil não nos atende como fornecedor de laudos, eles atuam como uma extensão do nosso próprio time.',
    autor: 'Fernanda Meirelles',
    cargo: 'Diretora de Gente e Gestão',
    empresa: 'Rede Nacional de Varejo',
  },
  {
    id: '2',
    citacao:
      'A transição para o eSocial e o envio de eventos complexos como o S-2240 eram o nosso maior temor. A Safety assumiu a gestão e hoje temos 100% de segurança jurídica.',
    autor: 'Carlos Eduardo Silveira',
    cargo: 'Gerente de Segurança e Saúde Ocupacional',
    empresa: 'Indústria Metalúrgica',
  },
  {
    id: '3',
    citacao:
      'Quando você tem mais de 5.000 vidas distribuídas em vários estados, atendimento rápido não é luxo, é necessidade. A Safety Brasil sempre resolve tudo de ponta a ponta.',
    autor: 'Mariana Rocha',
    cargo: 'Coordenadora de Recursos Humanos',
    empresa: 'Logística & Transportes',
  },
];

export const useClientesDepoimentos = () => {
  const [ativoIndex, setAtivoIndex] = useState(0);

  return {
    depoimentos: depoimentosList,
    depoimentoAtual: depoimentosList[ativoIndex],
    ativoIndex,
    setAtivoIndex,
  };
};
