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

const ChangePassScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const navigation = useNavigation();
  const onSubmitPress = () => {
    // console.warn("register clicked");
    navigation.navigate("Home");
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
  // const onRegisterWithFacebookPress = () => {
  //   console.warn("RegisterWith Facebook clicked");
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
          <Title>Reset your Password</Title>
          <CustomInput placeholder="Code" value={code} setValue={setCode} />
          <CustomInput
            placeholder="Enter your new password"
            value={newPassword}
            setValue={setNewPassword}
            isSecure={true}
          />

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
        /> */}
          <CustomButton onPress={onSubmitPress} text="Submit" />
          {/* <StyledTerms>
          By registering, you confirm that you accept our{" "}
          <StyledLink onPress={onTermsPress}>Terms</StyledLink> and{" "}
          <StyledLink onPress={onPrivacyPolicyPress}>Privacy Policy</StyledLink>
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

export default ChangePassScreen;

const StyledTerms = styled.Text`
  padding-bottom: 10px;
  display: flex;
  align-self: center;
`;
