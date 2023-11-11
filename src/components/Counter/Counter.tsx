import React from 'react';
import {View, Text} from 'react-native';

type CounterProps = {
  text: string;
  value: number;
};
export const Counter = ({text, value}: CounterProps): JSX.Element => {
  return (
    <View>
      <Text style={{color: 'red'}}>{text}</Text>
      <Text style={{color: 'blue'}}>{value}</Text>
    </View>
  );
};
