import React, {useMemo} from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  remainingCards?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  remainingCards,
}) => {
  // memoize the disabled state
  const isDisabled = useMemo(() => remainingCards === 0, [remainingCards]);

  // memoize the button style
  const buttonStyle = useMemo<ViewStyle>(
    () => ({
      padding: 15,
      backgroundColor: !isDisabled ? '#D2042D' : '#333',
      borderRadius: 5,
      marginVertical: 10,
      elevation: 5,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 4,
      margin: 10,
    }),
    [isDisabled],
  );

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={isDisabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CustomButton;
