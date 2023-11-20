import React, {useState, useCallback, useMemo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import {useTypedNavigation} from '../../hooks/typeNavitgation';
import {Hero, ScreenNames} from '../../types';

type CardProps = {
  hero: Hero;
  handleFans: (hero: Hero) => void;
};

export const Card: React.FC<CardProps> = ({hero, handleFans}) => {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const navigation = useTypedNavigation();
  const goToDetails = useCallback(() => {
    navigation.navigate(ScreenNames.HeroDetails, {hero});
  }, [hero, navigation]);
  const {name} = hero;

  const buttonContainerContent = useMemo(() => {
    const addToFavourites = () => {
      handleFans(hero);
      setIsAddedToFavorites(true);
    };

    const removeFromFavourites = () => {
      setIsAddedToFavorites(false);
      handleFans(hero);
    };
    return isAddedToFavorites ? (
      <TouchableOpacity
        style={styles.button}
        onPress={removeFromFavourites}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Remove from favourites</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={styles.button}
        onPress={addToFavourites}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Add to favourites</Text>
      </TouchableOpacity>
    );
  }, [isAddedToFavorites, handleFans, hero]);

  return (
    <TouchableHighlight
      underlayColor="#DDDDDD"
      onPress={goToDetails}
      style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>{name.toUpperCase()}</Text>
        {buttonContainerContent}
        <Text style={styles.arrowIcon}>→</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'brown',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  cardText: {
    color: 'silver',
    fontSize: 14,
    fontWeight: 'bold',
  },
  arrowIcon: {
    color: 'black',
    fontSize: 18,
  },
  button: {
    backgroundColor: 'brown',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
  addedToFavoritesText: {
    textAlign: 'center',
  },
});
