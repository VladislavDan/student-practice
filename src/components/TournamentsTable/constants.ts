import { Prize, TournamentMok, TournamentStatus } from './types';

export const statusMap: Record<TournamentStatus, { color: string; text: string }> = {
  active: { color: 'green', text: 'Активный' },
  completed: { color: 'red', text: 'Завершен' },
  upcoming: { color: 'blue', text: 'Предстоящий' },
};

const generatePrizeDataMok = (basePrize: number): Prize[] => {
  return Array.from({ length: 20 }, (_, index) => ({
    place: index + 1,
    prize: `$${(basePrize - index * (basePrize * 0.05))
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
  }));
};

export const tournamentsDataMok: TournamentMok[] = [
  {
    id: 1,
    name: 'Чемпионат лиги 2024',
    organizer: 'Киберспортивная ассоциация',
    status: 'active',
    prizes: generatePrizeDataMok(8200000).map((p) => p.prize),
    team: ['Название 1', 'Название 2'],
    playersByCountry: [
      {
        country: 'Moscow',
        countPlayers: 50,
      },
    ],
    resultTeam: [
      {
        name: 'Alpha Squad',
        place: 1,
      },
      {
        name: 'Shadow Collective',
        place: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'Кубок сезона',
    organizer: 'Gaming Federation',
    status: 'upcoming',
    prizes: generatePrizeDataMok(8200000).map((p) => p.prize),
    team: ['Название 1', 'Название 2,'],
    playersByCountry: [
      {
        country: 'Moscow',
        countPlayers: 50,
      },
    ],
    resultTeam: [
      {
        name: 'Alpha Squad',
        place: 1,
      },
      {
        name: 'Shadow Collective',
        place: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Зимний турнир',
    organizer: 'Winter Esports',
    status: 'completed',
    prizes: generatePrizeDataMok(8200000).map((p) => p.prize),
    team: ['Название 1', 'Название 2,'],
    playersByCountry: [
      {
        country: 'Moscow',
        countPlayers: 50,
      },
    ],
    resultTeam: [
      {
        name: 'Alpha Squad',
        place: 1,
      },
      {
        name: 'Shadow Collective',
        place: 2,
      },
    ],
  },
];
