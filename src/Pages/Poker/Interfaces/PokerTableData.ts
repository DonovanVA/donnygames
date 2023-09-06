export enum BettingRounds {
  BEGINNING = "BEGINNING",
  FIRSTFLOP = "FIRSTFLOP",
  SECONDFLOP = "SECONDFLOP",
  THIRDFLOP = "THIRDFLOP",
  ENDING = "ENDING",
}

export enum RawSuit {
  SPADES = "SPADES",
  CLUBS = "CLUBS",
  DIAMONDS = "DIAMONDS",
  HEARTS = "HEARTS",
}

export enum RawColor {
  RED = "RED",
  BLACK = "BLACK",
}
export interface RawPokerCard {
  card_id: number;
  faceDown: boolean;
  suit: RawSuit;
  value: number;
  color: RawColor;
  playerId: number;
  pokerTable_id: number;
}

export interface Table {
  activeIndex: number;
}
export interface RawPlayerTableOrderInstance {
  player_id: number;
  pokerTable_id: number;
  order: number;
  createdAt: string;
}

export interface RawPlayer {
  player_id: number;
  pokerTable_id: number;
  name: string;
  totalBuyIn: number;
  cash: number;
  cards: RawPokerCard[];
  createdAt: string;
  bet: number;
}

export interface RawTableData {
  activeIndex: number;
  bettingRound: BettingRounds;
  cards: RawPokerCard[];
  createdAt: string;
  playerTableOrderInstance: RawPlayerTableOrderInstance[];
  players: RawPlayer[];
  pokerTable_id: number;
  pot: number;
}

export interface RawPokerServiceData {
  state: BettingRounds;
  player: RawPlayer;
  table: RawTableData;
}
