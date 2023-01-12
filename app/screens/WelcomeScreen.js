import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

export default function WelcomeScreen() {
  return (
      <ImageBackground style={styles.background} source={require('../assets/background.jpg')} >

        <View style={styles.contentBox}>
          <Image style={styles.logo} source={require('../assets/logo-red.png')} />        
          <Text>Sell What You Don't Need</Text>
        </View>


        <View style={ styles.loginButton} />
        <View style={ styles.registerButton} />
      </ImageBackground>



  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'orange',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'blue',
  },
  logo: {
    width: 100,
    height: 100,
  },
  contentBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 200,
  }
});

