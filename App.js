import { View, Text, Image,TouchableOpacity,TextInput } from 'react-native';
import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
  
} from "@expo/vector-icons";
//  import { Searchbar, Menu } from 'react-native-paper'; 


import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
// import Registration from './Registration';
import SplashScreen from './SplashScreen';
import Signup from './Signup';
// import Test from './Test';
import Settings from './Settings';
import ProfileScreen from './ProfileScreen';
import PasswordReset from './PasswordReset';
import styles from './styles';
import Footer from './Footer';
import Header from './Header';
import Cart from './Cart';
import DrawerNavigator from './DrawerNavigator';


  // const Drawer = createDrawerNavigator();

    //  const Stack= createNativeStackNavigator();

 function AppNavigator({navigation}) {
  return (
     <NavigationContainer >
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={SplashScreen}  />   */}

    {/* <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerTitle: '' ,
        headerStyle: {
          backgroundColor: 'white',
        },
        
    //  drawerContentOptions:{
    //    activeTintColor: '#397960',
    //   inactiveTintColor: '#41944f',
    //   itemStyle: { marginVertical: 5 },
    //   labelStyle: { fontSize: 30 },
    //   },
    
    drawerStyle:{
      backgroundColor: 'green',
      width: '70%',
      // position:'relative',
      zIndex:2,
    
    },
    
    drawerItem:{
      color:  "blue",
      // label:{label},

    
      // activeBackgroundColor:"#0000ff",
      // inactiveBackgroundColor:"#ff0000",
      width:40,
    
    
    
    },

  }}
    >
<Drawer.Screen name="Profile" component={ProfileScreen} options={{
 drawerItemStyle:{
  backgroundColor:'white',
 },
 drawerIcon: () => (
  <MaterialIcons name="face" size={20} color="#808080" />
)


 }} />

         <Drawer.Screen name="Home" component={SplashScreen} options={{
 drawerItemStyle:{
  backgroundColor:'white',
  
 },
 drawerIcon: () => (
  <MaterialIcons name="home" size={20} color="#808080" />
)


 }} /> 
 



      
        <Drawer.Screen name="LoginScreen" component={LoginScreen} options={{
 drawerItemStyle:{
  backgroundColor:'white',
 },
 drawerIcon: () => (
  <MaterialIcons name="login" size={20} color="#808080" />
)
 


 }} />
    
<Drawer.Screen name="Signup" component={Signup} options={{
 drawerItemStyle:{
  backgroundColor:'white', 
 },
 drawerIcon: () => (
  <MaterialIcons name="person" size={20} color="#808080" />
)
 

 }}
        
      
 />
        <Drawer.Screen name="PasswordReset" component={PasswordReset } options={{
      drawerItemStyle: { display: 'none' },}}/>
       <Drawer.Screen name="Cart" component={Cart } options={{
      drawerItemStyle: { display: 'none' },}}/>
        <Drawer.Screen name="Settings" component={Settings } options={{
 drawerItemStyle:{
  backgroundColor:'white',
 },
 drawerIcon: () => (
  <MaterialIcons name="settings" size={20} color="#808080" />
)
 


 }} />
    </Drawer.Navigator> */}
    {/* </Stack.Navigator> */}
            <Header/> 

    <DrawerNavigator/>
      
    <Footer   />

      </NavigationContainer>
  
  
  );
}


export default AppNavigator;