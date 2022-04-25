import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootContainer } from "../../styles";
import { firebaseApp, db, auth } from "../../Firebase";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged, User } from "firebase/auth";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  function onLogoutPress() {
    if (auth.currentUser) {
      auth.signOut();
    }
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("current user=", user);
        setCurrentUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        navigation.navigate("SignIn");
      }
    });
  }, [auth]);
  return (
    <RootContainer>
      <View>
        <Text>Welcome {currentUser?.email}</Text>
        <Text>email verification = {currentUser?.emailVerified}</Text>

        <CustomButton onPress={onLogoutPress} text="Logout" />
      </View>
    </RootContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: { fontSize: 24, alignSelf: "center" },
});
