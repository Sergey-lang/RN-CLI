import React, {FC} from 'react';
import {useTailwind} from 'tailwind-rn';
import Padding from '../../../ui/Padding';
import {menu} from './Menu';
import NavItem from './NavItem';
import {TypeRootStackParamsList} from '../../../navigation/types';

interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamsList) => void;
  currentRoute: string;
}

const Footer: FC<IFooter> = ({navigate, currentRoute}) => {
  const tw = useTailwind();

  return (
    <Padding
      style={{
        ...tw(
          'flex-row justify-between items-center w-full bg-gray-50 px-0 pb-5 pt-2'
        ),
        borderTopColor: '#e1e1e1',
        borderTopWidth: 1,
      }}>
      {menu.map(item => (
        <NavItem key={item.title} item={item} navigate={navigate} currentRoute={currentRoute}/>
      ))}
    </Padding>
  );
};

export default Footer;
