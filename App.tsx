import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import GameBoardView from './src/screens/GameBoardView/GameBoardView';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <GameBoardView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;
