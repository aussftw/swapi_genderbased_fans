import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

export const getDeck = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);
    return response.data;
  } catch (error) {
    console.error('Error getting deck:', error);
    return null;
  }
};

export const drawACard = async (deckId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${deckId}/draw/?count=1`);
    return response.data;
  } catch (error) {
    console.error('Error drawing a card:', error);
    return null;
  }
};
