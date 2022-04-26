import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Alert,
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
import {
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
const SignInScreen = () => {
  const { height, width } = useWindowDimensions();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  async function onSignInPress() {
    // check loading state
    if (loading) {
      return;
    }
    setLoading(true);
    // validate user
    let response = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        navigation.navigate("Home");
        // ...
      })
      .catch((error) => {
        Alert.alert("Oppsss!", error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    setLoading(false);
  }
  const onForgotPasswordPress = () => {
    navigation.navigate("Forget");
  };
  const onSignInFacebookPress = () => {
    // console.warn("sign in with Facebook clicked");
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        // The signed-in user info.
        const user = result.user;
        navigation.navigate("Home");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
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
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          rules={{
            required: "Email is required",
            minLength: {
              value: 5,
              message: "Email should be at least 5 characters",
            },
          }}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          isSecure={true}
        />
        <CustomButton
          onPress={onSignInPress}
          text={loading ? "Loading..." : "Sign In"}
        />
        <CustomButton
          onPress={onForgotPasswordPress}
          type="TERTIARY"
          text="Forgot Password"
        />
        <CustomButton
          onPress={onSignInFacebookPress}
          text="Sign In with Github"
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
