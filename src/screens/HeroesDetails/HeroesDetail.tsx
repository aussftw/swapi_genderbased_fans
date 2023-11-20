import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

import {HeroDetailsScreenRouteProp} from '../../navigation';

type HeroDetailsProps = {
  route: HeroDetailsScreenRouteProp;
};

export const HeroDetails = ({route}: HeroDetailsProps) => {
  const {hero} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Name: {hero.name}</Text>
      <Text style={styles.text}>Height: {hero.height}</Text>
      <Text style={styles.text}>Name: {hero.name}</Text>
      <Text style={styles.text}>Height: {hero.height}</Text>
      <Text style={styles.text}>Mass: {hero.mass}</Text>
      <Text style={styles.text}>Hair Color: {hero.hair_color}</Text>
      <Text style={styles.text}>Skin Color: {hero.skin_color}</Text>
      <Text style={styles.text}>Eye Color: {hero.eye_color}</Text>
      <Text style={styles.text}>Birth Year: {hero.birth_year}</Text>
      <Text style={styles.text}>Gender: {hero.gender}</Text>
      <Text style={styles.text}>Created: {hero.created}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'brown',
    borderRadius: 10,
  },
  text: {
    color: 'silver',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
