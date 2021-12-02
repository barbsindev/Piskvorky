import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components/native';

import { Text } from 'react-native';

interface StyledTextProps {
  textColor: string;
  text?: string | undefined;
}

const StyledTextStyles = styled.Text<StyledTextProps>`
  padding: 12px;
  border-radius: 20px;
  color: ${(props) => props.textColor};
`;

export const StyledText: React.FC<StyledTextProps> = ({ textColor, text }) => {
  return <StyledTextStyles textColor={textColor}>{text}</StyledTextStyles>;
};
