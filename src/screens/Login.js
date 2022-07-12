import {Text, View, StyleSheet, Image, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const setData = async () => {
    if (name.length < 2) {
      Alert.alert('Warning!', 'min length 2');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        navigation.navigate('Home');
      } catch (e) {
        console.log('e: ', e);
      }
    }
  };

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserName');
      if (value) {
        navigation.navigate('Home');
      }
    } catch (e) {
      console.log('e: ', e);
    }
  };

  useEffect(() => {
    getData();
    createChannels();
  }, []);

  return (
    <View style={style.body}>
      <Image
        style={style.image}
        source={require('../../assets/img/react-icon-29.jpg')}
      />
      <Text style={style.text}>Async Storage</Text>
      <TextInput
        style={style.input}
        placeholder="Enter your name"
        onChangeText={value => {
          setName(value);
        }}
      />
      <CustomButton title="Login" onPress={setData} color="#1eb900" />
    </View>
  );
};

const style = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});

export default Login;
