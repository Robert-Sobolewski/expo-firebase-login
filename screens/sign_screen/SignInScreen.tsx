import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { MainImage, RootContainer } from "../../styles";
import Logo from "../../assets/logo.png";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { firebaseApp, db, auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const SignInScreen = () => {
  const { height, width } = useWindowDimensions();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();
  function onSignInPress() {
    // validate user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("Home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  const onForgotPasswordPress = () => {
    navigation.navigate("Forget");
  };
  const onSignInFacebookPress = () => {
    console.warn("sign in with Facebook clicked");
  };
  const onSignInGooglePress = () => {
    console.warn("sign in with Google clicked");
  };
  const onSignInApplePress = () => {
    console.warn("sign in with Apple clicked");
  };
  const onCreateAccountPress = () => {
    navigation.navigate("SignUp");
  };
  return (
    <RootContainer>
      <ScrollView style={{ width: "70%" }} showsVerticalScrollIndicator={false}>
        <MainImage
          style={{ height: height * 0.3 }}
          source={Logo}
          resizeMode="cover"
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          isSecure={true}
        />
        <CustomButton onPress={onSignInPress} text="Sign In" />
        <CustomButton
          onPress={onForgotPasswordPress}
          type="TERTIARY"
          text="Forgot Password"
        />
        <CustomButton
          onPress={onSignInFacebookPress}
          text="Sign In with Facebook"
          fgColor="#4765a9"
          bgColor="#e7eaf4"
        />
        <CustomButton
          onPress={onSignInGooglePress}
          text="Sign In with Google"
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />
        <CustomButton
          onPress={onSignInApplePress}
          text="Sign In with Apple"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          onPress={onCreateAccountPress}
          type="TERTIARY"
          text="Don't have an account? Create one"
        />
      </ScrollView>
    </RootContainer>
  );
};

export default SignInScreen;
