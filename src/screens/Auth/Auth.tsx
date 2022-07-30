import {Pressable, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {styleCenter} from '../../components/Layout/Layout';
import Loader from '../../ui/Loader';
import Field from '../../ui/Field';
import Button from '../../ui/Button';

interface IData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const tw = useTailwind();
  const isLoading = false;
  const [data, setData] = useState<IData>({} as IData);
  const [register, setRegister] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [isReg, setIsReg] = useState(false);

  const authHandler = async () => {
    const {email, password} = data;
    // Add await request to back-end
    if (isReg) {
      setRegister(true);
    } else {
      setLogin(true);
    }

    setData({} as IData);
  };

  return (
    <View style={tw(styleCenter)}>
      <View style={tw('mx-5 justify-center items-center h-full font-bold')}>
        <View style={tw('w-9/12')}>
          <Text style={tw('text-center text-gray-800 text-2xl font-bold mb-2')}>
            {isReg ? 'Sign up' : 'Sign in'}
          </Text>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                onChange={val => setData({...data, email: val})}
                val={data.email}
                placeholder="Enter email"
              />
              <Field
                onChange={val => setData({...data, password: val})}
                val={data.password}
                placeholder="Enter password"
                isSecure
              />
              <Button onPress={authHandler} title="Let's go" />
              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={tw('text-gray-800 opacity-30 text-right text-sm')}>
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Auth;
