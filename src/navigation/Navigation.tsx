import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Auth from '../screens/Auth/Auth';
import PersonalAccount from '../screens/PersonalAccount/PersonalAccount';
import Purchases from '../screens/Purchases/Purchases';
import Information from '../screens/Information/Information';
import DiscountCards from '../screens/DiscountCards/DiscountCards';
import Feedback from '../screens/Feedback/Feedback';
import Discount from '../screens/Discount/Discount';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  const user = true;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="PersonalAccount" component={PersonalAccount} />
            <Stack.Screen name="DiscountCards" component={DiscountCards} />
            <Stack.Screen name="Purchases" component={Purchases} />
            <Stack.Screen name="Information" component={Information} />
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name="Discount" component={Discount} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
