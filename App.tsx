import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import CardsList from './src/components/CardsList/Cardslist';



function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <CardsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default App;
