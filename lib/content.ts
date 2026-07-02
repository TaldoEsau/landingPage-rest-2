/**
 * Conteúdo do Restaurante Eduarda Cozinha.
 * 100% em Português Brasileiro.
 * Fonte única de verdade para todas as seções da landing page.
 */

export const site = {
  nome: "Eduarda Cozinha",
  nomeCompleto: "Eduarda Cozinha & Vinhos",
  slogan: "Uma experiência gastronômica memorável e elegante em cada detalhe.",
  telefone: "(11) 98765-4321",
  telefoneHref: "tel:+5511987654321",
  whatsapp: "https://wa.me/5511987654321",
  email: "contato@eduardacozinha.com.br",
  endereco: {
    rua: "Alameda Lorena, 1420",
    bairro: "Jardins",
    cidadeEstado: "São Paulo - SP, 01424-002",
  },
  horario: "Terça a Sábado · 19h às 23h30 | Almoço Sex e Sáb · 12h às 15h",
  reservasUrl: "#reserva",
  instagram: "https://www.instagram.com/eduardacozinha",
  anuncio: "Reservas abertas para os finais de semana. Experimente o nosso Menu Degustação Harmonizado.",
} as const;

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Pratos", href: "#pratos" },
  { label: "Drinks", href: "#drinks" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Reserva", href: "#reserva" },
] as const;

export const essencia = {
  eyebrow: "A Essência do Eduarda",
  titulo: "Homenagem, Paixão e Culinária Italiana",
  chef: "Cris Farias",
  cargo: "Chef & Proprietária",
  imagem: "/images/chef-cris.png",
  textoCompleto:
    "O Eduarda Cozinha e Vinhos nasceu de uma homenagem especial. O nome da casa é um tributo carinhoso à mãe da nossa chef e proprietária, Cris Farias, a principal inspiração por trás da nossa paixão por receber bem. Trazemos o coração da culinária italiana para a mesa, em um ambiente que equilibra perfeitamente a elegância e o aconchego. Cada prato do nosso menu é desenhado para criar uma experiência completa, harmonizando de forma impecável com nossa seleção exclusiva de vinhos e drinks autorais.",
} as const;

export type PratoDestaque = {
  nome: string;
  categoria: string;
  descricao: string;
  preco: string;
  imagem: string;
  alt: string;
};

export const pratosDestaque: PratoDestaque[] = [
  {
    nome: "Parmegiana de Filet Mignon com Espaguete Artesanal",
    categoria: "Especialidade da Casa",
    descricao: "Filet mignon gratinado com muçarela de búfala artesanal, molho de pomodoro italiano fresco e espaguete al dente salteado com manjericão.",
    preco: "R$ 138",
    imagem: "/images/prato-parmegiana.jpeg",
    alt: "Prato de Parmegiana artesanal com espaguete fresco e taça de vinho",
  },
  {
    nome: "Robalo Grelhado em Cama de Legumes Grelhados",
    categoria: "Peixes & Frutos do Mar",
    descricao: "Lombo de robalo na chapa ao azeite de ervas finas, mousseline de mandioquinha, mini cenouras glaceadas e emulsão de cítricos.",
    preco: "R$ 156",
    imagem: "/images/prato-peixe.jpeg",
    alt: "Robalo grelhado com legumes grelhados e molho especial em prato refinado",
  },
  {
    nome: "Carré de Cordeiro ao Roti sobre Risoto de Açafrão",
    categoria: "Carnes Nobres",
    descricao: "Carré de cordeiro em crosta de ervas grelhado ao ponto exato, glaceado ao molho roti com cebolas tostadas e risoto cremoso de açafrão puríssimo.",
    preco: "R$ 178",
    imagem: "/images/prato-cordeiro.jpeg",
    alt: "Carré de cordeiro tostado com risoto cremoso de açafrão",
  },
];

export type DrinkDestaque = {
  nome: string;
  descricao: string;
  ingredientes: string;
  preco: string;
  imagem: string;
  alt: string;
};

export const drinksDestaque: DrinkDestaque[] = [
  {
    nome: "Dona Onça",
    descricao: "Cocktail vibrante e refrescante que harmoniza cítricos e especiarias com base de maracujá fresco.",
    ingredientes: "Bourbon premium, maracujá, xarope artesanal de gengibre e fatia de cítrico desidratado.",
    preco: "R$ 54",
    imagem: "/images/drink-dona-onca.jpeg",
    alt: "Drink Dona Onça servido em copo alto trabalhado com fatia de limão desidratado",
  },
  {
    nome: "Madame Eduarda",
    descricao: "Bebida autoral de visual hipnotizante com gradiente púrpura e flor comestível amarela.",
    ingredientes: "Gin botânico infusionado com flor de fada, tônica artesanal, licor de sabugueiro e toque de limão siciliano.",
    preco: "R$ 58",
    imagem: "/images/drink-madame-eduarda.jpeg",
    alt: "Drink Madame Eduarda com infusão púrpura e flor amarela no topo",
  },
  {
    nome: "Primavera Berry Breeze",
    descricao: "Cocktail sedoso com espuma aveludada e finalização de hibiscus triturado e cereja.",
    ingredientes: "Vodka super premium, infusão de frutas vermelhas, néctar de hibisco e espuma cítrica.",
    preco: "R$ 52",
    imagem: "/images/drink-primavera.jpeg",
    alt: "Drink Primavera Berry Breeze com espuma aveludada e cereja de enfeite",
  },
  {
    nome: "Sunset Aperitif",
    descricao: "Uma bebida sofisticada e leve com camada dupla de cor e cerejas artesanais na ponta.",
    ingredientes: "Aperol, espumante brut, infusão de casca de laranja e licor de cereja selvagem.",
    preco: "R$ 49",
    imagem: "/images/drink-cocktail.jpeg",
    alt: "Drink em taça alta de vinho com camada dupla e espeto de cereja",
  },
];

