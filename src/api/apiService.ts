export type DeckResponse = {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
  cards?: Card[];
};

export type Card = {
  image: string;
  value: string;
  suit: string;
  code: string;
};

import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

export const getDeck = async (): Promise<DeckResponse | null> => {
  try {
    const response = await axios.get<DeckResponse>(
      `${BASE_URL}/new/shuffle/?deck_count=1`,
    );
    return response.data;
  } catch (error) {
    console.error('Error getting deck:', error);
    return null;
  }
};

export const drawACard = async (
  deckId: string,
): Promise<DeckResponse | null> => {
  try {
    const response = await axios.get<DeckResponse>(
      `${BASE_URL}/${deckId}/draw/?count=1`,
    );
    return response.data;
  } catch (error) {
    console.error('Error drawing a card:', error);
    return null;
  }
};
