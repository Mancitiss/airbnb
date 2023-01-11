import LoginScreen from './src/views/LoginScreen';
import DetailScreen from './src/views/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useRef, useState, Component, Fragment} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}