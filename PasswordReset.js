import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const PasswordReset = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          margin: 40,
          padding: 20,
          borderRadius: 10,
          marginTop: 120,
          marginLeft: 30,
        }}
      >
        <Image
          style={Styles.image}
          source={require("../AwesomeProject/image/asgLogo1.png")}
        />
        <Text
          style={{
            color: "green",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          AGROSHINE
        </Text>
        {/* <Text style={{fontSize:19,fontWeight:'bold',color:'green',textAlign:'center',}}>Login</Text> */}

        <View>
          <Text style={{ fontSize: 16, color: "green" }}>
            Enter Email Address
          </Text>

          <TextInput
            placeholder=" e.g:@john123.com"
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
          <Text
            style={{
              fontSize: 16,
              color: "green",
              marginTop: 10,
              textAlign: "left",
            }}
          >
            Send Password
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: 5,

              width: "100%",
              textAlign: "center",
              alignItems: "right",
              justifyContent: "center",
            }}
            onPress={() => {}}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                padding: 10,
                borderRadius: 5,
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "green",
                elevation: 3,
              }}
            >
              Request
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PasswordReset;
