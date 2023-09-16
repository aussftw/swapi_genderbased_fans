import React, {useMemo} from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface CardProps {
  imageUrl: string;
}

type ImageSource = {
  uri: string;
};

const Card: React.FC<CardProps> = ({imageUrl}) => {
  const imageSource: ImageSource = useMemo(() => ({uri: imageUrl}), [imageUrl]);

  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.cardImage} />
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
