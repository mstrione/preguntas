export interface DeckText {
  title: string;
  desc: string;
}

export interface DeckMeta {
  id: number;
  accent: string;
  backBg: string;
  cardBg: string | null;
  hideText: boolean;
  tag: { es: string; en: string };
  es: DeckText;
  en: DeckText;
}

export interface Question {
  id: number;
  text: string;
}

export const DECKS: DeckMeta[] = [
  {
    id: 1, accent: '#e5186a', backBg: '#150810', cardBg: '#c8eaf5', hideText: false,
    tag: { es: 'Íntimo', en: 'Intimate' },
    es: { title: 'Preguntas Personales', desc: 'Para conocernos un poco mejor.' },
    en: { title: 'Personal Questions', desc: 'To get to know each other a little better.' }
  },
  {
    id: 2, accent: '#4d8ef5', backBg: '#080e1a', cardBg: null, hideText: true,
    tag: { es: 'Geek', en: 'Geek' },
    es: { title: 'Versus para Geeks', desc: 'Elige una opción y justifica tu respuesta.' },
    en: { title: 'Versus for Geeks', desc: 'Choose an option and justify your answer.' }
  },
  {
    id: 3, accent: '#a855f7', backBg: '#0c0818', cardBg: null, hideText: true,
    tag: { es: 'Dev', en: 'Dev' },
    es: { title: 'Versus Geeks + Devs', desc: 'El dilema eterno de todo desarrollador.' },
    en: { title: 'Versus Geeks + Devs', desc: 'The eternal dilemma of every developer.' }
  },
  {
    id: 4, accent: '#10c9a0', backBg: '#041410', cardBg: null, hideText: false,
    tag: { es: 'Humor', en: 'Humor' },
    es: { title: 'Preguntas de m.....', desc: 'Las que rompen amistades, equipos y familias.' },
    en: { title: 'WTF Questions', desc: 'The ones that break friendships, teams and families.' }
  },
  {
    id: 5, accent: '#f5a623', backBg: '#100c00', cardBg: null, hideText: false,
    tag: { es: 'Recuerdos', en: 'Memories' },
    es: { title: 'Te acuerdas cuando.....', desc: 'Para revolver el cajón de los recuerdos.' },
    en: { title: 'Do you remember when?', desc: 'A trip down memory lane.' }
  }
];

export const deckNum = (id: number | string): string => String(id).padStart(2, '0');
export const boardImg = (id: number | string): string => `assets/board-${deckNum(id)}.png`;
export const backImg = (id: number | string): string => `assets/${deckNum(id)}/card-back.png`;
export const cardImg = (id: number | string, qid: number | string): string =>
  `assets/${deckNum(id)}/cards/${qid}.png`;

export const getDeck = (id: number | string): DeckMeta | undefined =>
  DECKS.find(d => d.id === Number(id));
