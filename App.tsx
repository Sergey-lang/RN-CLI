import React from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AScreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('B');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>A Screen</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ffffff' : 'green',
        })}>
        <Text>Go to B Screen</Text>
      </Pressable>
    </View>
  );
}

function BScreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('A');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>B Screen</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ffffff' : 'green',
        })}>
        <Text>Go to A Screen</Text>
      </Pressable>
    </View>
  );
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="A" component={AScreen} />
        <Stack.Screen name="B" component={BScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
