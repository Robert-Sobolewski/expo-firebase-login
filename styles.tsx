import styled from "styled-components/native";

export const RootContainer = styled.View`
  flex: 1;
  background: #f9fbfc;
  padding-top: 10px;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 30px;
  margin: 0;
`;

export const MainImage = styled.Image`
  width: 70%;
  min-width: 250px;
  height: 150px;
  max-height: 250px;
  max-width: 300px;
  border-radius: 20px;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #051c60;
  margin: 10px;
`;
export const StyledLink = styled.Text`
  color: #a3b;
  padding-horizontal: 10px;
`;
