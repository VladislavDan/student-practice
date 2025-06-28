export interface TeamMok {
  id: number;
  name: string;
  logo?: string;
  players: {
    id: number;
    nickname: string;
    fullName: string;
    isCaptain: boolean;
  }[];
  tournaments: {
    id: number;
    name: string;
    result?: string;
    place?: number;
  }[];
  matches: {
    id: number;
    date: string;
    opponent: string;
    result?: string;
  }[];
  revenues: Revenue[];
}

export interface Revenue {
  year: number;
  amount: number;
}
