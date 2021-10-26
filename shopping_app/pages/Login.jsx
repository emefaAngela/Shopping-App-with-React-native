import React from "react";
import { View,Text } from "react-native";

export default function Login(params){
    const navigation = params.navigation;
    return(
        <View
            style={{
                backgroundColor:"white",
                flex:1
            }}>
            <Text>Hello Welcome</Text>
        </View>
    );
}