import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../constants';
let exercise = [
  {
    title: 'Breathing',
    image: require('../assets/Images/breath.jpeg'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },
  // {
  //   title:'Mindfulness',
  //   image: require('../assets/Images/Exercise2.png'),
  //   subTitle:'Live happier and healthier by learning the fundamentals of Yoga',
  //   duration: '5-20 MIN Course',
  // },
  // {
  //   title:'Taichi',
  //   image: require('../assets/Images/Exercise3.png'),
  //   subTitle:'Live happier and healthier by learning the fundamentals of diet recommendation',
  //   duration: '5-20 MIN Course',
  // },
  // {
  //   title:'Music',
  //   image: require('../assets/Images/Exercise4.png'),
  //   subTitle:'Live happier and healthier by learning the fundamentals of diet recommendation',
  //   duration: '5-20 MIN Course',
  // }
]
 let exercise1 =[
  {
    title:'Mindfulness',
    image: require('../assets/Images/mindfulness.jpeg'),
    subTitle:'Live happier and healthier by learning the fundamentals of Yoga',
    duration: '5-20 MIN Course',
  },
 ]
 let exercise2 =[
  {
    title:'Wooden Fish',
    image: require('../assets/Images/woodenfish.jpeg'),
    subTitle:'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  },
 ]

 let exercise3=[
  {
    title:'Music',
    image: require('../assets/Images/music.jpeg'),
    subTitle:'Live happier and healthier by learning the fundamentals of diet recommendation',
    duration: '5-20 MIN Course',
  }
 ]

const ExerciseHomeScreen = ({navigation}) => {

  const ExerciseItem = ({exercise}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExerciseDetailsScreen', {exercise: exercise})
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image
          source={exercise.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {exercise.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const ExerciseItem1 = ({exercise1}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MeditationScreen', {exercise: exercise1})
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image
          source={exercise1.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {exercise1.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const ExerciseItem2 = ({exercise2}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('WoodenFishScreen', {exercise: exercise2})
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image
          source={exercise2.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {exercise2.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const ExerciseItem3 = ({exercise3}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ScheduleScreen', {exercise: exercise3})
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <Image
          source={exercise3.image}
          style={{
            width: '100%',
            resizeMode: 'cover',
            flex: 1,
          }}
        />
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {exercise3.title}
        </Text>
      </TouchableOpacity>
    );
  };





  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={COLORS.accent + '30'}
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height: 0.41 * SIZES.height,
          padding: 30,
          backgroundColor: COLORS.accent + '20',
          position: 'relative',
        }}>
        <Image
          source={require('../assets/Images/BgOrange.png')}
          style={{
            position: 'absolute',
            top: 10,
            left: -50,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.accent + '45',
              marginRight: 0,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 3,
                backgroundColor: COLORS.white,
                width: '40%',
                marginBottom: 8,
                marginLeft: -5,
              }}></View>
            <View
              style={{
                height: 3,
                backgroundColor: COLORS.white,
                width: '40%',
                marginLeft: 5,
              }}></View>
          </View>
        </View>

        <Text style={{fontSize: 30, lineHeight: 45}}>
          Hello, How are you?
        </Text>
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
            marginVertical: 40,
          }}>
          <FontAwesome5Icons
            name="search"
            size={22}
            style={{marginHorizontal: 20}}
          />
          <TextInput placeholder="Search" style={{flex: 1}} />
        </View> */}
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.accent + '55',
            position: 'absolute',
            right: -30,
            bottom: 50,
          }}></View>
      </View>

      <FlatList
        data={exercise}
        style={{
          paddingHorizontal: 20,
          marginTop: -50,
          marginLeft:-180
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ExerciseItem exercise={item} />}
      />
      
      <FlatList
        data={exercise1}
        style={{
          paddingHorizontal: 20,
          marginTop: -292,
          marginLeft:195
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'stretch',
          justifyContent: 'space-around',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ExerciseItem1 exercise1={item} />}
      />
      <FlatList
        data={exercise2}
        style={{
          paddingHorizontal: 20,
          marginTop: -30,
          marginRight:190
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems:'flex-end',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ExerciseItem2 exercise2={item} />}
      />
      <FlatList
        data={exercise3}
        style={{
          paddingHorizontal: 20,
          marginTop: -260,
          marginLeft:220
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems:'flex-end',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ExerciseItem3 exercise3={item} />}
      />
    </SafeAreaView>
  );
};
// const ExerciseHomeScreen = () => {
//   return (
//     <View>
//       <Text>ExerciseHomeScreen</Text>
//     </View>
//   )
// }

export default ExerciseHomeScreen

