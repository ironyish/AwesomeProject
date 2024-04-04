// LoginScreen.js
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import CommonFunction from "./CommonFunction";

// import { TextInput } from 'react-native-gesture-handler';
// import Registration from './Registration';
import Signup from "./Signup";
import PasswordReset from "./PasswordReset";
import { ScrollView } from "react-native-gesture-handler";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
            elevation: 1,
            backgroundColor: "white",
            margin: 40,
            padding: 10,
            borderRadius: 10,
            marginTop: 30,
            marginLeft: 30,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, color: "green" }}>Username</Text>

            <TextInput
              placeholder=" e.g:JOHN"
              placeholderTextColor="gray"
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: 8,
                height: 45,
                width: "100%",
                borderWidth: 1,
                borderColor: "green",
                margin: 5,
              }}
              keyboardType="default"
            />
            <Text style={{ fontSize: 16, color: "green" }}>Password</Text>

            <TextInput
              placeholder=" is-password"
              placeholderTextColor="gray"
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                padding: 8,
                height: 45,
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
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            {/* <Text style={{elevation:3,alignItems:'center',justifyContent:'center',textAlign:'right',color:'white',fontSize:16,borderRadius:5,backgroundColor: 'green',padding:5,margin:5}} onPress={()=>navigation.navigate('PasswordReset')}>Reset</Text> */}
            <Text
              style={{
                margin: 5,
                color: "green",
                textAlign: "left",
                padding: 5,
                fontWeight: "bold",
                fontSize: 16,
              }}
              onPress={() => navigation.navigate("PasswordReset")}
            >
              Forgot Password?{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: 5,
              borderRadius: 5,

              width: "100%",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {}}
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
            >
              Login
            </Text>
          </TouchableOpacity>

          <Text
            style={{ color: "green", textAlign: "center", paddingBottom: 3 }}
          >
            Don't have an Account?
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
                backgroundColor: "green",
                fontSize: 19,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                padding: 10,
                margin: 5,
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate("Signup")}
            >
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
