import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {HeaderButton} from '../components';
import {ScreenNames, Hero} from '../types';
import {HeroDetails, HeroesList} from '../screens/';

export type RootStackParamList = {
  [ScreenNames.HeroesList]: undefined;
  [ScreenNames.HeroDetails]: {hero: Hero};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type HeroDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.HeroDetails
>;

export type HeroDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  ScreenNames.HeroDetails
>;

function getHeroDetailsScreenOptions({
  navigation,
  route,
}: {
  navigation: HeroDetailsScreenNavigationProp;
  route: HeroDetailsScreenRouteProp;
}) {
  return {
    headerTitle: route.params?.hero.name,
    headerLeft: () => <HeaderButton onPress={() => navigation.goBack()} />,
  };
}

export const MainNavigator = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={ScreenNames.HeroesList}
            component={HeroesList}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={ScreenNames.HeroDetails}
            component={HeroDetails}
            options={getHeroDetailsScreenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
