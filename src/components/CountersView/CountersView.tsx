import React from 'react';
import {View} from 'react-native';

import {Counter} from '../Counter/Counter';

type CountersViewProps = {
  maleFan: number;
  femaleFan: number;
  otherFan: number;
  clearFans: () => void;
};

export const CountersView = ({
  maleFan,
  femaleFan,
  otherFan,
  clearFans,
}: CountersViewProps): JSX.Element => {
  return (
    <View>
      <Counter text={'male'} value={maleFan} />
      <Counter text={'female'} value={femaleFan} />
      <Counter text={'other'} value={otherFan} />
    </View>
  );
};
