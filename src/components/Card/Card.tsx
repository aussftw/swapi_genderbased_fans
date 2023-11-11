import React, {useCallback} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import {Hero, ScreenNames} from '../../types';
import {useTypedNavigation} from '../../hooks/typeNavitgation';

type CardProps = {
  hero: Hero;
  handleFans: (hero: Hero) => void;
};

export const Card: React.FC<CardProps> = ({hero}) => {
  const navigation = useTypedNavigation();
  const goToDetails = useCallback(() => {
    navigation.navigate(ScreenNames.HeroDetails, {hero});
  }, [hero, navigation]);
  const {name} = hero;

  return (
    <TouchableHighlight
      underlayColor="#DDDDDD"
      onPress={goToDetails}
      style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>{name.toUpperCase()}</Text>
        {/* <Text style={styles.arrowIcon}>→</Text>  */}
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowIcon: {
    color: 'black',
    fontSize: 18,
  },
});
