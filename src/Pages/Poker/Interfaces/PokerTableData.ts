import { Suit, Value } from "../../../Types/interfaces";

export enum BettingRounds {
  BEGINNING = "BEGINNING",
  FIRSTBETTINGROUND = "FIRSTBETTINGROUND",
  FIRSTFLOP = "FIRSTFLOP",
  SECONDBETTINGROUND = "SECONDBETTINGROUND",
  SECONDFLOP = "SECONDFLOP",
  THIRDBETTINGROUND = "THIRDBETTINGROUND",
  THIRDFLOP = "THIRDFLOP",
  FINALBETTINGROUND = "FINALBETTINGROUND",
  ENDING = "ENDING",
}

export enum RawColor {
  RED = "RED",
  BLACK = "BLACK",
}
export interface RawPokerCard {
  card_id: number;
  faceDown: boolean;
  suit: Suit;
  value: Value;
  color: RawColor;
  playerId: number;
  pokerTable_id: number;
  image_url_front: string;
  image_url_back: string;
}

export interface Table {
  activeIndex: number;
}
export interface RawPlayerTableOrderInstance {
  player_id: number;
  pokerTable_id: number;
  order: number;
  createdAt: string;
  isHost: boolean;
  folded: boolean;
}

export interface RawPlayer {
  player_id: number;
  pokerTable_id: number;
  name: string;
  totalBuyIn: number;
  cash: number;
  playerTableOrderInstance: RawPlayerTableOrderInstance;
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
