import React from 'react';
// import { Text, TouchableOpacity } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

interface ButtonProps {
  flex?: string;
  flexDirection?: string;
  alignItems?: string;
  margin?: string;
  backgroundColor?: string;
  padding?: string | number;
  borderRadius?: string | number;
  textColor?: string;
  text?: string;
  background?: any;
  title?: string;
  bgColor?: any;
  pressed?: () => void;
}

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.fg};
  padding: 12px;
  border-radius: 20px;
`;
const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.bg};
`;

export const PressableButton: React.FC<ButtonProps> = (props) => (
  <ButtonContainer>
    <ButtonText onPress={props.pressed}>{props.text}</ButtonText>
  </ButtonContainer>
);
