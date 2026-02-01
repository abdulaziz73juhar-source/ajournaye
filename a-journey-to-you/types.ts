
export enum GameState {
  START = 'START',
  LEVEL_1 = 'LEVEL_1',
  LEVEL_2 = 'LEVEL_2',
  LEVEL_3 = 'LEVEL_3',
  DAILY_SURPRISE = 'DAILY_SURPRISE',
  FINAL_LETTER = 'FINAL_LETTER',
  END = 'END'
}

export interface LoveMessage {
  id: string;
  text: string;
  type: 'short' | 'deep' | 'playful';
}

export interface GameItem {
  id: string;
  type: 'heart' | 'star' | 'chest' | 'flower' | 'lamp' | 'cloud' | 'letter' | 'coffee';
  x: number;
  y: number;
  messageId: string;
}
