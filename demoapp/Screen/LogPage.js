import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { primarycolor, screenWidth } from './utils';
import { screenHeight } from './utils';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Authentication logic here
    navigation.replace('usertabs');
    console.log('Login button pressed');
  };

  return (
    <ImageBackground
      source={require('./../assests/bglog.jpg')} // Replace with your image path
      style={styles.background}
    >
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:50,height:60,marginBottom:-10}} source={require('../assests/hj.png')}/>
<Text style={[styles.text1,{fontWeight:'bold'}]}>Doccu</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <Image style={{width:screenWidth*0.75,height:screenHeight*0.35}} source={require('../assests/drlogo.png')}/>
            <Text style={styles.text1}> <Text style={{fontWeight:'bold'}}>Healthy</Text> gets easier. </Text>
            <Text style={styles.text1}>Now on your hand ✋ </Text>
        </View>
    
        <View style={{flexDirection:'row',justifyContent:'space-evenly', gap:20}}>
        <TouchableOpacity onPress={handleLogin} style={[styles.button,{backgroundColor:'#8394A840'}]}>
          <Text style={[styles.buttonText,{color:'#737D8F',fontWeight:'normal'}]}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
        </View>
     
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection:'column',
    padding:30
    
  },
  container: {
    //backgroundColor: 'rgba(0,0,0,0.5)', // Add semi-transparent overlay for better text visibility
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: 'white',
  },
  button: {
    width:'50%',
    height:50,
    backgroundColor: primarycolor,
    padding: 10,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight:'bold'
  },
  text1: {
    fontFamily: 'Arial', // No hyphen, just the font name
    fontSize:24,
    color:'#38435E'
},

});
