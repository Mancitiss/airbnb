import Intro from './src/views/Intro';
import LoginScreen from './src/views/LoginScreen';
import Welcome from './src/views/Welcome';
import Search from './src/views/Search';
import DetailScreen from './src/views/DetailScreen';
import Home from './src/views/Home';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useRef, useState, Component, Fragment} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function App() { 
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}