export type ItemCardapio = { nome: string; descricao?: string; preco: string };
export type SecaoCardapio = { titulo: string; itens: ItemCardapio[] };

export const cardapio: SecaoCardapio[] = [
  {
    titulo: "Entradas & Belisquetes",
    itens: [
      { nome: "Tartare de Atum com Avocado e Chips de Raízes", descricao: "Atum fresco selado no azeite de gergelim com abacate e tostadas crocantes", preco: "78" },
      { nome: "Burrata Cremosa com Tomates Confit e Pesto de Pistache", descricao: "Burrata fresca envolvida em pesto artesanal de pistache e focaccia quente", preco: "74" },
      { nome: "Carpaccio de Filet Mignon com Trufa Branca e Rúcula", descricao: "Laminas finas de filet mignon, alcaparras, parmesão 24 meses e azeite trufado", preco: "82" },
      { nome: "Croquetes de Cordeiro com Geléia de Pimenta Defumada", descricao: "Massa aveludada rechada com cordeiro desfiado e molho agridoce picante", preco: "62" },
    ],
  },
  {
    titulo: "Pratos Principais",
    itens: [
      { nome: "Parmegiana de Filet Mignon com Espaguete Artesanal", descricao: "Filet mignon gratinado com muçarela de búfala e molho pomodoro fresco", preco: "138" },
      { nome: "Robalo Grelhado em Cama de Legumes Grelhados", descricao: "Robalo na chapa ao azeite de ervas com mandioquinha e legumes da estação", preco: "156" },
      { nome: "Carré de Cordeiro ao Roti sobre Risoto de Açafrão", descricao: "Carré em crosta de ervas glaceado ao roti com risoto cremoso", preco: "178" },
      { nome: "Risoto de Cogumelos Selvagens e Trufa Negra (Vegano/GF)", descricao: "Arroz arbóreo com mix de cogumelos frescos, azeite trufado e crisp de alho-poró", preco: "118" },
      { nome: "Polvo Grelhado à Galega com Batatas ao Murro", descricao: "Tentáculos de polvo macios com páprica espanhola, batatas tostadas e alho confit", preco: "168" },
    ],
  },
  {
    titulo: "Sobremesas",
    itens: [
      { nome: "Mil-Folhas de Baunilha de Madagascar e Amêndoas", descricao: "Massa folhada crocante intercalada com creme patissière leve e calda de caramelo", preco: "46" },
      { nome: "Petit Gâteau de Chocolate 70% com Gelato de Pistache", descricao: "Bolo quente de cacau belga com centro cremoso e sorvete artesanal de pistache", preco: "48" },
      { nome: "Torta Desconstruída de Cítricos e Merengue Maçaricado", descricao: "Creme leve de limão siciliano, crumble de amêndoas e picos de merengue", preco: "42" },
    ],
  },
];

export const notasCardapio = [
  "Dispomos de opções veganas, vegetarianas e sem glúten em nosso menu.",
  "Informar restrições alimentares ou alergias ao seu atendente no momento da reserva.",
  "Taxa de serviço voluntária de 13% não incluída no valor dos pratos.",
];

export const faqs = [
  {
    q: "Como funcionam as reservas no Eduarda Cozinha?",
    a: "As reservas podem ser efetuadas diretamente aqui em nosso site ou pelo WhatsApp oficial. Recomendamos antecedência mínima de 48h para finais de semana.",
  },
  {
    q: "Qual é a política para grupos e eventos?",
    a: "Recebemos mesas de até 8 pessoas na área principal. Para eventos corporativos ou comemorações exclusivas, entre em contato via e-mail ou WhatsApp para consultar nosso espaço privativo.",
  },
  {
    q: "O restaurante possui dress code?",
    a: "Sugerimos o estilo esporte fino ou casual elegante, em sintonia com a atmosfera chique e acolhedora de nossa casa.",
  },
  {
    q: "Vocês atendem restrições alimentares?",
    a: "Sim. Nossos chefs preparam opções especiais veganas, vegetarianas e sem glúten com o mesmo padrão de excelência.",
  },
] as const;
