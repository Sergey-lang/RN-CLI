import React, {FC} from 'react';
import {useTailwind} from 'tailwind-rn';
import Padding from '../../ui/Padding';
import Avatar from '../../ui/Avatar';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export const styleCenter = 'h-full w-full bg-white pt-16';

const Header: FC = () => {
  const tw = useTailwind();

  const {navigate} = useNavigation();

  return (
    <Padding style={tw('flex-row items-center')}>
      <Avatar name="Sergey" />
      <TouchableOpacity
        onPress={() => navigate('PersonalAccount')}
        style={tw('flex-row items-end')}>
        <Text style={tw('text-2xl text-gray-800 font-bold')}>Sergey</Text>
        <Icon
          name="chevron-small-right"
          size={28}
          style={tw('text-gray-800')}
        />
      </TouchableOpacity>
    </Padding>
  );
};

export default Header;
