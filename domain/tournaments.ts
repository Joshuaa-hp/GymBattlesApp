export type Result = 'W' | 'L' | 'T' | 'ID' | 'PENDING';

export type SpriteId = string;

export type Tournament = {
  id: string;
  name: string | null;
  date: number; // epoch millis
  myDeck?: string | null;
};

export type Round = {
  id: string;
  tournamentId: string;
  roundNumber: number;
  result: Result;
  opponentSprite1: SpriteId;
  opponentSprite2?: SpriteId | null;
  notes?: string | null;
  createdAt: number;
};

export function createTournamentDraft(): Tournament {
  return {
    id: '',
    name: null,
    date: Date.now(),
    myDeck: null,
  };
}