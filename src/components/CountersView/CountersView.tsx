import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {Counter} from '../';

type CountersViewProps = {
  maleFan: number;
  femaleFan: number;
  otherFan: number;
  clearFans: () => void;
};

type FanData = {
  label: string;
  count: number;
};

export const CountersView = ({
  maleFan,
  femaleFan,
  otherFan,
  clearFans,
}: CountersViewProps): JSX.Element => {
  const fanData: FanData[] = [
    {label: 'Male', count: maleFan},
    {label: 'Female', count: femaleFan},
    {label: 'Other', count: otherFan},
  ];

  return (
    <View style={styles.container}>
      {fanData.map((fan, index) => (
        <View key={index} style={styles.counterContainer}>
          <Counter text={fan.label} value={fan.count} />
        </View>
      ))}
      <TouchableOpacity style={styles.clearButton} onPress={clearFans}>
        <Text style={styles.clearButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  clearButtonText: {
    fontSize: 38,
    color: 'white',
  },
});
