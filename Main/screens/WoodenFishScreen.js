import { StyleSheet, Text, View, TouchableOpacity,Image,Animated,ImageBackground,Alert} from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import CountContext from "../screens/CountContext"

import {Audio} from 'expo-av'

const image = {uri: 'https://reactjs.org/logo-og.png'};
const WoodenFishScreen = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [sound,setSound] = React.useState()
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.76];
  const scale = animation.interpolate({inputRange, outputRange});
  const [alertText, setAlert] = useState(null);
  const {incrementCount} = useContext(CountContext);

  useEffect(()=>{
           
    if(alertText)
      {
       Alert.alert(
         "Alert Title",
          alertText);
       }
            
      setTimeout(() => {
          setAlert(null);
         }, 1000);
     },[alertText]);
  const simpleAlert=()=>{
    Alert.alert('Merit +1')
    
  }
  // useEffect=(()=>{
  //   if(alertText)
  //     {
  //      Alert.alert(
  //        "Merit +1",
  //         alertText);
  //      }
            
  //     setTimeout(() => {
  //         setAlert(null);
  //        }, 2000);
  // },[alertText]);
  



  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const playSound = async ()=>{
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync( require('../assets/woodenfish.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    onPress()
    incrementCount();
    // setAlert("Hi, I am an alert")
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
          <Text>Today's Merit：{count}</Text>
      </View>
      <ImageBackground source={require('../assets/Images/fish.jpeg')} resizeMode="cover" style={styles.image}>
        <TouchableOpacity style={styles.hint}>
            <Text style={styles.font}>
              Tap Me
            </Text>
        </TouchableOpacity>
        <Animated.View style={[styles.button, {transform: [{scale}]}]}>
          
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={1}
            onPressIn={onPressIn}
            onPress={playSound}
            onPressOut={onPressOut}>
            <Image style={styles.woodenFishSize} source={require('../assets/Images/woodenfish.png')}/>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
      
    </View>
  )
}

export default WoodenFishScreen

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  // button: {
  //   height: 100,
  //   width: 300,
  //   backgroundColor: 'red',
  //   marginBottom: 20,
  //   borderRadius: 10,
  // },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 25,
  },
  woodenFishSize:{
    height:160,
    width:210,
    marginTop:190,
  },
  image:{
    flex:1,
    width:'100%',
    justifyContent:'center'
  },
  countContainer:{
    alignItems:'center',
    
  },
  hint:{
    color:'#fff',
    alignItems:'center',
    justifyContent:'center',
    fontSize:50
  },
  font:{
    fontSize:45
  }
})