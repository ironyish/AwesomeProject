import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
// import LoginScreen from './Login'
import LoginScreen from "./LoginScreen";
import CommonFunction from "./CommonFunction";
import { ScrollView } from "react-native-gesture-handler";
// import styles from './styles';

const Signup = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "green",
            width: "50%",
            alignSelf: "center",
            borderRadius: 10,
            padding: 5,
          }}
        >
          <Image
            style={Styles.image}
            source={require("../AwesomeProject/image/asgLogo1.png")}
          />
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 19,
              fontWeight: "bold",
            }}
          >
            AGROSHINE
          </Text>
          {/* <Text style={{fontSize:19,fontWeight:'bold',color:'green',textAlign:'center',}}>Signup</Text> */}
        </View>
        <View
          style={{
            backgroundColor: "white",
            elevation: 1,
            margin: 20,
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 15,
            marginBottom: 20,
          }}
        >
          {/* <Image style={Styles.image} source={require('../AwesomeProject/image/asgLogo1.png')}/>
      <Text style={{color:'green',textAlign:'center',fontSize:16,fontWeight:'bold'}}>AGROSHINE</Text>
      <Text style={{fontSize:19,fontWeight:'bold',color:'green',textAlign:'center',}}>Signup</Text> */}
          <View>
            <Text style={{ fontSize: 17, color: "green" }}>Username</Text>

            <TextInput
              placeholder=" e.g:JOHN"
              placeholderTextColor="gray"
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: 8,
                height: 42,
                width: "100%",
                borderWidth: 1,
                borderColor: "green",
                margin: 5,
              }}
              keyboardType="default"
            />

            <Text style={{ fontSize: 17, color: "green" }}>Phone Number</Text>
            <TextInput
              placeholder=" 88****"
              placeholderTextColor="gray"
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: 8,
                height: 42,
                width: "100%",
                borderWidth: 1,
                borderColor: "green",
                margin: 5,
              }}
              keyboardType="number-pad"
            />

            <Text style={{ fontSize: 17, color: "green" }}>Password</Text>

            <TextInput
              placeholder=" is-password"
              placeholderTextColor="gray"
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: 8,
                height: 42,
                width: "100%",
                borderWidth: 1,
                borderColor: "green",
                margin: 5,
              }}
              keyboardType="default"
              secureTextEntry={true}
            />
            <Text style={{ fontSize: 16, color: "green" }}>
              Confirm Password
            </Text>

            <TextInput
              placeholder=" Confirm-password"
              placeholderTextColor="gray"
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: 8,
                height: 42,
                width: "100%",
                borderWidth: 1,
                borderColor: "green",
                margin: 5,
              }}
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={{
              paddingVertical: 5,

              width: "100%",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {}}
          >
            <Text
              style={{
                backgroundColor: "green",
                fontSize: 19,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                padding: 10,
                margin: 5,
                borderRadius: 5,
              }}
            >
              Signup
            </Text>
          </TouchableOpacity>

          <Text style={{ color: "green", textAlign: "center" }}>
            Already have an Account?
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: 5,

              width: "100%",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 19,
                fontWeight: "bold",
                padding: 8,
                borderRadius: 5,
                borderColor: "green",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "green",
              }}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
