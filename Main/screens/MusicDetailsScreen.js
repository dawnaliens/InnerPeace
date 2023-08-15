import React, { useEffect,useRef,useState }from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../config/colors';
import {Audio} from 'expo-av'

// let place1 =[
//     {
//         id: 1,
//         title: 'How long',
//         artist: 'Bobby Richards',
//         artwork: require('../assets/Images/img1.jpeg'),
//         data:require('../assets/howlong.mp3'),
//     },
//    ]
//    let place2 =[
//     {
//         id: 2,
//         title: 'How long',
//         artist: 'Bobby Richards',
//         artwork: require('../assets/Images/img1.jpeg'),
//         data:require('../assets/yinmai.mp3'),
//     },
//    ]
const MusicDetailsScreen = ({navigation, route}) => {
  const place = route.params; 
//   console.log(place) 
  const [sound,setSound] = React.useState()
  
  const playSound= async()=>{
    console.log('Loading music')
    // let place1 =[
    //     {
    //         id: 1,
    //         title: 'How long',
    //         artist: 'Bobby Richards',
    //         artwork: require('../assets/Images/img1.jpeg'),
    //         data:require('../assets/howlong.mp3'),
    //     },
    // ]
    console.log(place.id)
    console.log(place.data)
    if (place.id===1){
        const {sound} = await Audio.Sound.createAsync(require('../assets/howlong.mp3'))
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    }else if( place.id===2){
        const {sound} = await Audio.Sound.createAsync(require('../assets/yinmai.mp3'))
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    }else if( place.id == 3){
        const {sound} = await Audio.Sound.createAsync(require('../assets/yinmai.mp3'))
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    }else{
        console.log('No Sound Found')
        
    }
    
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 0.7}} source={place.artwork}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 20,
            }}>
            {place.title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="place" size={28} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>
            {/* {place.location} */}
          </Text>
        </View>
        <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
          About the trip
        </Text>
        <Text style={{marginTop: 20, lineHeight: 22}}>{place.details}</Text>
      </View>
      <View style={style.footer}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: COLORS.grey,
              marginLeft: 2,
            }}>
            {/* /PER DAY */}
          </Text>
        </View>
        <View style={style.bookNowBtn}>
          <TouchableOpacity onPress={playSound} >
            <Text>play</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MusicDetailsScreen

const style = StyleSheet.create({
    bookNowBtn: {
        height: 50,
        width: 150,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      iconContainer: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: -30,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        right: 20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      detailsContainer: {
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        flex: 0.3,
      },
      header: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      imageDetails: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 30,
      },
      footer: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
})