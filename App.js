import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableNativeFeedback, SafeAreaView, Image, Button, Platform, StatusBar, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { BrowserRouter, Route, Switch} from 'react-dom';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  const handlePress = () => console.log('text pressed');
  const {landscape} = useDeviceOrientation();

  return (
    <WelcomeScreen/>
  );
}

const containerStyles = { backgroundColor: 'orange'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
