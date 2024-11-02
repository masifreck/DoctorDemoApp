import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground ,Image} from 'react-native';
import { primarycolor } from './utils';
import { screenWidth,screenHeight } from './utils';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Wait for 3 seconds, then navigate to Login screen
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Navigate to the Login screen after splash
    }, 3000);

    // Cleanup timer when component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
    source={require('../assests/bglog.jpg')}
    style={styles.container}>
     <View style={{alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <Image style={{width:screenWidth*0.75,height:screenHeight*0.35}} source={require('../assests/hj.png')}/>
         
        </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#1E90FF',
  },
  text1: {
    fontFamily: 'Arial', // No hyphen, just the font name
    fontSize:24,
    color:'#38435E'
},
});
