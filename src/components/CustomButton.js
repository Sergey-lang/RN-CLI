import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, title = 'Button', color, ...props}) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple={{color: '#00f'}}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : color},
        styles.button,
        {...props.style},
      ]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
});

export default CustomButton;
