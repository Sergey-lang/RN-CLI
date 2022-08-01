import React, {FC, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Auth from '../screens/Auth/Auth';
import PersonalAccount from '../screens/PersonalAccount/PersonalAccount';
import Purchases from '../screens/Purchases/Purchases';
import Information from '../screens/Information/Information';
import DiscountCards from '../screens/DiscountCards/DiscountCards';
import Feedback from '../screens/Feedback/Feedback';
import Discount from '../screens/Discount/Discount';
import Footer from '../components/Layout/footer/Footer';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  const user = true;
  const ref = useNavigationContainerRef();
  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const listener = ref.addListener('state', () => {
      setName(ref.getCurrentRoute()?.name);
    });

    return () => ref.removeListener('state', listener);
  }, []);

  return (
    <>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {user ? (
            <>
              <Stack.Screen
                name="PersonalAccount"
                component={PersonalAccount}
              />
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
      {user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
    </>
  );
};

export default Navigation;
