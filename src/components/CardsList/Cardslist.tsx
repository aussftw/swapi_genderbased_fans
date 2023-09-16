import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {getDeck, drawACard} from '../../api/apiService';
import {cardValueToInt} from '../../utils/helperFunctions';
import {Card, CustomButton, GameRules} from '../../components';

import {gameRules, errorText} from '../Constants/textData';

const Game = () => {
  const [deckId, setDeckId] = useState<string | null>(null);
  const [currentCard, setCurrentCard] = useState<any>(null);
  const [remainingCards, setRemainingCards] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  // Effect to initialize the deck and fetch the first card on component mount.

  useEffect(() => {
    const initializeDeck = async () => {
      try {
        // Fetch a new deck from the API
        const deck = await getDeck();
        setDeckId(deck.deck_id);
        setRemainingCards(deck.remaining);

        // Fetch a card from the new deck
        const cardData = await drawACard(deck.deck_id);
        setCurrentCard(cardData.cards[0]);
        setRemainingCards(cardData.remaining);
      } catch (err) {
        // If there's an error, set the error state.
        setError(errorText);
      }
    };
    initializeDeck();
  }, []);

  const handleGuess = useCallback(
    async (guess: 'higher' | 'lower') => {
      if (!deckId || !currentCard) {
        return;
      }

      try {
        // Fetch a new card for comparison
        const cardData = await drawACard(deckId);
        const nextCard = cardData.cards[0];
        const currentCardValue = cardValueToInt(currentCard.value);
        const nextCardValue = cardValueToInt(nextCard.value);

        // Check if the user's guess is correct.
        const isHigherGuess =
          guess === 'higher' && nextCardValue > currentCardValue;
        const isLowerGuess =
          guess === 'lower' && nextCardValue < currentCardValue;

        // Increase the score if the guess is correct.
        if (isHigherGuess || isLowerGuess) {
          setScore(prevScore => prevScore + 1);
        }
        // Update the current card and the remaining cards count.
        setCurrentCard(nextCard);
        setRemainingCards(cardData.remaining);
      } catch (err) {
        // If there's an error, set the error state.
        setError(errorText);
      }
    },
    [deckId, currentCard],
  );

  const resetGame = useCallback(async () => {
    try {
      const deck = await getDeck();
      setDeckId(deck.deck_id);
      setRemainingCards(deck.remaining);
      const cardData = await drawACard(deck.deck_id);
      setCurrentCard(cardData.cards[0]);
      setRemainingCards(cardData.remaining);
      setScore(0);
    } catch (err) {
      setError('Failed to reset the game. Please try again.');
    }
  }, []);

  const makeAGuess = (guess: 'higher' | 'lower') => {
    handleGuess(guess);
  };

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          <Text style={styles.title}>Guessing Game</Text>

          <GameRules text={gameRules} />

          {currentCard && (
            <>
              <Text style={styles.infoText}>Score: {score}</Text>
              <Card imageUrl={currentCard.image} />
              <Text style={styles.infoText}>
                Cards Remaining: {remainingCards}
              </Text>
              <View style={styles.buttonsBar}>
                <CustomButton
                  title="Higher"
                  onPress={() => makeAGuess('higher')}
                  remainingCards={remainingCards}
                />
                <CustomButton
                  title="Lower"
                  onPress={() => makeAGuess('lower')}
                  remainingCards={remainingCards}
                />
              </View>

              <CustomButton title="Reset Game" onPress={resetGame} />
            </>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },

  buttonsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Game;
