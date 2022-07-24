import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import CustomButton from '../components/CustomButton';
import RNFS from 'react-native-fs';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraScreen = () => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const device = devices.back;

  const handleCapture = useCallback(async () => {
    try {
      if (camera.current == null) {
        throw new Error('Camera ref is null!');
      }
      console.log('Taking photo...');
      const photo = await camera.current.takePhoto();
      debugger;
      console.log(photo.path);
      const filePath = photo.path;
      const newFilePath = RNFS.ExternalDirectoryPath + '/test_photo.jpg';
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log('moved');
        })
        .catch(error => {
          console.log(error);
        });
    } catch (e) {
      console.log('handleCapture error', e);
    }
  }, [camera]);

  const onInitialized = useCallback(() => {
    console.log('Camera initialized!');
    setIsCameraInitialized(true);
  }, []);

  if (device == null) {
    return <Text>Device null</Text>;
  }

  return (
    <View style={styles.body}>
      <Text>Camera</Text>
      <Camera
        onInitialized={onInitialized}
        ref={camera}
        style={styles.preview}
        photo
        isActive
        device={device}
      />
      <CustomButton
        title="Capture"
        color="#1eb900"
        onPress={() => handleCapture()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  preview: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CameraScreen;
