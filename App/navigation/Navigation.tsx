
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Board from '../screens/GameBoard';
import Login from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const  NavStack = () => {
  return (
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={Login} 
      />
      <Stack.Screen 
        name="Game" 
        component={Board} 
      />
    </Stack.Navigator>
  );
}

export default function Navigation(){
    return(
     <NavigationContainer>
       <NavStack />
    </NavigationContainer>
    )
}