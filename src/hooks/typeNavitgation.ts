import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation';

export const useTypedNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};
