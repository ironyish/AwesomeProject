// Header.js
import React from 'react';
import { View, TextInput,TouchableOpacity } from 'react-native';
import { SimpleLineIcons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome, Feather,Entypo} from "@expo/vector-icons";
import DrawerNavigator from './DrawerNavigator';
import Cart from './Cart';
import { Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native';
import ProfileScreen from './ProfileScreen';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{width:'100%',height:30,marginTop:30,flexDirection:'row', alignSelf:'center'}}>
    
      
      
      {/* <DrawerNavigator/> */}

      {/* <TextInput
        placeholder='Search here...'
        placeholderTextColor='gray'
        style={{ flex: 1, marginLeft: 10, paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#edeeef', borderRadius: 10 }}
        keyboardType='default'
      /> */}
       {/* < Entypo name="user" size={24} color="black" marginLeft={30} />  */}
       <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
      <Entypo name="user" size={24} color="white" marginLeft={300} backgroundColor="green" padding={2} />
    </TouchableOpacity>

    </View>
  );
}

export default Header;
