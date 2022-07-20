import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../components/CustomButton';
import PushNotification from 'react-native-push-notification';

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

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'London',
      lat: 51.507359,
      lng: -0.136439,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Moscow',
      lat: 55.751244,
      lng: 37.618423,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'New York',
      lat: 40.73061,
      lng: -73.935242,
    },
  ];

  const handleNotification = title => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: `Notification title:  ${title}`,
      message: 'Notification message ',
      bigText:
        title +
        'some text here Notification message Notification message Notification message Notification message Notification message Notification message',
      color: 'red',
    });

    PushNotification.localNotificationSchedule({
      channelId: 'test-channel',
      title: 'Alarm!!!',
      message: 'Notification Schedule ',
      date: new Date(Date.now() + 20 * 1000),
      allowWhileIdle: true,
    });
  };

  const renderItem = ({item, idx}) => {
    const {title, lat, lng} = item;
    return (
      <TouchableOpacity
        onPress={() => {
          handleNotification(title, idx);
          navigation.navigate('Map', {city: title, lat, lng});
        }}>
        <View>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome {name}!</Text>
      <CustomButton
        title="Open Camera"
        onPress={() => {
          navigation.navigate('Camera');
        }}
        color="#0080ff"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={value => {
          setName(value);
        }}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
