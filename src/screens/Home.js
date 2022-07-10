import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../components/CustomButton';

const Home = ({navigation}) => {
  const [name, setName] = useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserName');
      if (value) {
        setName(value);
      }
    } catch (e) {
      console.log('e: ', e);
    }
  };

  const updateData = async () => {
    if (name.length < 2) {
      Alert.alert('Warning!', 'min length 2');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        Alert.alert('Access!', 'Your date has been updated.');
      } catch (e) {
        console.log('e: ', e);
      }
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('UserName');
      navigation.navigate('Login');
    } catch (e) {
      console.log('e: ', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome {name}!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={value => {
          setName(value);
        }}
      />
      <CustomButton title="Update" onPress={updateData} color="#ff7f00" />
      <CustomButton title="Remove" onPress={removeData} color="#f40100" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
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

export default Home;
