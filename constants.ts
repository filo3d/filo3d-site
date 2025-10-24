
import { Product, Possibility } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'pet-pop',
    image: 'https://i.imgur.com/k6lP0WN.jpeg',
    title: 'Pet Pop',
    subtitle: 'Tenha o seu melhor amigo sempre por perto',
    dropdownItems: [
      { text: 'Pet Pop R$100,00 à vista via Pix', isPix: true, pixCode: '61524444000110' },
      { text: 'Pet Pop em até 12X com juros', isPix: false, link: 'https://mpago.la/2gKdo1C' },
    ],
  },
  {
    id: 'love-pop-individual',
    image: 'https://i.imgur.com/t4pUf5i.jpeg',
    title: 'Love Pop (Individual)',
    subtitle: 'Uma miniatura, infinitas lembranças',
    dropdownItems: [
      { text: 'Love Pop Individual R$120,00 à vista via Pix', isPix: true, pixCode: '61524444000110' },
      { text: 'Love Pop Individual com 01 adereço R$160,00 à vista via Pix', isPix: true, pixCode: '61524444000110' },
      { text: 'Love Pop Individual com 02 adereços R$200,00 à vista via Pix', isPix: true, pixCode: '61524444000110' },
      { text: 'Love Pop Individual com 03 adereços R$240,00 à vista via Pix', isPix: true, pixCode: '61524444000110' },
      { text: 'Love Pop Individual em até 12X com juros', isPix: false, link: 'https://mpago.la/1KeWCHH' },
      { text: 'Love Pop Individual com 01 adereço em até 12X com juros', isPix: false, link: 'https://mpago.la/2Jn9gPr' },
      { text: 'Love Pop Individual com 02 adereços em até 12X com juros', isPix: false, link: 'https://mpago.la/2SE87PE' },
      { text: 'Love Pop Individual com 03 adereços em até 12X com juros', isPix: false, link: 'https://mpago.la/1v727Tx' },
    ],
  },
  {
    id: 'love-pop-casal',
    image: 'https://i.imgur.com/7b3g0iA.jpeg',
    title: 'Love Pop (Casal)',
    subtitle: 'Surpreenda quem você ama',
    dropdownItems: [
      { text: 'Love Pop Casal R$180,00 à vista via Pix', isPix: true, pixCode: '61524444000110' },
      { text: 'Love Pop Casal com 01 adereço R$220,00 à vista via Pix', isPix: true, pixCode: '61524444000110' },
      { text: 'Love Pop Casal com 02 adereços R$260,00 à vista via Pix', isPix: true, pixCode: '61524444000110' },
      { text: 'Love Pop Casal com 03 adereços R$300,00 à vista via Pix', isPix: true, pixCode: '61524444000110' },
      { text: 'Love Pop Casal em até 12X com juros', isPix: false, link: 'https://mpago.la/33Yozgx' },
      { text: 'Love Pop Casal com 01 adereço em até 12X com juros', isPix: false, link: 'https://mpago.la/2s79L8v' },
      { text: 'Love Pop Casal com 02 adereços em até 12X com juros', isPix: false, link: 'https://mpago.la/2t6JB67' },
      { text: 'Love Pop Casal com 03 adereços em até 12X com juros', isPix: false, link: 'https://mpago.la/1DYUB6U' },
    ],
  },
];

export const POSSIBILITIES: Possibility[] = [
  { image: 'https://i.imgur.com/uP1M4f7.jpeg', title: 'Geek', subtitle: 'Do seu mundo favorito direto pra sua estante.' },
  { image: 'https://i.imgur.com/39Nqj9p.jpeg', title: 'Arquitetura', subtitle: 'Maquetes 3D físicas para encantar seus clientes.' },
  { image: 'https://i.imgur.com/2Xy5E1f.jpeg', title: 'Divulga +', subtitle: 'Itens personalizados que ajudam sua marca ir mais longe.' },
  { image: 'https://i.imgur.com/uGzX60L.jpeg', title: 'Utilitários', subtitle: 'Soluções práticas e inteligentes para facilitar o seu dia-a-dia.' },
  { image: 'https://i.imgur.com/G4l032k.jpeg', title: 'Protótipos', subtitle: 'Tem uma ideia e gostaria de tirá-la do papel? Manda pra gente!' },
];
