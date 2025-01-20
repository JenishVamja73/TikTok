import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../Login/Index';
const Stack = createNativeStackNavigator();



const Navgtion = () => {
  return (
    <>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} 
        />

      </Stack.Navigator>    
      </NavigationContainer>
      </>
  );
};
export default Navgtion;
