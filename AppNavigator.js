import { View, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
// import Registration from './Registration';
import SplashScreen from './SplashScreen';
import Signup from './Signup';
// import Test from './Test';
import PasswordReset from './PasswordReset';


const Drawer = createDrawerNavigator(AppNavigator);
 function AppNavigator() {
  return (
  
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home " component={SplashScreen} />
      
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="PasswordReset" component={PasswordReset} />
        <AppNavigator/>

      </Drawer.Navigator>
    

  
  );
}


export default AppNavigator;