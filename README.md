# RN-CLI-Extended 

React native [documentation](https://reactnative.dev/)

React navigation [documentation](https://reactnavigation.org/)
1. Basic knowledge (CLI, base components, fonts, navigation, debugging, global styles)
2. Async Storage, SQLite Database
* [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install#android--ios)
* [Push Notification](https://www.npmjs.com/package/react-native-push-notification)
- [build failed after edit AndroidManifest - Solution -<<](https://github.com/zo0r/react-native-push-notification/issues/2220)

2. Google maps
- [NPM Package](https://github.com/react-native-maps/react-native-maps)
- [Documentation](https://developers.google.com/maps/documentation/android-sdk)

Problems: 
- Enable "Maps for your native Android app"
- After update build.gradle file according to instruction - Emulator build failed (removed changes)

3. Camera
- [Documentation](https://mrousavy.com/react-native-vision-camera/docs/guides#android)

Problems: 
- set width={"100%"} height={"90%"} alignContent={"center"} for camera.
- RN Camera deprecated
- [RN FC](https://www.npmjs.com/package/react-native-fs)

4. Testing (Jest)
- [Documentation](https://jestjs.io/ru/docs/getting-started)

5. Tailwind
- [NPM Package](https://www.npmjs.com/package/tailwind-rn)

notes: need install npx setup-tailwind-rn and set content: ['./components/**/*.{js,jsx}'],

6. Icons
- [NPM Package](https://www.npmjs.com/package/react-native-vector-icons)

https://samtapes.medium.com/solve-icons-not-showing-up-react-native-vector-icons-78c312fcf692
