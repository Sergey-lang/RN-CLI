import React, {FC} from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

type Padding = {
  children: JSX.Element | JSX.Element[];
  style?: object;
};

const Padding: FC<Padding> = ({children, style = {}}) => {
  const tw = useTailwind();
  return <View style={{...tw('px-4'), ...style}}>{children}</View>;
};

export default Padding;
