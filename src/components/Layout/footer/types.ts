import {TypeRootStackParamsList} from '../../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';

export interface IFooterItem {
  iconName: keyof typeof AntDesign.glyphMap;
  title: keyof TypeRootStackParamsList;
}
