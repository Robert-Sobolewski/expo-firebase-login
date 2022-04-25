import {
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styled from "styled-components/native";
interface IButtonProps {
  onPress: Function;
  text: string;
  type?: string;
  bgColor?: string;
  fgColor?: string;
}
const CustomButton = ({
  onPress,
  text,
  type,
  bgColor,
  fgColor,
}: IButtonProps) => {
  const { width, height } = useWindowDimensions();
  return type == "TERTIARY" || type == "SECONDARY" ? (
    <TouchableOpacity onPress={onPress}>
      <StyledButtonText type={type}>{text}</StyledButtonText>
    </TouchableOpacity>
  ) : (
    <StyledButtonContainer bgColor={bgColor} onPress={onPress}>
      <StyledButtonText fgColor={fgColor}>{text}</StyledButtonText>
    </StyledButtonContainer>
  );

  // <StyledButtonContainer onPress={onPress}>
  //   <StyledButtonText>{text}</StyledButtonText>
  // </StyledButtonContainer>
};

export default CustomButton;

const StyledButtonContainer = styled.TouchableOpacity`
  padding: 15px;
  margin-vertical: 8px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: #3b71f3;
  ${(props: any) =>
    props.bgColor &&
    `
  background-color: ${props.bgColor};
  `}
`;
const StyledButtonText = styled.Text`
  font-weight: bold;
  color: white;
  ${(props: any) =>
    props.type &&
    `
  color:black;
  text-align: center;
  padding-vertical: 5px;
  `}
  ${(props: any) =>
    props.fgColor &&
    `
    color: ${props.fgColor};
  `}
  ${(props: any) =>
    props.type == "TERTIARY" &&
    `
  color: #a3b;
  `}

  ${(props: any) =>
    props.type == "SECONDARY" &&
    `
  padding-vertical:10px;
  border-radius: 5px;
  color:#3b71f3;
  border: solid 2px #3b71f3;
  `}
`;
