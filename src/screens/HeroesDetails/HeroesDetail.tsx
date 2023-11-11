import React from 'react';
import {View, Text} from 'react-native';

export const HeroDetails = ({route}) => {
  const {hero} = route.params;

  return (
    <View>
      <Text>{hero.name}</Text>
    </View>
  );
};
