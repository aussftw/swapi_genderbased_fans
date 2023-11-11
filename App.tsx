import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaView, StyleSheet} from 'react-native';

import {MainNavigator} from './src/navigation';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    </QueryClientProvider>
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
