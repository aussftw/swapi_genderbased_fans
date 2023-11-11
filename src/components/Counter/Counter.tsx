import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type CounterProps = {
  text: string;
  value: number;
};

export const Counter = ({text, value}: CounterProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
      <Text style={styles.valueStyle}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'silver',
    fontSize: 14,
  },
  valueStyle: {
    color: 'brown',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
