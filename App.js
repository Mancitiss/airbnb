import Intro from './src/views/Intro';
import LoginScreen from './src/views/LoginScreen';
import Welcome from './src/views/Welcome';
import Search from './src/views/Search';
import DetailScreen from './src/views/DetailScreen';
import Home from './src/views/Home';
import ReviewPage from './src/views/Review/review.js';
import BookRoom from './src/views/Review/BookRoom.js';
import Profile from './src/views/Review/Profile.js';
import ChooseRoom from './src/views/Review/Bottom_Sheet_choose.js';
import MoreDetail from './src/views/Review/Bottom_Sheet_room.js';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useRef, useState, Component, Fragment} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
const Stack = createNativeStackNavigator();


export default function App() { 
  LogBox.ignoreAllLogs(true);
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={LoginScreen} options={{gestureEnabled: false}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{gestureEnabled: false}} />
        <Stack.Screen name="Search" component={Search} options={{gestureEnabled: false}} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Reviews" component={ReviewPage} />
        <Stack.Screen name="BookRoom" component={BookRoom} />
        <Stack.Screen name="ChooseRoom" component={ChooseRoom} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MoreDetail" component={MoreDetail} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}