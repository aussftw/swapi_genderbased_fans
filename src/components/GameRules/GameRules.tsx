import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

type GameRulesProps = {
  text: string;
};

const GameRules: React.FC<GameRulesProps> = ({text}) => {
  return (
    <View style={styles.rulesContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rulesContainer: {
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    textAlign: 'center',
  },
});

export default GameRules;
