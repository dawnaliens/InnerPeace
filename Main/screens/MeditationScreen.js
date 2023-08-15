import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../constants';

let sessions_data = [
    'Session 01',
    'Session 02',
    'Session 03',
    'Session 04',
    'Session 05',
    'Session 06',
];

let session1 = [
    {
        title:'Session 1'
    }
]

let session2 = [
    {
        title:'Session 2'
    }
]

let session3 = [
    {
        title:'Session 3'
    }
]

let session4 = [
    {
        title:'Session 4'
    }
]

let session5 = [
    {
        title:'Session 5'
    }
]

let session6 = [
    {
        title:'Session 6'
    }
]


const MeditationScreen = ({route,navigation}) =>{
    const [exercise, setExercise] = useState(route.params.exercise);

    const SessionItem = ({session,index})=>{
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Session1Screen')
                }
                style={{
                    backgroundColor: COLORS.white,
                    width: 0.5 * SIZES.width - 40,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginHorizontal: 5,
                    height: 70,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    shadowColor: '#9e9898',
                    elevation: 5,
             }}>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Session1Screen')
                    }
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderColor: COLORS.purple,
                        backgroundColor: COLORS.white,
                        marginRight: 15,
                        borderRadius: 20,
                    }}>
                    <FontAwesome5Icons
                        name="play"
                        style={{color:  COLORS.purple}}
                    />  
                </TouchableOpacity> 
                <Text>{session}</Text>
            </TouchableOpacity>
        )
    }

    const SessionItem1 = ({session1})=>{
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Session1Screen')
                }
                style={{
                    backgroundColor: COLORS.white,
                    width: 0.87 * SIZES.width - 40,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginHorizontal: 5,
                    height: 70,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    shadowColor: '#9e9898',
                    elevation: 5,
             }}>
                {/* playIcon*/}
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Session1Screen')
                    }
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderColor: COLORS.purple,
                        backgroundColor: COLORS.white,
                        marginRight: 15,
                        borderRadius: 20,
                    }}>
                    <FontAwesome5Icons
                        name="play"
                        style={{color: COLORS.purple}}
                    />  
                </TouchableOpacity> 
                <Text>{session1.title}</Text>
            </TouchableOpacity>
        )
    }

    const SessionItem2 = ({session2})=>{
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Session2Screen')
                }
                style={{
                    backgroundColor: COLORS.white,
                    width: 0.87 * SIZES.width - 40,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginHorizontal: 5,
                    height: 70,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    shadowColor: '#9e9898',
                    elevation: 5,
             }}>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Session2Screen')
                    }
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderColor: COLORS.purple,
                        backgroundColor:  COLORS.white,
                        marginRight: 15,
                        borderRadius: 20,
                    }}>
                    <FontAwesome5Icons
                        name="play"
                        style={{color:  COLORS.purple}}
                    />  
                </TouchableOpacity> 
                <Text>{session2.title}</Text>
            </TouchableOpacity>
        )
    }

    const SessionItem3 = ({session3})=>{
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Session3Screen')
                }
                style={{
                    backgroundColor: COLORS.white,
                    width: 0.87 * SIZES.width - 40,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginHorizontal: 5,
                    height: 70,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    shadowColor: '#9e9898',
                    elevation: 5,
             }}>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('Session3Screen')
                    }
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderColor: COLORS.purple,
                        backgroundColor:  COLORS.white,
                        marginRight: 15,
                        borderRadius: 20,
                    }}>
                    <FontAwesome5Icons
                        name="play"
                        style={{color:  COLORS.purple}}
                    />  
                </TouchableOpacity> 
                <Text>{session3.title}</Text>
            </TouchableOpacity>
        )
    }

    const SessionItem4 = ({session4})=>{
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('ScheduleScreen')
                }
                style={{
                    backgroundColor: COLORS.white,
                    width: 0.5 * SIZES.width - 40,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginHorizontal: 5,
                    height: 70,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    shadowColor: '#9e9898',
                    elevation: 5,
             }}>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('ScheduleScreen')
                    }
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderColor: COLORS.purple,
                        backgroundColor:  COLORS.white ,
                        marginRight: 15,
                        borderRadius: 20,
                    }}>
                    <FontAwesome5Icons
                        name="play"
                        style={{color:  COLORS.purple}}
                    />  
                </TouchableOpacity> 
                <Text>{session4.title}</Text>
            </TouchableOpacity>
        )
    }

    const SessionItem5 = ({session5})=>{
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('ScheduleScreen')
                }
                style={{
                    backgroundColor: COLORS.white,
                    width: 0.5 * SIZES.width - 40,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginHorizontal: 5,
                    height: 70,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    shadowColor: '#9e9898',
                    elevation: 5,
             }}>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('ScheduleScreen')
                    }
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderColor: COLORS.purple,
                        backgroundColor:  COLORS.purple ,
                        marginRight: 15,
                        borderRadius: 20,
                    }}>
                    <FontAwesome5Icons
                        name="play"
                        style={{color:  COLORS.purple}}
                    />  
                </TouchableOpacity> 
                <Text>{session5.title}</Text>
            </TouchableOpacity>
        )
    }

    const SessionItem6 = ({session6})=>{
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('ScheduleScreen')
                }
                style={{
                    backgroundColor: COLORS.white,
                    width: 0.5 * SIZES.width - 40,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginHorizontal: 5,
                    height: 70,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    shadowColor: '#9e9898',
                    elevation: 5,
             }}>
                <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate('ScheduleScreen')
                    }
                    style={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 2,
                        borderColor: COLORS.purple,
                        backgroundColor:  COLORS.purple ,
                        marginRight: 15,
                        borderRadius: 20,
                    }}>
                    <FontAwesome5Icons
                        name="play"
                        style={{color:  COLORS.purple}}
                    />  
                </TouchableOpacity> 
                <Text>{session6.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{flex: 1, position: 'relative'}}>
            <StatusBar
                backgroundColor={'#C7B8F5'}
                barStyle={'dark-content'}
                animated={true}
            />
            <View 
                style={{
                    width: '100%',
                    height: 0.4 * SIZES.height,
                    padding: 30,
                    backgroundColor: '#C7B8F5',
                    position: 'relative',
                }}>
                <Image
                   source={require('../assets/Images/BgPurple.png')}
                   style={{
                        position: 'absolute',
                        top: 60,
                        left: -50,
                   }}
                />
                <Text style={{fontSize: 30, lineHeight: 45}}>{exercise.title}</Text>
                <Text style={{fontSize: 16, opacity: 0.6, marginVertical: 10}}>
                    {exercise.duration}
                </Text>
                <Text style={{fontSize: 16, width: '85%'}}>{exercise.subTitle}</Text>
                
                {/* Mindfullness image*/}
                {/* <Image
                    source={exercise.image}
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 80,
                        width: 250,
                        height: 250,
                        resizeMode: 'contain',
                    }}
                /> */}
            </View>

            <View style={{marginTop: -30, marginHorizontal: 30}}>
                <FlatList
                    data={session1}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item => item}
                    renderItem={({item}) => <SessionItem1 session1={item} />}
                />

                <FlatList
                    data={session2}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item => item}
                    renderItem={({item}) => <SessionItem2 session2={item} />}
                />

                <FlatList
                    data={session3}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item => item}
                    renderItem={({item}) => <SessionItem3 session3={item} />}
                />

                {/* <FlatList
                    data={session4}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item => item}
                    renderItem={({item}) => <SessionItem4 session4={item} />}
                /> */}
                <Text style={{marginVertical: 15, fontSize: 20}}>{exercise.title}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: COLORS.white,
                        borderRadius: 15,
                        padding: 15,
                        shadowColor: '#9e9898',
                        elevation: 5,
                    }}>
                    <Image
                        source={exercise.image}
                        style={{width: 80, height: 60, resizeMode: 'center'}}
                    />
                    <View>
                        <Text>Basic 2</Text>
                        <Text>Start your deepen you practice</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MeditationScreen

