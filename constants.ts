
import { Product, Possibility } from './types';

export const POP_PRODUCTS: Product[] = [
  {
    imageSrc: 'https://i.imgur.com/0FkMi7c.png',
    title: 'Pet Pop',
    description: 'Tenha o seu melhor amigo sempre por perto',
    purchaseOptions: [
      { text: 'Pet Pop R$100,00 à vista via Pix 61524444000110' },
      { text: 'Pet Pop em até 12X com juros', link: 'https://mpago.la/2gKdo1C' },
    ],
  },
  {
    imageSrc: 'https://i.imgur.com/xPrCYhX.png',
    title: 'Love Pop (Individual)',
    description: 'Uma miniatura, infinitas lembranças',
    purchaseOptions: [
      { text: 'Love Pop Individual R$120,00 à vista via Pix 61524444000110' },
      { text: 'Love Pop Individual com 01 adereço R$160,00 à vista via Pix 61524444000110' },
      { text: 'Love Pop Individual com 02 adereços R$200,00 à vista via Pix 61524444000110' },
      { text: 'Love Pop Individual com 03 adereços R$240,00 à vista via Pix 61524444000110' },
      { text: 'Love Pop Individual em até 12X com juros', link: 'https://mpago.la/1KeWCHH' },
      { text: 'Love Pop Individual com 01 adereço em até 12X com juros', link: 'https://mpago.la/2Jn9gPr' },
      { text: 'Love Pop Individual com 02 adereços em até 12X com juros', link: 'https://mpago.la/2SE87PE' },
      { text: 'Love Pop Individual com 03 adereços em até 12X com juros', link: 'https://mpago.la/1v727Tx' },
    ],
  },
  {
    imageSrc: 'https://i.imgur.com/iCZNdOt.png',
    title: 'Love Pop (Casal)',
    description: 'Surpreenda quem você ama',
    purchaseOptions: [
      { text: 'Love Pop Casal R$180,00 à vista via Pix 61524444000110' },
      { text: 'Love Pop Casal com 01 adereço R$220,00 à vista via Pix 61524444000110' },
      { text: 'Love Pop Casal com 02 adereços R$260,00 à vista via Pix 61524444000110' },
      { text: 'Love Pop Casal com 03 adereços R$300,00 à vista via Pix 61524444000110' },
      { text: 'Love Pop Casal em até 12X com juros', link: 'https://mpago.la/33Yozgx' },
      { text: 'Love Pop Casal com 01 adereço em até 12X com juros', link: 'https://mpago.la/2s79L8v' },
      { text: 'Love Pop Casal com 02 adereços em até 12X com juros', link: 'https://mpago.la/2t6JB67' },
      { text: 'Love Pop Casal com 03 adereços em até 12X com juros', link: 'https://mpago.la/1DYUB6U' },
    ],
  },
];

export const POSSIBILITIES: Possibility[] = [
    {
      title: 'Geek',
      description: 'Do seu mundo favorito direto pra sua estante.',
      imageSrc: 'https://i.imgur.com/BbfUuwt.png',
    },
    {
      title: 'Divulga +',
      description: 'Itens personalizados que ajudam sua marca ir mais longe.',
      imageSrc: 'https://i.imgur.com/Xt6HmBs.png',
    },
    {
      title: 'Arquitetura',
      description: 'Maquetes 3D físicas para encantar seus clientes.',
      imageSrc: 'https://i.imgur.com/kcArYWz.png',
    },
    {
      title: 'Utilitários',
      description: 'Soluções práticas e inteligentes para facilitar o seu dia-a-dia.',
      imageSrc: 'https://i.imgur.com/sksKGxz.png',
    },
    {
      title: 'Protótipos',
      description: 'Tem uma ideia e gostaria de tirá-la do papel? Manda pra gente!',
      imageSrc: 'https://i.imgur.com/ejo8fSX.png',
    },
  ];
