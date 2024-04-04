import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MaterialIcons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
// import SplashScreen from './SplashScreen';
import Settings from './Settings';
import Cart from './Cart';

const Footer = () => {
  const navigation = useNavigation();

//   const goToHome = () => {
//     navigation.navigate('Home');

//   };

  return (
    <View style={styles.footer}>
     
      <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
        {/* <Icon name="Settings"  size={30} color="#333" marginLeft ={100} /> */}
        <MaterialIcons name="settings" size={30} color="green" marginRight={100} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <MaterialIcons name="home"  size={30} color="green" marginRight={100} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
        <MaterialIcons name="shop"  size={30} color="green" marginRight={10} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
    bottom: 0,
    width: '100%',
    flexDirection:  'row',
    // position: 'absolute',
    

  },
});

export default Footer;
