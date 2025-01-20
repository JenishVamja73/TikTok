

import React from "react";
import { Text, TextInput, View } from "react-native";
import style from "./style";



const Login = () => {
  
  
  // Function to handle login API call
  

  return (
    <View style={style.conatra}>
        <View>
        <Text style={style.TextWelcome}>Welcome back! Gold  </Text>
            <Text style={style.TextWelcome}> to  see you agin</Text>
            </View>
            <View>
                <TextInput style={style.TextInputEmail} placeholder="enter your email"></TextInput>
            </View>
      
    </View>
  );
};

export default Login;