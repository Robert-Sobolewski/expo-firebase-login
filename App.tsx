import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SignInScreen from "./screens/sign_screen/SignInScreen";
import { RootContainer } from "./styles";
import SignUpScreen from "./screens/signup_screen/SignUpScreen";
import ConfirmScreen from "./screens/confirm_screen/ConfirmScreen";
import ForgetScreen from "./screens/forget_screen/ForgetScreen";
import ChangePassScreen from "./screens/change_pass_screen/ChangePassScreen";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationScreen from "./screens/navigation/NavigationScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home_screen/HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        options={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Confirm" component={ConfirmScreen} />
        <Stack.Screen name="Forget" component={ForgetScreen} />
        <Stack.Screen name="Change" component={ChangePassScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
