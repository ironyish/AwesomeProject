import React from 'react';
import { View, Text,StyleSheet } from 'react-native';



export default function Layout({children}){
    return(
        <View style={Style.Container}>
            {children}
        </View>

    );
}


const Style=StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
         backgroundColor: 'white',
         width:'100%',
        Height:'100%',

    }
})