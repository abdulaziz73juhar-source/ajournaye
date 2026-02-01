
import { LoveMessage } from './types';

export const LOVE_MESSAGES: LoveMessage[] = [
  { id: 'm1', text: "I smile every time I think of you.", type: 'short' },
  { id: 'm2', text: "Loving you feels like coming home.", type: 'deep' },
  { id: 'm3', text: "Warning: This game contains extreme levels of you being loved.", type: 'playful' },
  { id: 'm4', text: "You are my favorite thought.", type: 'short' },
  { id: 'm5', text: "Every day with you is my new favorite day.", type: 'deep' },
  { id: 'm6', text: "I’d choose you in every lifetime.", type: 'deep' },
  { id: 'm7', text: "You make my heart skip a beat... and then dance.", type: 'playful' },
  { id: 'm8', text: "In your eyes, I see my entire future.", type: 'deep' },
  { id: 'm9', text: "My love for you grows more than these pixels ever could.", type: 'playful' },
  { id: 'm10', text: "You are the magic in my ordinary world.", type: 'deep' },
  { id: 'm11', text: "Just a reminder: You are breathtaking.", type: 'short' },
  { id: 'm12', text: "I love you more than coffee (but please don't make me prove it).", type: 'playful' },
];

export const DAILY_MESSAGES: Record<string, string> = {
  '0': "Today is special because you're in it.",
  '1': "You are the sunshine on my rainiest days.",
  '2': "My heart beats for you, and only you.",
  '3': "I am so lucky to call you mine.",
  '4': "You are more beautiful than any sunset.",
  '5': "I'm already looking forward to our next kiss.",
  '6': "You are my best friend and my true love.",
};

export const COLORS = {
  blush: '#FADADD',
  deepRed: '#8B0000',
  warmPurple: '#6A0DAD',
  moonlightBlue: '#1E293B',
  gold: '#D4AF37'
};
