import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "../sign_screen/SignInScreen";
import styled from "styled-components/native";
import SignUpScreen from "../signup_screen/SignUpScreen";
import ConfirmScreen from "../confirm_screen/ConfirmScreen";
import ForgetScreen from "../forget_screen/ForgetScreen";
import ChangePassScreen from "../change_pass_screen/ChangePassScreen";
const NavigationScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Confirm" component={ConfirmScreen} />
        <Stack.Screen name="Forget" component={ForgetScreen} />
        <Stack.Screen name="Change" component={ChangePassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;

const styles = StyleSheet.create({});
