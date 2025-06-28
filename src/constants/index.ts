import { TeamMok } from '../types';

export const teamsDataMok: TeamMok[] = [
  {
    id: 1,
    name: 'Alpha Squad',
    players: [
      { id: 1, nickname: 'FreeBike', fullName: 'Liam Tremblay', isCaptain: false },
      { id: 2, nickname: 'Nighthawk', fullName: 'Juan dela Cruz', isCaptain: true },
      { id: 3, nickname: 'IronGold', fullName: 'Wei Lim', isCaptain: false },
      { id: 4, nickname: 'Wolverker', fullName: 'Maher Nielsen', isCaptain: false },
      { id: 5, nickname: 'Phoenix', fullName: 'Avi Cohen', isCaptain: false },
    ],
    tournaments: [
      { id: 1, name: 'Чемпионат лиги', result: 'Победа', place: 1 },
      { id: 2, name: 'Кубок сезона', result: 'Полуфинал', place: 3 },
    ],
    matches: [
      { id: 1, date: '2024-05-15', opponent: 'Shadow Collective', result: '3:1' },
      { id: 2, date: '2024-05-22', opponent: 'Frost Giants', result: '2:2' },
    ],
    revenues: [
      { year: 2022, amount: 125000 },
      { year: 2023, amount: 185000 },
      { year: 2024, amount: 220000 },
    ],
  },
  {
    id: 2,
    name: 'Shadow Collective',
    players: [
      { id: 1, nickname: 'Ghost', fullName: 'Oliver Smith', isCaptain: true },
      { id: 2, nickname: 'Raven', fullName: 'Emma Johnson', isCaptain: false },
      { id: 3, nickname: 'Viper', fullName: 'Noah Williams', isCaptain: false },
      { id: 4, nickname: 'Wolf', fullName: 'Ava Brown', isCaptain: false },
      { id: 5, nickname: 'Fox', fullName: 'Liam Jones', isCaptain: false },
    ],
    tournaments: [
      { id: 1, name: 'Чемпионат лиги', result: 'Финал', place: 2 },
      { id: 2, name: 'Весенний кубок', result: 'Четвертьфинал', place: 5 },
    ],
    matches: [
      { id: 1, date: '2024-05-10', opponent: 'Alpha Squad', result: '1:3' },
      { id: 2, date: '2024-05-18', opponent: 'Frost Giants', result: '2:0' },
    ],
    revenues: [
      { year: 2022, amount: 125000 },
      { year: 2023, amount: 185000 },
      { year: 2024, amount: 220000 },
    ],
  },
  {
    id: 3,
    name: 'Frost Giants',
    players: [
      { id: 1, nickname: 'Iceberg', fullName: 'Ethan Davis', isCaptain: true },
      { id: 2, nickname: 'Blizzard', fullName: 'Isabella Miller', isCaptain: false },
      { id: 3, nickname: 'Frost', fullName: 'Mason Wilson', isCaptain: false },
      { id: 4, nickname: 'Glacier', fullName: 'Sophia Moore', isCaptain: false },
      { id: 5, nickname: 'Aurora', fullName: 'Logan Taylor', isCaptain: false },
    ],
    tournaments: [
      { id: 1, name: 'Чемпионат лиги', result: 'Полуфинал', place: 4 },
      { id: 2, name: 'Зимний кубок', result: 'Победа', place: 1 },
    ],
    matches: [
      { id: 1, date: '2024-05-12', opponent: 'Shadow Collective', result: '0:2' },
      { id: 2, date: '2024-05-22', opponent: 'Alpha Squad', result: '2:2' },
    ],
    revenues: [
      { year: 2022, amount: 125000 },
      { year: 2023, amount: 185000 },
      { year: 2024, amount: 220000 },
    ],
  },
  {
    id: 4,
    name: 'Iron Legion',
    players: [
      { id: 1, nickname: 'Titan', fullName: 'Jacob Anderson', isCaptain: true },
      { id: 2, nickname: 'Steel', fullName: 'Mia Thomas', isCaptain: false },
      { id: 3, nickname: 'Bulwark', fullName: 'Elijah Jackson', isCaptain: false },
      { id: 4, nickname: 'Forge', fullName: 'Charlotte White', isCaptain: false },
      { id: 5, nickname: 'Anvil', fullName: 'Alexander Harris', isCaptain: false },
    ],
    tournaments: [
      { id: 1, name: 'Осенний кубок', result: 'Финал', place: 2 },
      { id: 2, name: 'Чемпионат лиги', result: 'Четвертьфинал', place: 6 },
    ],
    matches: [
      { id: 1, date: '2024-05-08', opponent: 'Phoenix Rising', result: '1:1' },
      { id: 2, date: '2024-05-20', opponent: 'Storm Riders', result: '3:0' },
    ],
    revenues: [
      { year: 2022, amount: 125000 },
      { year: 2023, amount: 185000 },
      { year: 2024, amount: 220000 },
    ],
  },
  {
    id: 5,
    name: 'Phoenix Rising',
    players: [
      { id: 1, nickname: 'Ember', fullName: 'James Martin', isCaptain: true },
      { id: 2, nickname: 'Blaze', fullName: 'Amelia Thompson', isCaptain: false },
      { id: 3, nickname: 'Inferno', fullName: 'Benjamin Garcia', isCaptain: false },
      { id: 4, nickname: 'Scorch', fullName: 'Harper Martinez', isCaptain: false },
      { id: 5, nickname: 'Ash', fullName: 'Daniel Robinson', isCaptain: false },
    ],
    tournaments: [
      { id: 1, name: 'Летний кубок', result: 'Победа', place: 1 },
      { id: 2, name: 'Чемпионат лиги', result: 'Групповой этап', place: 8 },
    ],
    matches: [
      { id: 1, date: '2024-05-08', opponent: 'Iron Legion', result: '1:1' },
      { id: 2, date: '2024-05-17', opponent: 'Thunderbolts', result: '2:1' },
    ],
    revenues: [
      { year: 2022, amount: 125000 },
      { year: 2023, amount: 185000 },
      { year: 2024, amount: 220000 },
    ],
  },
  {
    id: 6,
    name: 'Storm Riders',
    players: [
      { id: 1, nickname: 'Tempest', fullName: 'Henry Clark', isCaptain: true },
      { id: 2, nickname: 'Hurricane', fullName: 'Evelyn Rodriguez', isCaptain: false },
      { id: 3, nickname: 'Monsoon', fullName: 'Samuel Lewis', isCaptain: false },
      { id: 4, nickname: 'Cyclone', fullName: 'Victoria Lee', isCaptain: false },
      { id: 5, nickname: 'Typhoon', fullName: 'Jackson Walker', isCaptain: false },
    ],
    tournaments: [
      { id: 1, name: 'Чемпионат лиги', result: 'Групповой этап', place: 7 },
      { id: 2, name: 'Весенний кубок', result: 'Полуфинал', place: 4 },
    ],
    matches: [
      { id: 1, date: '2024-05-11', opponent: 'Thunderbolts', result: '0:3' },
      { id: 2, date: '2024-05-20', opponent: 'Iron Legion', result: '0:3' },
    ],
    revenues: [
      { year: 2022, amount: 125000 },
      { year: 2023, amount: 185000 },
      { year: 2024, amount: 220000 },
    ],
  },
  {
    id: 7,
    name: 'Thunderbolts',
    players: [
      { id: 1, nickname: 'Volt', fullName: 'Sebastian Hall', isCaptain: true },
      { id: 2, nickname: 'Bolt', fullName: 'Penelope Young', isCaptain: false },
      { id: 3, nickname: 'Surge', fullName: 'David Allen', isCaptain: false },
      { id: 4, nickname: 'Zap', fullName: 'Scarlett King', isCaptain: false },
      { id: 5, nickname: 'Spark', fullName: 'Joseph Wright', isCaptain: false },
    ],
    tournaments: [
      { id: 1, name: 'Чемпионат лиги', result: 'Полуфинал', place: 3 },
      { id: 2, name: 'Осенний кубок', result: 'Финал', place: 2 },
    ],
    matches: [
      { id: 1, date: '2024-05-11', opponent: 'Storm Riders', result: '3:0' },
      { id: 2, date: '2024-05-17', opponent: 'Phoenix Rising', result: '1:2' },
    ],
    revenues: [
      { year: 2022, amount: 125000 },
      { year: 2023, amount: 185000 },
      { year: 2024, amount: 220000 },
    ],
  },
  {
    id: 8,
    name: 'Wolf Pack',
    players: [
      { id: 1, nickname: 'Alpha', fullName: 'Matthew Scott', isCaptain: true },
      { id: 2, nickname: 'Beta', fullName: 'Luna Green', isCaptain: false },
      { id: 3, nickname: 'Gamma', fullName: 'Luke Adams', isCaptain: false },
      { id: 4, nickname: 'Delta', fullName: 'Stella Baker', isCaptain: false },
      { id: 5, nickname: 'Omega', fullName: 'Christopher Nelson', isCaptain: false },
    ],
    tournaments: [
      { id: 1, name: 'Зимний кубок', result: 'Финал', place: 2 },
      { id: 2, name: 'Чемпионат лиги', result: 'Четвертьфинал', place: 5 },
    ],
    matches: [
      { id: 1, date: '2024-05-09', opponent: 'Dragon Fury', result: '2:2' },
      { id: 2, date: '2024-05-19', opponent: 'Viking Raiders', result: '1:0' },
    ],
    revenues: [
      { year: 2022, amount: 125000 },
      { year: 2023, amount: 185000 },
      { year: 2024, amount: 220000 },
    ],
  },
  {
    id: 9,
    name: 'Dragon Fury',
    players: [
      { id: 1, nickname: 'Flame', fullName: 'Andrew Carter', isCaptain: true },
      { id: 2, nickname: 'Scales', fullName: 'Zoe Mitchell', isCaptain: false },
      { id: 3, nickname: 'Talon', fullName: 'Ryan Perez', isCaptain: false },
      { id: 4, nickname: 'Wing', fullName: 'Hannah Roberts', isCaptain: false },
      { id: 5, nickname: 'Breath', fullName: 'Nathan Turner', isCaptain: false },
    ],
    tournaments: [
      { id: 1, name: 'Чемпионат лиги', result: 'Групповой этап', place: 9 },
      { id: 2, name: 'Летний кубок', result: 'Четвертьфинал', place: 6 },
    ],
    matches: [
      { id: 1, date: '2024-05-09', opponent: 'Wolf Pack', result: '2:2' },
      { id: 2, date: '2024-05-16', opponent: 'Viking Raiders', result: '1:3' },
    ],
    revenues: [
      { year: 2022, amount: 125000 },
      { year: 2023, amount: 185000 },
      { year: 2024, amount: 220000 },
    ],
  },
  {
    id: 10,
    name: 'Viking Raiders',
    players: [
      { id: 1, nickname: 'Ragnar', fullName: 'Joshua Phillips', isCaptain: true },
      { id: 2, nickname: 'Lagertha', fullName: 'Lily Campbell', isCaptain: false },
      { id: 3, nickname: 'Bjorn', fullName: 'Dylan Parker', isCaptain: false },
      { id: 4, nickname: 'Floki', fullName: 'Chloe Evans', isCaptain: false },
      { id: 5, nickname: 'Ivar', fullName: 'Caleb Edwards', isCaptain: false },
    ],
    tournaments: [
      { id: 1, name: 'Чемпионат лиги', result: 'Финал', place: 2 },
      { id: 2, name: 'Осенний кубок', result: 'Победа', place: 1 },
    ],
    matches: [
      { id: 1, date: '2024-05-16', opponent: 'Dragon Fury', result: '3:1' },
      { id: 2, date: '2024-05-19', opponent: 'Wolf Pack', result: '0:1' },
    ],
    revenues: [
      { year: 2022, amount: 125000 },
      { year: 2023, amount: 185000 },
      { year: 2024, amount: 220000 },
    ],
  },
];
