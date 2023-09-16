import React, {useState, useEffect} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {getDeck, drawACard} from '../../api/apiService';
import {cardValueToInt} from '../../utils/helperFunctions';

const Game = () => {
  const [deckId, setDeckId] = useState<string | null>(null);
  const [currentCard, setCurrentCard] = useState<any>(null);
  const [remainingCards, setRemainingCards] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const initializeDeck = async () => {
      const deck = await getDeck();
      if (deck) {
        setDeckId(deck.deck_id);
        setRemainingCards(deck.remaining);

        const cardData = await drawACard(deck.deck_id);
        const drawnCard = cardData.cards[0];
        setCurrentCard(drawnCard);
        setRemainingCards(cardData.remaining);
      }
    };
    initializeDeck();
  }, []);

  const handleGuess = async (guess: 'higher' | 'lower') => {
    if (!deckId || !currentCard) {
      return;
    }

    const cardData = await drawACard(deckId);
    const nextCard = cardData.cards[0];
    const isCorrectGuess =
      (guess === 'higher' &&
        cardValueToInt(nextCard.value) > cardValueToInt(currentCard.value)) ||
      (guess === 'lower' &&
        cardValueToInt(nextCard.value) < cardValueToInt(currentCard.value));

    if (isCorrectGuess) {
      setScore(prevScore => prevScore + 1);
    }
    setCurrentCard(nextCard);
    setRemainingCards(cardData.remaining);
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1, alignItems: 'center'}}>
      <Text>Cards Remaining: {remainingCards}</Text>
      {currentCard && (
        <>
          <Image
            source={{uri: currentCard.image}}
            style={{width: 100, height: 150}}
          />
          <Button title="Higher" onPress={() => handleGuess('higher')} />
          <Button title="Lower" onPress={() => handleGuess('lower')} />
        </>
      )}
      <Text>Score: {score}</Text>
    </View>
  );
};

export default Game;
