import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface CardProps {
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({imageUrl}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: imageUrl}} style={styles.cardImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  cardImage: {
    width: 100,
    height: 139,
    resizeMode: 'contain',
  },
});

export default Card;
