import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { MainImage, Title, StyledLink, RootContainer } from "../../styles";
import Logo from "../../assets/logo.png";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const ForgetScreen = () => {
  const [username, setUsername] = useState<string>("");
  const navigation = useNavigation();
  const [code, setCode] = useState<string>("");
  const onSendPress = () => {
    // console.warn("send clicked");
    navigation.navigate("Change");
  };
  // const onTermsPress = () => {
  //   console.warn("terms clicked");
  // };
  // const onPrivacyPolicyPress = () => {
  //   console.warn("policy privacy clicked");
  // };
  const onSignInPress = () => {
    // console.warn("onSignInPress clicked");
    navigation.navigate("SignIn");
  };
  // const onResendPress = () => {
  //   console.warn("Resend btn clicked");
  // };
  // const onRegisterWithGooglePress = () => {
  //   console.warn("RegisterWith Google clicked");
  // };
  // const onRegisterWithApplePress = () => {
  //   console.warn("RegisterWith Apple clicked");
  // };
  // const onCreateAccountPress = () => {
  //   console.warn("go to the sing up clicked");
  // };
  return (
    <RootContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Title>Reset your password</Title>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />

          <CustomButton onPress={onSendPress} text="Send" />
          {/* <CustomInput placeholder="Email" value={email} setValue={setEmail} />
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
        
        <StyledTerms>
          By registering, you confirm that you accept our{" "}
          <StyledLink onPress={onTermsPress}>Terms</StyledLink> and{" "}
          <StyledLink onPress={onPrivacyPolicyPress}>Privacy Policy</StyledLink>
        </StyledTerms> */}
          {/* <CustomButton
          onPress={onResendPress}
          type="SECONDARY"
          text="Resend Code"
        />*/}
          <CustomButton
            onPress={onSignInPress}
            type="TERTIARY"
            text="Back to Sign in"
          />
        </View>
      </ScrollView>
    </RootContainer>
  );
};

export default ForgetScreen;

const StyledTerms = styled.Text`
  padding-bottom: 10px;
  display: flex;
  align-self: center;
`;
