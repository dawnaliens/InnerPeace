import React from 'react';
import {View, Text,Dimensions,SafeAreaView,StyleSheet, TouchableOpacity, Image,Animated,FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import {Audio} from 'expo-av'
const {width,height} = Dimensions.get('window');


import songs from '../assets/Songs/Data';

const ScheduleScreen = () => {
  const [sound,setSound] = React.useState()

  const playSound = async ()=>{
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync( require('../assets/howlong.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const renderSongs = ({item,index})=>{
    return (
      <View style={style.mainImageWraaper}>
        <View style={[style.imageWrapper, style.elevation]}>
            <Image 
              source={require('../assets/Images/img1.jpeg')}
              style = {style.musicImage}
            />
            <Image source={item.artwork} style = {style.musicImage}/>
        </View>
      </View>
        
    )
  }
  return (
    <SafeAreaView style={style.container}>
      <View style={style.maincontainer}>
        {/* image */}
        
        <FlatList
            renderItem={renderSongs}
            data={songs}
            keyExtractor={item=>item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={()=>{}}
        />

        {/* <View style={[style.imageWrapper, style.elevation]}>
          <Image
            source={require('../assets/Images/img1.jpeg')}
            style={style.musicImage}
          />
        </View>
        </View> */}

        <View>
          <Text style={[style.songContent,style.songName]}>Back at once</Text>

        </View>

        {/* slider */}
        <View>
            <Slider 
              style={style.progressBar}
                value={10}
                minimumValue={0}
                maximumvalue={100}
                thumbTintColor='#FFD369'
                minimumTrackTintColor='#FFD369'
                maximumTrackTintColor='#fff'
                onSlidingComplete={()=>{}}
            />
          {/* music progress durations*/}
            <View style = {style.progressLevelDuration}>
                <Text style={style.progressLabelText}>00:00</Text>
                <Text style={style.progressLabelText}>00:00</Text>
            </View>
        </View>

        <View style={style.musicControlsContainer}>
          <TouchableOpacity onPress={()=>{}}>
              <Ionicons name='play-skip-back-outline' size={35} color='yellow' />
          </TouchableOpacity>

          <TouchableOpacity onPress={playSound}>
              <Ionicons name='ios-pause-circle' size={75} color='yellow' />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}}>
              <Ionicons name='play-skip-forward-outline' size={35} color='yellow' />
          </TouchableOpacity>
        </View>
      </View>

      
      

      <View style={style.bottomContainer}>
        <View style={style.bottomIconWrapper}>
          <TouchableOpacity onPress={()=>{}}>
            <Ionicons name='heart-outline' size={30} color='#888888' />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}}>
            <Ionicons name='heart-outline' size={30} color='#888888' />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}}>
            <Ionicons name='heart-outline' size={30} color='#888888' />
          </TouchableOpacity>


        </View>
      </View>

      


    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#222831',
    },
    maincontainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    bottomContainer:{
      
      borderTopColor: '#393E46',
      borderWidth: 1,
      width: width,
      alignItems: 'center',
      paddingVertical: 15,
    },
    bottomIconContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'80%'
    },
    bottomIconWrapper:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'80%'
    },
    musicImage: {
      width: '100%',
      height: '100%',
      height: '130%',
      marginTop:'10%',
      borderRadius: 15,
    },
    
    imageWrapper:{
      width:300,
      height:300,
      marginBottom:25,
    },
    elevation:{
      elevation:5,
      shadowColor:'#ccc',
      shadowOffset:{
        width:5,
        height:5
      },
      shadowOpacity:0.5,
      shadowRadius:3.84,
    },
    songName:{
      fontSize:18,
      fontWeight:600
    },
    songContent:{
      textAlign:'center',
      color:'#EEEEEE'
    },
    progressBar:{
      width:350,
      height:40,
      marginTop:25,
      flexDirection:'row'
    },
    progressLevelDuration:{
      width:'340',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    progressLabelText:{
      color:'#FFF',
      fontWeight:'500'
    },
    musicControlsContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:'60%',
      marginTop:15
    },
    mainImageWraaper:{
      width:width,
      justifyContent:'center',
      alignItems:'center',
      marginTop:25
    }
})

export default ScheduleScreen;
