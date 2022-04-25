import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
const CustomInput = ({
  value,
  setValue,
  placeholder,
  isSecure = false,
}: any) => {
  return (
    <StyledContainer>
      <StyledTextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={isSecure}
      />
    </StyledContainer>
  );
};

export default CustomInput;

const StyledTextInput = styled.TextInput`
  background-color: white;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  padding-horizontal: 10px;
  padding-vertical: 10px;
  font-size: 18px;
`;
const StyledContainer = styled.View`
  margin-vertical: 10px;
`;
