import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ExerciseDetailsScreen,
  ExerciseHomeScreen,
  ScheduleScreen,
  SettingsScreen,
  MeditationScreen,
  Session1Screen,
  Session2Screen,
  Session3Screen,
  WoodenFishScreen,
} from '../screens';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../constants';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'ExercisesHomeScreen'} >
      <Stack.Screen name="ExercisesHomeScreen" component={ExerciseHomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="ExerciseDetailsScreen"
        component={ExerciseDetailsScreen}
      />
      <Stack.Screen 
        name="ScheduleScreen" 
        component={ScheduleScreen} options={{ headerShown: false }}/>
      <Stack.Screen
        name="MeditationScreen"
        component={MeditationScreen}/>
      <Stack.Screen
        name="Session1Screen"
        component={Session1Screen}/>
      <Stack.Screen
        name="Session2Screen"
        component={Session2Screen}/>
      <Stack.Screen
        name="Session3Screen"
        component={Session3Screen}/>
      <Stack.Screen
        name="WoodenFishScreen"
        component={WoodenFishScreen}/>
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
        },
      }}
      initialRouteName="AllExercises"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const icons = {
            Schedule: 'calendar-alt',
            AllExercises: 'dumbbell',
            Settings: 'cog',
          };
          return (
            <FontAwesome5Icons
              name={icons[route.name]}
              color={focused ? COLORS.accent : COLORS.black}
              style={{
                fontSize: 20,
                opacity: focused ? 1 : 0.5,
              }}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          const labels = {
            Schedule: 'Main',
            AllExercises: 'Search',
            Settings: 'User',
          };

          return (
            <Text
              style={{
                color: focused ? COLORS.accent : COLORS.black,
                marginBottom: 8,
                opacity: focused ? 1 : 0.6,
                fontWeight: 'bold',
              }}>
              {labels[route.name]}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="AllExercises" component={StackNavigator} options={{headerShown:false}} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;