import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
// import Registration from './Registration';
import SplashScreen from './SplashScreen';
import Signup from './Signup';
// import Test from './Test';
import Settings from './Settings';
import ProfileScreen from './ProfileScreen';
import PasswordReset from './PasswordReset';
import Cart from './Cart';
import { useNavigation } from '@react-navigation/native';
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
  
} from "@expo/vector-icons";




const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={CustomDrawerContent} screenOptions={{
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
      // zIndex:2,
    
    },
    
    drawerItem:{
      color:  "blue",
      // label:{label},

    
      // activeBackgroundColor:"#0000ff",
      // inactiveBackgroundColor:"#ff0000",
      width:40,
    
    
    
    },
    }} >


      
<Drawer.Screen name="Profile" component={ProfileScreen} options={{
 drawerItemStyle:{
  backgroundColor:'white',
 },
 drawerIcon: () => (
  <MaterialIcons name="face" size={20} color="green" />
)


 }} />

         <Drawer.Screen name="Home" component={SplashScreen} options={{
 drawerItemStyle:{
  backgroundColor:'white',
  
 },
 drawerIcon: () => (
  <MaterialIcons name="home" size={20} color="green" />
)


 }} /> 
 



      
        <Drawer.Screen name="LoginScreen" component={LoginScreen} options={{
 drawerItemStyle:{
  backgroundColor:'white',
 },
 drawerIcon: () => (
  <MaterialIcons name="login" size={20} color="green" />
)
 


 }} />
    
<Drawer.Screen name="Signup" component={Signup} options={{
 drawerItemStyle:{
  backgroundColor:'white', 
 },
 drawerIcon: () => (
  <MaterialIcons name="person" size={20} color="green" />
)
 

 }}
        
      
 />
        <Drawer.Screen name="PasswordReset" component={PasswordReset } options={{
      drawerItemStyle: { display: 'none' },}}/>
       <Drawer.Screen name="Cart" component={Cart } options={{
 drawerItemStyle:{
  backgroundColor:'white',
 },
 drawerIcon: () => (
  <MaterialIcons name="shop" size={20} color="green" />
)
 


 }} />
        <Drawer.Screen name="Settings" component={Settings } options={{
 drawerItemStyle:{
  backgroundColor:'white',
 },
 drawerIcon: () => (
  <MaterialIcons name="settings" size={20} color="green" />
)
 


 }} />
    </Drawer.Navigator>
    
  )
}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      
      <View style={styles.profileContainer}>
        
        <MaterialCommunityIcons name="account-circle" size={50} color="white" />
      
        <View>
          <Text style={styles.username}>Farmers </Text>
          <View style={styles.followContainer}>
            
            <View style={styles.followItem}>
              <Text style={{color:'white'}}>Followers</Text>
              <Text style={{color:'white'}}>100</Text>
            </View>
            
            <View style={styles.followItem}>
              <Text style={{color:'white'}}>Following</Text>
              <Text style={{color:'white'}}>50</Text>
            </View>
          </View>
        </View>
      </View>

      <DrawerItem 
        label="Profile" style={{backgroundColor: 'white'}} 
        onPress={() => props.navigation.navigate('Profile')}
        icon={({ color, size }) => (
          <MaterialIcons name="face" size={30} color="#8e9eab" />
        )}
      />
      <DrawerItem
        label="Home" style={{backgroundColor:'white'}}
        onPress={() => props.navigation.navigate('Home')}
        icon={({ color, size }) => (
          <MaterialIcons name="home" size={30} color="#8e9eab" />
        )}
      /> 
       <DrawerItem
        label="Login" style={{backgroundColor:'white'}}
        onPress={() => props.navigation.navigate('LoginScreen')}
        icon={({ color, size }) => (
          <MaterialIcons name="login" size={30} color="#8e9eab" />
        )}
      /> 
       <DrawerItem
        label="Signup" style={{backgroundColor:'white'}}
        onPress={() => props.navigation.navigate('Signup')}
        icon={({ color, size }) => (
          <MaterialIcons name="person" size={30} color="#8e9eab" />
        )}
      /> 
       <DrawerItem
        label="Shop" style={{backgroundColor:'white'}}
        onPress={() => props.navigation.navigate('Cart')}
        icon={({ color, size }) => (
          <MaterialIcons name="shop" size={30} color="#8e9eab" />
        )}
      /> 
       <DrawerItem
        label="Settings" style={{backgroundColor:'white'}}
        onPress={() => props.navigation.navigate('Settings')}
        icon={({ color, size }) => (
          <MaterialIcons name="settings" size={30} color="#8e9eab" />
        )}
      /> 
      
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color:'white'
  },
  followContainer: {
    flexDirection: 'row',
    marginTop: 10,
    
  },
  followItem: {
    marginHorizontal: 10,
    alignItems: 'center',
    color:'blue'
  }
});
export default DrawerNavigator;