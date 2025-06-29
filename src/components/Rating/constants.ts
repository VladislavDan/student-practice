import { TeamRating } from './types';

export const generateMockData = (): TeamRating[] => {
  const teams = [
    'Alpha Squad',
    'Shadow Collective',
    'Frost Giants',
    'Iron Legion',
    'Phoenix Rising',
    'Storm Riders',
    'Thunderbolts',
    'Wolf Pack',
    'Dragon Fury',
    'Viking Raiders',
    'Cyber Warriors',
    'Neon Blades',
    'Quantum Team',
    'Galactic Force',
    'Steel Titans',
    'Night Owls',
    'Solar Flare',
    'Tidal Wave',
    'Mountain Kings',
    'Desert Foxes',
  ];

  return teams
    .map((team, index) => {
      const preRating = Math.floor(Math.random() * 5000) + 2000;
      const ratingChange = Math.floor(Math.random() * 500) - 250;
      const postRating = preRating + ratingChange;

      return {
        key: `${index}`,
        team,
        preRating,
        postRating,
        change: ratingChange,
      };
    })
    .sort((a, b) => b.postRating - a.postRating);
};
