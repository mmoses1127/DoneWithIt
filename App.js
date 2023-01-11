import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableNativeFeedback, SafeAreaView, Image } from 'react-native';

export default function App() {
  const handlePress = () => console.log('text pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello world!</Text>
      <TouchableNativeFeedback onLongPress={() => console.log('image tapped')}>
        <View style={{width: 200, height: 70, backgroundColor: 'dodgerblue'}}></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
