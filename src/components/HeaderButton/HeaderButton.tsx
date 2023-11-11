import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type HeaderButtonProps = {
  onPress: () => void;
};

export const HeaderButton: React.FC<HeaderButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonStyle}>{'←'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    fontSize: 24,
    color: 'black',
  },
});
