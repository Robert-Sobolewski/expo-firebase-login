import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { MainImage, Title, StyledLink, RootContainer } from "../../styles";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { firebaseApp, db, auth } from "../../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
const SignUpScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const navigation = useNavigation();
  //add google provider
  const g_provider: GoogleAuthProvider = new GoogleAuthProvider();
  function onRegisterPress() {
    // console.warn("register clicked")

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        user.displayName = username;
        if (!auth.currentUser?.emailVerified) {
          sendEmailVerification(user)
            .then(() => {
              console.warn("Email verification sent!!!");
            })
            .catch((err: any) => {
              console.error(err);
            });
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
    navigation.navigate("Confirm");
  }
  const onTermsPress = () => {
    console.warn("terms clicked");
  };
  const onPrivacyPolicyPress = () => {
    console.warn("policy privacy clicked");
  };
  const onSignInPress = () => {
    // console.warn("onSignInPress clicked");
    navigation.navigate("SignIn");
  };
  const onRegisterWithFacebookPress = () => {
    console.warn("RegisterWith Facebook clicked");
  };

  const onRegisterWithGooglePress = () => {
    console.warn("RegisterWith Google clicked");
    // signInWithPopup(auth, g_provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential!.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.email;
    //     console.error(error);
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
  };
  const onRegisterWithApplePress = () => {
    console.warn("RegisterWith Apple clicked");
  };
  // const onCreateAccountPress = () => {
  //   console.warn("go to the sing up clicked");
  // };
  return (
    <RootContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Title>Create an Account</Title>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            isSecure={true}
          />
          <CustomInput
            placeholder="Password repeat"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            isSecure={true}
          />
          <CustomButton onPress={onRegisterPress} text="Register" />
          <StyledTerms>
            By registering, you confirm that you accept our{" "}
            <StyledLink onPress={onTermsPress}>Terms</StyledLink> and{" "}
            <StyledLink onPress={onPrivacyPolicyPress}>
              Privacy Policy
            </StyledLink>
          </StyledTerms>

          <CustomButton
            onPress={onRegisterWithFacebookPress}
            text="Sign In with Facebook"
            fgColor="#4765a9"
            bgColor="#e7eaf4"
          />
          <CustomButton
            onPress={onRegisterWithGooglePress}
            text="Sign In with Google"
            bgColor="#fae9ea"
            fgColor="#dd4d44"
          />
          <CustomButton
            onPress={onRegisterWithApplePress}
            text="Sign In with Apple"
            bgColor="#e3e3e3"
            fgColor="#363636"
          />
          <CustomButton
            onPress={onSignInPress}
            type="TERTIARY"
            text="Have you an Account? Sign in"
          />
        </View>
      </ScrollView>
    </RootContainer>
  );
};

export default SignUpScreen;

const StyledTerms = styled.Text`
  padding-bottom: 10px;
  display: flex;
  align-self: center;
`;
