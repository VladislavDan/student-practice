export type TournamentStatus = 'active' | 'completed' | 'upcoming';

export interface TournamentMok {
  logo?: string;
  id: number;
  name: string;
  organizer: string;
  status: TournamentStatus;
  prizes: string[];
  team: string[];
  playersByCountry: PlayersByCountry[];
  resultTeam: ResultTeam[];
}

export interface Prize {
  place: number;
  prize: string;
}

export interface PlayersByCountry {
  country: string;
  countPlayers: number;
}

export interface ResultTeam {
  name: string;
  place: number;
}
