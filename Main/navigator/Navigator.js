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
  MusicScreen,
  MusicDetailsScreen,
  WelcomeScreen,
  OnBoard,
  
} from '../screens';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../constants';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'OnBoard'} >
      <Stack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{headerShown:false}}
      />
      <Stack.Screen name="ExercisesHomeScreen" component={ExerciseHomeScreen} options={{ headerShown: false }} />

      <Stack.Screen
        name="ExerciseDetailsScreen"
        component={ExerciseDetailsScreen} options={{headerShown:false}}
      />
      <Stack.Screen 
        name="ScheduleScreen" 
        component={ScheduleScreen} options={{ headerShown: false }}/>
      <Stack.Screen
        name="MeditationScreen"
        component={MeditationScreen} options={{headerShown:false}}/>
      <Stack.Screen
        name="Session1Screen"
        component={Session1Screen} options={{headerShown:false}}/>
      <Stack.Screen
        name="Session2Screen"
        component={Session2Screen} options={{headerShown:false}}/>
      <Stack.Screen
        name="Session3Screen"
        component={Session3Screen} options={{headerShown:false}}/>
      <Stack.Screen
        name="WoodenFishScreen"
        component={WoodenFishScreen} options={{headerShown:false}}/>
      <Stack.Screen
        name="MusicDetailsScreen"
        component={MusicDetailsScreen} options={{headerShown:false}}/>
      <Stack.Screen
        name="MusicScreen"
        component={MusicScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Auth" component={AuthStackNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Register'}}
      />
    </AuthStack.Navigator>
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
            Schedule: 'home',
            AllExercises: 'image',
            Settings: 'user',
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
            AllExercises: 'Dhyana',
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
      <Tab.Screen name="Schedule" component={ExerciseHomeScreen} options={{headerShown:false}} />
      <Tab.Screen name="AllExercises" component={StackNavigator} options={{headerShown:false}} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;