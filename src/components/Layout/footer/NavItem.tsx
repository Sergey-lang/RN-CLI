import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IFooterItem} from './types';
import {TypeRootStackParamsList} from '../../../navigation/types';

interface INavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TypeRootStackParamsList) => void;
  currentRoute: string;
}

const NavItem: FC<INavItem> = ({item, navigate, currentRoute}) => {
  const tw = useTailwind();
  const isActive = currentRoute === item.title;
  return (
    <Pressable
      style={{...tw('items-center'), width: '20%'}}
      onPress={() => navigate(item.title)}>
      <AntDesign
        style={tw(`text-xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`)}
        name={item.iconName}
      />
      <Text
        style={{
          ...tw(`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`),
          marginTop: 1,
        }}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default NavItem;
