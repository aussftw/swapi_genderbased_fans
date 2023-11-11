import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HeroDetails, HeroesList} from '../screens/';
import {ScreenNames, Hero} from '../types';

export type RootStackParamList = {
  [ScreenNames.HeroesList]: undefined;
  [ScreenNames.HeroDetails]: {hero: Hero};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = (): JSX.Element => {
  const HeroDetailsScreenOption = useMemo(
    () => ({
      headerShown: false,
    }),
    [],
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={ScreenNames.HeroesList}
            component={HeroesList}
            options={HeroDetailsScreenOption}
          />
          <Stack.Screen
            name={ScreenNames.HeroDetails}
            component={HeroDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
